import fs from "fs";
import path from "path";

const root = process.cwd();
const src = path.join(root, "src");
const tpl = fs.readFileSync(path.join(src, "template.html"), "utf8");

const partFiles = ["part1.js","part2.js","part3.js","part4.js","part5.js","part6.js"];

if(!tpl.includes("/*__EVENTS__*/")) throw new Error("template marker /*__EVENTS__*/ missing");

// All data files are JSON arrays. Curated files are reviewed repo content;
// part-auto.js is generated from external sources. Nothing is evaluated as code.
const curated = partFiles.flatMap(f => JSON.parse(fs.readFileSync(path.join(src, f), "utf8")));
const autoPath = path.join(src, "part-auto.js");
const auto = fs.existsSync(autoPath) && fs.readFileSync(autoPath, "utf8").trim()
  ? JSON.parse(fs.readFileSync(autoPath, "utf8"))
  : [];
const events = curated.concat(auto);
events.sort((a,b)=>String(a.dt).localeCompare(String(b.dt)));

const EXPECTED_MIN = 158;
if(events.length < EXPECTED_MIN) throw new Error(`expected at least ${EXPECTED_MIN} events, got ${events.length}`);

const FIELD_ORDER = ["engineering","math","physics","chemistry","biology","medicine","neuroscience","climate","robotics","computing","society","general"];
const FIELD_RULES = {
  engineering: ["火箭发动机","航空发动机","冲压发动机","发动机设计","涡轮","燃气轮机","航空","航天","火箭","飞机","汽车","车辆","制造","机械臂","机械设计","机械工程","CFD","流体","热管理","增材制造","3D打印","叶片","轴承","推进","燃烧","内燃机","电机","发电机","变压器","风机","泵","阀门","齿轮","传动","engine","turbine","rocket","aerospace","manufacturing","mechanical","propulsion"],
  math: ["数学","定理","证明","几何","代数","数论","黎曼","Navier","千禧年","Lean","FrontierMath","奥赛","形式化","符号逻辑","概率论","博弈论","优化","拓扑","组合数学","矩阵","mathematics","theorem","proof","geometry","algebra","topology","optimization"],
  physics: ["物理","量子","核聚变","托卡马克","等离子体","粒子","引力","高能","诺贝尔物理学","超导","半导体","光刻","材料","晶体","physics","quantum","fusion","plasma","particle","material"],
  chemistry: ["分子","催化","有机","材料发现","GNoME","晶体结构","药物分子","化学反应","化学奖","chemistry","molecule","catalyst"],
  biology: ["生物","基因","蛋白","细胞","DNA","RNA","噬菌体","肺癌","生命科学","AlphaFold","基因组","物种","生态系统","农业","合成生物","protein","gene","cell","cancer","drug","bio"],
  medicine: ["医学","医疗","临床","FDA","疾病","诊断","患者","手术","医院","健康","心理","medical","clinical","patient","disease","diagnosis"],
  neuroscience: ["神经科学","神经元","突触","大脑","认知","脑机","意识","neuroscience","brain","neuron","cognition"],
  climate: ["气候","天气","能源","电网","电力","碳排放","气象","太阳能","储能","IEA","数据中心","climate","weather","energy","grid","emissions"],
  robotics: ["机器人","具身","自动驾驶","无人机","机械臂","人形","运动控制","工业控制","robot","autonomous","drone","humanoid"],
  computing: ["计算机","编程","软件","代码","算法","芯片","GPU","TPU","算力","操作系统","编译器","数据库","云","API","开源","框架","训练","推理","智能体","Transformer","神经网络","深度学习","机器学习","强化学习","语言模型","大模型","llm","gpt","agent","language model","neural","machine learning","deep learning","reinforcement learning","learning","network","software","algorithm","benchmark","computer","chip"],
  society: ["政策","监管","法律","就业","教育","经济","市场","商业","企业","收入","投资","IPO","估值","劳动力","社会","伦理","安全","版权","治理","policy","regulation","law","economy","market","business","employment","education"]
};
const FIELD_HINTS = {
  "LEAP 71": ["engineering"], "Noyron": ["engineering"], "GE Aerospace": ["engineering"],
  "AlphaFold": ["biology"], "GNoME": ["chemistry"], "GraphCast": ["climate"], "DENDRAL": ["chemistry"],
  "诺贝尔奖连续授予": ["physics","chemistry"], "托卡马克": ["physics"],
  "Navier-Stokes": ["math","physics"], "722": ["math"], "奥赛": ["math"],
  "支持向量机": ["math","computing"], "贝叶斯网络": ["math","computing"], "随机森林": ["math","computing"],
  "反向传播": ["math","computing"], "霍普菲尔德": ["math","physics","neuroscience","computing"],
  "噬菌体": ["biology","medicine"], "肺癌": ["biology","medicine"], "3.7 万": ["biology","medicine"],
  "人形机器人": ["robotics"], "自动驾驶": ["robotics"], "Siri": ["computing"],
  "ChatGPT": ["general"], "GPT-5": ["general"], "GPT-6": ["general"], "Claude": ["general"],
  "Gemini": ["general"], "DeepSeek": ["general"], "Qwen": ["general"], "Kimi": ["general"], "GLM": ["general"]
};
function inferFields(e){
  const hay = [e.t, e.org || "", ...(e.tags || [])].join(" ").toLowerCase();
  const out = new Set();
  for(const [id, kws] of Object.entries(FIELD_RULES)){
    if(kws.some(k => hay.includes(k.toLowerCase()))) out.add(id);
  }
  for(const [needle, fields] of Object.entries(FIELD_HINTS)){
    if(hay.includes(needle.toLowerCase())) fields.forEach(f => out.add(f));
  }
  const ordered = FIELD_ORDER.filter(f => out.has(f));
  return ordered.length ? ordered : ["general"];
}
events.forEach(e => { e.field = inferFields(e); });

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
