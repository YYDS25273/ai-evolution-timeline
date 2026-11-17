import fs from "fs";
import path from "path";

const root = process.cwd();
const srcDir = path.join(root, "src");
const autoFile = path.join(srcDir, "part-auto.js");
const dryRun = process.argv.includes("--dry-run");
const debug = process.argv.includes("--debug");
const MAX_NEW = 5;
const LOOKBACK_DAYS = 14;
const UA = "ai-evolution-timeline/1.0 (+https://github.com/YYDS25273/ai-evolution-timeline)";

const curatedFiles = ["part1.js","part2.js","part3.js","part4.js","part5.js","part6.js"];

// All data files are JSON arrays; curated files are reviewed repo content.
function loadCurated(file){
  const full = path.join(srcDir, file);
  if(!fs.existsSync(full)) return [];
  const t = fs.readFileSync(full, "utf8").trim();
  return t ? JSON.parse(t) : [];
}

// part-auto.js is generated JSON from external sources; parse as data, never evaluate it.
function loadAuto(){
  if(!fs.existsSync(autoFile)) return [];
  const t = fs.readFileSync(autoFile, "utf8").trim();
  if(!t) return [];
  return JSON.parse(t);
}

function isHttp(u){
  return /^https?:\/\//i.test(String(u || ""));
}

function clean(s){
  return String(s || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/\s+/g, " ")
    .trim();
}

function normTitle(s){
  return clean(s).toLowerCase().replace(/[\s\p{P}\p{S}]+/gu, "").slice(0, 90);
}

function normUrl(u){
  try{
    const x = new URL(u);
    x.hash = "";
    return (x.origin + x.pathname.replace(/\/$/, "")).toLowerCase();
  }catch{ return String(u).toLowerCase(); }
}

function hostname(u){
  try{ return new URL(u).hostname.replace(/^www\./, ""); }catch{ return ""; }
}

function eraOf(date){
  const y = Number(date.slice(0, 4));
  if(y <= 1969) return "dawn";
  if(y <= 1992) return "winter";
  if(y <= 2011) return "stat";
  if(y <= 2017) return "deep";
  if(y <= 2022) return "llm";
  if(y <= 2024) return "gen";
  return "agent";
}

async function fetchText(url, type = "text"){
  const res = await fetch(url, {
    headers: { "user-agent": UA, "accept": type === "json" ? "application/json" : "*/*" },
    signal: AbortSignal.timeout(20000)
  });
  if(!res.ok) throw new Error(`${res.status} ${res.statusText} · ${url}`);
  return type === "json" ? res.json() : res.text();
}

function tag(xml, name){
  const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return m ? clean(m[1]) : "";
}

const existingAuto = loadAuto();
const existing = curatedFiles.flatMap(loadCurated).concat(existingAuto);
const seenTitles = new Set(existing.map(e => normTitle(e.t)));
const seenUrls = new Set();
existing.forEach(e => (e.src || []).forEach(([, u]) => seenUrls.add(normUrl(u))));

const latestDate = existing.map(e => e.dt).filter(Boolean).sort().at(-1) || new Date().toISOString().slice(0, 10);
const cutoff = new Date(Date.parse(latestDate) - LOOKBACK_DAYS * 86400000).toISOString().slice(0, 10);
const today = new Date().toISOString().slice(0, 10);

const picked = [];
const errors = [];
let hnCount = 0, arxivCount = 0;

function addCandidate(item, source = "other"){
  if(picked.length >= MAX_NEW) return;
  if(source === "hn" && hnCount >= 3) return;
  if(source === "arxiv" && arxivCount >= 2) return;
  if(!item.t || item.t.length < 4) return;
  if(!item.dt || item.dt < cutoff || item.dt > today){ if(debug) console.log("skip date", item.dt, item.t); return; }
  const primary = [...(item.src || [])].reverse().find(([, u]) => isHttp(u))?.[1];
  if(!primary || seenUrls.has(normUrl(primary))){ if(debug) console.log("skip url", primary, item.t); return; }
  if(seenTitles.has(normTitle(item.t))){ if(debug) console.log("skip title", item.t); return; }
  if(item.s.length < 20){ if(debug) console.log("skip summary", item.t); return; }
  seenTitles.add(normTitle(item.t));
  seenUrls.add(normUrl(primary));
  if(source === "hn") hnCount++;
  else if(source === "arxiv") arxivCount++;
  if(debug) console.log("pick", source, item.dt, item.t);
  picked.push(item);
}

async function fetchHackerNews(){
  const queries = ["AI", "LLM"];
  const hits = new Map();
  for(const q of queries){
    const url = `https://hn.algolia.com/api/v1/search_by_date?query=${encodeURIComponent(q)}&tags=story&hitsPerPage=40`;
    try{
      const data = await fetchText(url, "json");
      for(const h of data.hits || []) hits.set(h.objectID, h);
    }catch(e){
      errors.push(`Hacker News (${q}): ${e.message}`);
    }
  }
  const rows = [...hits.values()]
    .filter(h => h.title && isHttp(h.url) && h.created_at)
    .filter(h => (h.points || 0) >= 30)
    .filter(h => /ai|llm|gpt|claude|gemini|deepseek|qwen|kimi|agent|robot|model|nvidia|openai|anthropic|deepmind|transformer|大模型|智能体/i.test(h.title))
    .sort((a, b) => String(b.created_at).localeCompare(String(a.created_at)) || (b.points || 0) - (a.points || 0));
  if(debug) console.log("HN candidates after points/keyword:", rows.length, "hits:", hits.size);

  for(const h of rows){
    const dt = String(h.created_at).slice(0, 10);
    const title = clean(h.title).slice(0, 140);
    if(debug) console.log("HN row:", dt, JSON.stringify(title), h.url, h.points);
    const org = hostname(h.url) || "Hacker News";
    const points = Number(h.points || 0), comments = Number(h.num_comments || 0);
    addCandidate({
      dt,
      d: dt.replace(/-/g, "."),
      era: eraOf(dt),
      cat: /launch|release|introduc|announc|model|gpt|claude|gemini|llm|agent/i.test(title) ? "model" : "industry",
      t: title,
      org,
      s: `Hacker News 热门讨论（${points} points，${comments} 条评论）：${title}`,
      x: "自动收录自 Hacker News 的公开条目。原文与讨论页见下方；该条目尚未经过人工事实核查，合并 PR 前请复核事实、措辞与来源。",
      n: [[String(points), "HN points"], [String(comments), "评论"]],
      tags: ["自动收录", "Hacker News"],
      src: [["Hacker News 讨论", `https://news.ycombinator.com/item?id=${h.objectID}`], ["原文", h.url]],
      auto: true
    }, "hn");
  }
}

async function fetchArxiv(){
  const url = "https://export.arxiv.org/api/query?search_query=cat:cs.AI+OR+cat:cs.LG+OR+cat:cs.CL&sortBy=submittedDate&sortOrder=descending&max_results=30";
  let xml = "";
  try{
    xml = await fetchText(url);
  }catch(e){
    errors.push(`arXiv: ${e.message}`);
    return;
  }
  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/gi)].map(m => m[1]);
  if(debug) console.log("arXiv entries:", entries.length);
  for(const entry of entries){
    const dt = tag(entry, "published").slice(0, 10);
    const title = tag(entry, "title").slice(0, 160);
    const summary = tag(entry, "summary");
    const id = tag(entry, "id");
    if(debug && entries.indexOf(entry) < 2) console.log("arXiv row:", dt, JSON.stringify(title), id);
    if(!isHttp(id)) continue;
    if(!/\b(ai|llm|gpt|agent|language model|transformer|diffusion|neural|learning|reasoning|robot|vision|multimodal|generative|benchmark|retrieval|alignment|safety)\b/i.test(title)
       && !/智能体|大模型|生成|神经网络|多模态/i.test(title)) continue;
    addCandidate({
      dt,
      d: dt.replace(/-/g, "."),
      era: eraOf(dt),
      cat: "science",
      t: title,
      org: "arXiv",
      s: summary.slice(0, 220) + (summary.length > 220 ? "…" : ""),
      x: `自动收录自 arXiv 最新论文列表（${id}）。论文尚未经过同行评审或人工事实核查，合并 PR 前请复核摘要、结论与来源。`,
      tags: ["自动收录", "arXiv", "论文"],
      src: [["arXiv 摘要", id]],
      auto: true
    }, "arxiv");
  }
}

await Promise.all([fetchHackerNews(), fetchArxiv()]);

const fresh = picked
  .sort((a, b) => b.dt.localeCompare(a.dt))
  .slice(0, MAX_NEW);

if(!fresh.length){
  console.log(`No new items · cutoff=${cutoff} · errors=${errors.length}`);
  errors.forEach(e => console.warn("  !", e));
  if(errors.length >= 2) process.exitCode = 1;
  process.exit();
}

if(dryRun){
  console.log(JSON.stringify({ cutoff, count: fresh.length, items: fresh }, null, 2));
  errors.forEach(e => console.warn("  !", e));
  process.exit();
}

const merged = existingAuto.concat(fresh);
const body = merged.map(e => JSON.stringify(e, null, 1)).join(",\n");
fs.writeFileSync(autoFile, "[\n" + body + "\n]\n", "utf8");
console.log(`Auto-update: added ${fresh.length}, total auto entries ${merged.length}, cutoff=${cutoff}`);
errors.forEach(e => console.warn("  !", e));
