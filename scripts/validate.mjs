import fs from "fs";
import path from "path";

const root = process.cwd();
const srcDir = path.join(root, "src");
const files = ["part1.js","part2.js","part3.js","part4.js","part5.js","part6.js"];

// All data files are JSON arrays; no dynamic code evaluation.
const curated = files.flatMap(f => JSON.parse(fs.readFileSync(path.join(srcDir, f), "utf8")));
const autoPath = path.join(srcDir, "part-auto.js");
const auto = fs.existsSync(autoPath) && fs.readFileSync(autoPath, "utf8").trim()
  ? JSON.parse(fs.readFileSync(autoPath, "utf8"))
  : [];
const events = curated.concat(auto);
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
const FIELDS = ["engineering","math","physics","chemistry","biology","medicine","neuroscience","climate","robotics","computing","society","general"];
const EXPECTED_MIN = 158;
const MIN_DATE = "1943-01-01";
const MAX_DATE = new Date(Date.now() + 86400000).toISOString().slice(0,10);

const problems = [];
const titles = new Map();

if(events.length < EXPECTED_MIN){
  problems.push(`event count: expected at least ${EXPECTED_MIN}, got ${events.length}`);
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

const builtMatch = html.match(/const EVENTS = (\[[\s\S]*?\]);\nEVENTS\.sort/);
const byField = {};
if(!builtMatch){
  problems.push("cannot parse EVENTS from index.html");
}else{
  let built = [];
  try{ built = JSON.parse(builtMatch[1]); }
  catch(e){ problems.push("index.html EVENTS is not valid JSON: " + e.message); }
  if(built.length !== events.length) problems.push(`index.html parsed ${built.length} events, expected ${events.length}`);
  built.forEach((e,i)=>{
    const where = `built #${i} ${e.dt || "?"} ${e.t || "(no title)"}`;
    if(!Array.isArray(e.field) || !e.field.length){
      problems.push(`${where}: missing field[]`);
    }else{
      e.field.forEach(f=>{
        if(!FIELDS.includes(f)) problems.push(`${where}: unknown field "${f}"`);
        else byField[f]=(byField[f]||0)+1;
      });
    }
    (e.src || []).forEach((pair,j)=>{
      if(!Array.isArray(pair) || pair.length !== 2) problems.push(`${where}: src[${j}] must be [label,url]`);
      else if(!/^https?:\/\//i.test(pair[1])) problems.push(`${where}: src[${j}] bad url ${pair[1]}`);
    });
  });
}

const byEra = {}; events.forEach(e=>byEra[e.era]=(byEra[e.era]||0)+1);
const byCat = {}; events.forEach(e=>byCat[e.cat]=(byCat[e.cat]||0)+1);

if(problems.length){
  console.error(`✗ ${problems.length} problem(s):`);
  problems.slice(0,50).forEach(p=>console.error("  - " + p));
  process.exit(1);
}

console.log(`✓ ${events.length} events · ${Object.keys(byEra).length} eras · ${Object.keys(byCat).length} categories · ${Object.keys(byField).length} fields`);
console.log("  eras:", JSON.stringify(byEra));
console.log("  cats:", JSON.stringify(byCat));
console.log("  fields:", JSON.stringify(byField));
