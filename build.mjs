import fs from "fs";
import path from "path";

const root = process.cwd();
const src = path.join(root, "src");
const tpl = fs.readFileSync(path.join(src, "template.html"), "utf8");

const partFiles = ["part1.js","part2.js","part3.js","part4.js","part5.js","part6.js"];
const parts = partFiles.map(f=>{
  let t = fs.readFileSync(path.join(src,f),"utf8").trim();
  if(t.startsWith("[")) t = t.slice(1);
  if(t.endsWith("]")) t = t.slice(0,-1);
  return t.trim();
});

if(!tpl.includes("/*__EVENTS__*/")) throw new Error("template marker /*__EVENTS__*/ missing");

const events = new Function("return [" + parts.join(",") + "]")();
events.sort((a,b)=>String(a.dt).localeCompare(String(b.dt)));

const EXPECTED = 156;
if(events.length !== EXPECTED) throw new Error(`expected ${EXPECTED} events, got ${events.length}`);

const payload = events
  .map(e=>JSON.stringify(e))
  .join(",\n")
  .replace(/<\/script/gi, "<\\/script");

const html = tpl.replace("/*__EVENTS__*/", payload);

const outputs = ["index.html", "AI发展史时间线.html"];
for(const name of outputs){
  fs.writeFileSync(path.join(root,name), html, "utf8");
}

// extract inline script for a syntax check (kept out of git)
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if(!m) throw new Error("inline <script> not found");
fs.writeFileSync(path.join(root, ".build-check.js"), m[1], "utf8");

console.log(`built ${outputs.join(" + ")} · ${events.length} events · ${(Buffer.byteLength(html,"utf8")/1024).toFixed(1)} KB`);
