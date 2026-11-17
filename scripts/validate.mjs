import fs from "fs";
import path from "path";

const root = process.cwd();
const srcDir = path.join(root, "src");
const files = ["part1.js","part2.js","part3.js","part4.js","part5.js","part6.js"];

const data = files.map(f=>{
  let t = fs.readFileSync(path.join(srcDir,f),"utf8").trim();
  if(t.startsWith("[")) t = t.slice(1);
  if(t.endsWith("]")) t = t.slice(0,-1);
  return t;
}).join(",");

const events = new Function("return [" + data + "]")();
events.sort((a,b)=>String(a.dt).localeCompare(String(b.dt)));

const ERAS = {
  dawn:  [1943, 1969],
  winter:[1970, 1992],
  stat:  [1993, 2011],
  deep:  [2012, 2017],
  llm:   [2018, 2022],
  gen:   [2023, 2024],
  agent: [2025, 2026]
};
const CATS = ["theory","model","science","industry","infra","policy","app","safety"];
const EXPECTED = 156;
const MIN_DATE = "1943-01-01";
const MAX_DATE = "2026-11-17";

const problems = [];
const titles = new Map();

if(events.length !== EXPECTED){
  problems.push(`event count: expected ${EXPECTED}, got ${events.length}`);
}

events.forEach((e,i)=>{
  const where = `#${i} ${e.dt || "?"} ${e.t || "(no title)"}`;
  if(!/^\d{4}-\d{2}-\d{2}$/.test(e.dt || "")){
    problems.push(`${where}: dt must be YYYY-MM-DD`);
  }else if(e.dt < MIN_DATE || e.dt > MAX_DATE){
    problems.push(`${where}: dt out of range ${MIN_DATE}..${MAX_DATE}`);
  }
  if(!ERAS[e.era]) problems.push(`${where}: unknown era "${e.era}"`);
  if(!CATS.includes(e.cat)) problems.push(`${where}: unknown cat "${e.cat}"`);
  if(!e.t || e.t.length < 4) problems.push(`${where}: title too short`);
  if(!e.s || e.s.length < 20) problems.push(`${where}: summary too short`);
  if(!Array.isArray(e.src) || !e.src.length) problems.push(`${where}: missing source`);
  (e.src || []).forEach((pair,j)=>{
    if(!Array.isArray(pair) || pair.length !== 2) problems.push(`${where}: src[${j}] must be [label,url]`);
    else if(!/^https?:\/\//.test(pair[1])) problems.push(`${where}: src[${j}] bad url ${pair[1]}`);
  });
  if(titles.has(e.t)) problems.push(`${where}: duplicate title (also #${titles.get(e.t)})`);
  else titles.set(e.t,i);
});

const html = fs.readFileSync(path.join(root,"index.html"),"utf8");
const htmlCount = (html.match(/"dt":"/g) || []).length;
if(htmlCount !== events.length) problems.push(`index.html has ${htmlCount} events, src has ${events.length}`);
if(!html.includes("1943")) problems.push("index.html missing 1943 start");
if(!html.includes("722")) problems.push("index.html missing 722 papers node");

const byEra = {}; events.forEach(e=>byEra[e.era]=(byEra[e.era]||0)+1);
const byCat = {}; events.forEach(e=>byCat[e.cat]=(byCat[e.cat]||0)+1);

if(problems.length){
  console.error(`✗ ${problems.length} problem(s):`);
  problems.slice(0,50).forEach(p=>console.error("  - " + p));
  process.exit(1);
}

console.log(`✓ ${events.length} events · ${Object.keys(byEra).length} eras · ${Object.keys(byCat).length} categories`);
console.log("  eras:", JSON.stringify(byEra));
console.log("  cats:", JSON.stringify(byCat));
