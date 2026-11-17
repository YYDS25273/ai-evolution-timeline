import fs from "fs";
import path from "path";

const root = process.cwd();
const fieldDir = path.join(root, "assets", "fields");
const eventDir = path.join(root, "assets", "events");
fs.mkdirSync(fieldDir, { recursive: true });
fs.mkdirSync(eventDir, { recursive: true });

const V = {
  math: "#4f5fd8",
  physics: "#1f7fbf",
  chemistry: "#0f9b7f",
  biology: "#4f9a2f",
  medicine: "#d14f5c",
  neuroscience: "#7a5ac8",
  climate: "#b26a00",
  engineering: "#c06a1c",
  robotics: "#c2477f",
  computing: "#4f63c8",
  society: "#9a6b3f",
  general: "#64748b"
};

function shell(accent, label, body){
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="520" viewBox="0 0 1200 520" role="img">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#f4f7fc"/><stop offset="1" stop-color="#e8eff8"/>
  </linearGradient>
  <radialGradient id="glow" cx=".28" cy=".08" r=".9">
    <stop offset="0" stop-color="${accent}" stop-opacity=".30"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="glow2" cx=".85" cy=".85" r=".7">
    <stop offset="0" stop-color="${accent}" stop-opacity=".12"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/>
  </radialGradient>
  <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
    <path d="M48 0H0V48" fill="none" stroke="#1f2937" stroke-opacity=".06"/>
  </pattern>
  <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0"/><stop offset="1" stop-color="#ffffff" stop-opacity=".45"/>
  </linearGradient>
</defs>
<rect width="1200" height="520" fill="url(#bg)"/>
<rect width="1200" height="520" fill="url(#glow)"/>
<rect width="1200" height="520" fill="url(#glow2)"/>
<rect width="1200" height="520" fill="url(#grid)"/>
<g fill="none" stroke-linecap="round" stroke-linejoin="round">${body}</g>
<rect width="1200" height="520" fill="url(#fade)"/>
<text x="44" y="486" font-family="Segoe UI, Arial, sans-serif" font-size="11" letter-spacing="3.2" fill="${accent}" fill-opacity=".72">${label}</text>
</svg>`;
}

const fields = {
  math: shell(V.math, "AI TIMELINE / MATHEMATICS", `
<path d="M100 408H1100M140 92V436" stroke="#1f2937" stroke-opacity=".12" stroke-width="1"/>
<path d="M140 350C260 350 260 180 380 180S500 350 620 350 740 100 860 100 980 250 1100 250" stroke="${V.math}" stroke-opacity=".9" stroke-width="3"/>
<path d="M140 350C260 350 260 180 380 180S500 350 620 350 740 100 860 100 980 250 1100 250V436H140Z" fill="${V.math}" fill-opacity=".07" stroke="none"/>
<circle cx="380" cy="180" r="8" fill="${V.math}" stroke="none"/><circle cx="620" cy="350" r="8" fill="${V.math}" stroke="none"/><circle cx="860" cy="100" r="8" fill="${V.math}" stroke="none"/>
<path d="M760 300l160 0-80 130z" stroke="${V.math}" stroke-opacity=".55" stroke-width="2"/>
<circle cx="940" cy="250" r="88" stroke="${V.math}" stroke-opacity=".35" stroke-width="2"/>
<text x="820" y="230" font-family="Georgia, serif" font-size="110" fill="${V.math}" fill-opacity=".18" stroke="none">∑</text>
<text x="300" y="150" font-family="Georgia, serif" font-size="42" fill="${V.math}" fill-opacity=".35" stroke="none">π</text>`),
  physics: shell(V.physics, "AI TIMELINE / PHYSICS", `
<g transform="translate(600 260)">
  <ellipse rx="300" ry="104" stroke="${V.physics}" stroke-opacity=".55" stroke-width="2"/>
  <ellipse rx="300" ry="104" transform="rotate(60)" stroke="${V.physics}" stroke-opacity=".42" stroke-width="2"/>
  <ellipse rx="300" ry="104" transform="rotate(-60)" stroke="${V.physics}" stroke-opacity=".42" stroke-width="2"/>
  <circle r="24" fill="${V.physics}" fill-opacity=".18" stroke="${V.physics}" stroke-opacity=".8" stroke-width="2"/>
  <circle cx="300" cy="0" r="8" fill="${V.physics}" stroke="none"/><circle cx="-150" cy="260" r="7" fill="${V.physics}" stroke="none"/><circle cx="-150" cy="-260" r="7" fill="${V.physics}" stroke="none"/>
</g>
<path d="M100 430h1000M100 90h1000" stroke="#1f2937" stroke-opacity=".06" stroke-width="1"/>
<path d="M100 390c80-70 160-70 240 0s160 70 240 0 160-70 240 0 160 70 240 0" stroke="${V.physics}" stroke-opacity=".28" stroke-width="2"/>`),
  chemistry: shell(V.chemistry, "AI TIMELINE / CHEMISTRY", `
<g stroke="${V.chemistry}" stroke-opacity=".55" stroke-width="2">
  <path d="M300 150l86 50v100l-86 50-86-50V200z"/>
  <path d="M386 200l86-50 86 50v100l-86 50-86-50"/>
  <path d="M558 300l86 50v100l-86 50-86-50V350"/>
  <path d="M300 350v100l86 50" stroke-opacity=".22"/>
</g>
<g fill="${V.chemistry}" stroke="none">
  <circle cx="300" cy="150" r="10"/><circle cx="386" cy="200" r="8"/><circle cx="472" cy="150" r="10"/><circle cx="558" cy="200" r="8"/><circle cx="644" cy="350" r="10"/>
</g>
<path d="M760 380c60-80 130-80 190 0s130 80 190 0" stroke="${V.chemistry}" stroke-opacity=".25" stroke-width="2"/>
<circle cx="880" cy="200" r="96" stroke="${V.chemistry}" stroke-opacity=".22" stroke-width="2"/>
<circle cx="880" cy="200" r="44" stroke="${V.chemistry}" stroke-opacity=".4" stroke-width="2"/>`),
  biology: shell(V.biology, "AI TIMELINE / BIOLOGY", `
<path d="M300 80c220 80 220 280 440 360" stroke="${V.biology}" stroke-opacity=".78" stroke-width="3"/>
<path d="M520 80c-220 80-220 280-440 360" stroke="${V.biology}" stroke-opacity=".48" stroke-width="3"/>
<g stroke="${V.biology}" stroke-opacity=".35" stroke-width="2">
  <path d="M330 120h160M352 172h172M385 226h176M430 282h170M478 338h156M520 392h140"/>
</g>
<g fill="${V.biology}" stroke="none"><circle cx="300" cy="80" r="9"/><circle cx="520" cy="80" r="9"/><circle cx="300" cy="440" r="9"/><circle cx="520" cy="440" r="9"/></g>
<circle cx="880" cy="260" r="120" stroke="${V.biology}" stroke-opacity=".2" stroke-width="2"/>
<circle cx="880" cy="260" r="58" stroke="${V.biology}" stroke-opacity=".35" stroke-width="2"/>
<path d="M760 430c80-50 160-50 240 0" stroke="${V.biology}" stroke-opacity=".25" stroke-width="2"/>`),
  medicine: shell(V.medicine, "AI TIMELINE / MEDICINE", `
<path d="M100 300h180l38-110 58 220 52-180 38 70h180l38-70 48 110 42-60h326" stroke="${V.medicine}" stroke-opacity=".85" stroke-width="3"/>
<path d="M100 300h180l38-110 58 220 52-180 38 70h180l38-70 48 110 42-60h326v150H100z" fill="${V.medicine}" fill-opacity=".06" stroke="none"/>
<g transform="translate(890 190)" stroke="${V.medicine}" stroke-opacity=".45" stroke-width="3">
  <circle r="82"/><path d="M0-46v92M-46 0h92"/>
</g>
<circle cx="890" cy="190" r="128" stroke="${V.medicine}" stroke-opacity=".12" stroke-width="2" stroke-dasharray="5 9"/>`),
  neuroscience: shell(V.neuroscience, "AI TIMELINE / NEUROSCIENCE", `
<path d="M470 90c-90 0-150 60-150 130 0 40 18 70 40 96-30 30-32 84 4 116 30 26 76 24 106 4 26 34 76 48 116 26 40-22 52-70 38-108 42-22 60-76 36-116-22-36-62-52-102-46-6-64-52-102-88-102z" stroke="${V.neuroscience}" stroke-opacity=".5" stroke-width="2"/>
<g stroke="${V.neuroscience}" stroke-opacity=".26" stroke-width="1.5">
  <path d="M390 220l90 40 80-60 70 90 60-40M420 330l80-20 60 70 70-40M500 260l30 80 80-10"/>
</g>
<g fill="${V.neuroscience}" stroke="none">
  <circle cx="390" cy="220" r="7"/><circle cx="480" cy="260" r="9"/><circle cx="560" cy="200" r="7"/><circle cx="630" cy="290" r="8"/><circle cx="690" cy="250" r="7"/><circle cx="500" cy="340" r="7"/><circle cx="560" cy="340" r="8"/>
</g>
<circle cx="920" cy="260" r="100" stroke="${V.neuroscience}" stroke-opacity=".16" stroke-width="2" stroke-dasharray="4 10"/>
<circle cx="920" cy="260" r="46" stroke="${V.neuroscience}" stroke-opacity=".3" stroke-width="2"/>`),
  climate: shell(V.climate, "AI TIMELINE / CLIMATE &amp; ENERGY", `
<circle cx="300" cy="170" r="84" stroke="${V.climate}" stroke-opacity=".55" stroke-width="2"/>
<circle cx="300" cy="170" r="112" stroke="${V.climate}" stroke-opacity=".18" stroke-width="2" stroke-dasharray="4 9"/>
<path d="M430 160c80-60 170-30 220 20s130 40 190-10M430 220c70-40 140-20 180 20s120 20 170-20" stroke="${V.climate}" stroke-opacity=".5" stroke-width="2"/>
<g stroke="${V.climate}" stroke-opacity=".45" stroke-width="2">
  <path d="M720 430V300l90-60 90 60v130M810 240v190M760 300l50-34 50 34"/>
  <path d="M940 430V320l70-46 70 46v110"/>
</g>
<path d="M100 440h1000" stroke="${V.climate}" stroke-opacity=".18" stroke-width="2"/>
<path d="M420 370c60-30 110 20 170 0s110 20 170 0" stroke="${V.climate}" stroke-opacity=".2" stroke-width="2"/>`),
  engineering: shell(V.engineering, "AI TIMELINE / ENGINEERING &amp; PROPULSION", `
<g transform="translate(380 270)" stroke="${V.engineering}" stroke-opacity=".55" stroke-width="2">
  <circle r="150"/><circle r="86"/><circle r="24" fill="${V.engineering}" fill-opacity=".18"/>
  <path d="M0-150v64M0 150v-64M-150 0h64M150 0h-64M-106-106l45 45M106 106l-45-45M106-106l-45 45M-106 106l45-45"/>
</g>
<path d="M560 190h130l150 80-150 80H560z" stroke="${V.engineering}" stroke-opacity=".55" stroke-width="2"/>
<path d="M840 220l120 50-120 50" stroke="${V.engineering}" stroke-opacity=".75" stroke-width="2"/>
<path d="M960 270c50-40 100-20 140 0-40 20-90 40-140 0z" fill="${V.engineering}" fill-opacity=".18" stroke="${V.engineering}" stroke-opacity=".6" stroke-width="2"/>
<path d="M100 430h1000" stroke="${V.engineering}" stroke-opacity=".15" stroke-width="2"/>
<circle cx="960" cy="270" r="90" stroke="${V.engineering}" stroke-opacity=".12" stroke-width="2" stroke-dasharray="4 10"/>`),
  robotics: shell(V.robotics, "AI TIMELINE / ROBOTICS", `
<g stroke="${V.robotics}" stroke-opacity=".65" stroke-width="3">
  <path d="M300 400l120-40 70-120 150 30 70-100"/>
  <path d="M420 360l-40-90 110-70"/>
</g>
<g fill="${V.robotics}" stroke="none">
  <circle cx="300" cy="400" r="16"/><circle cx="420" cy="360" r="12"/><circle cx="490" cy="240" r="12"/><circle cx="640" cy="270" r="12"/><circle cx="710" cy="170" r="12"/>
</g>
<g stroke="${V.robotics}" stroke-opacity=".22" stroke-width="2">
  <circle cx="640" cy="270" r="70" stroke-dasharray="4 8"/><circle cx="640" cy="270" r="110" stroke-dasharray="4 12"/>
</g>
<path d="M840 400h220M840 330h160M840 260h190" stroke="${V.robotics}" stroke-opacity=".3" stroke-width="2"/>
<rect x="760" y="150" width="120" height="90" rx="18" stroke="${V.robotics}" stroke-opacity=".45" stroke-width="2"/>
<circle cx="800" cy="195" r="7" fill="${V.robotics}" stroke="none"/><circle cx="840" cy="195" r="7" fill="${V.robotics}" stroke="none"/>`),
  computing: shell(V.computing, "AI TIMELINE / COMPUTING", `
<rect x="380" y="110" width="300" height="300" rx="30" stroke="${V.computing}" stroke-opacity=".55" stroke-width="2"/>
<rect x="440" y="170" width="180" height="180" rx="14" stroke="${V.computing}" stroke-opacity=".3" stroke-width="2"/>
<g stroke="${V.computing}" stroke-opacity=".35" stroke-width="2">
  <path d="M400 60v40M470 60v40M540 60v40M610 60v40M400 420v40M470 420v40M540 420v40M610 420v40M320 150h40M320 220h40M320 290h40M320 360h40M700 150h40M700 220h40M700 290h40M700 360h40"/>
</g>
<g stroke="${V.computing}" stroke-opacity=".2" stroke-width="2">
  <path d="M760 130h170v70h110M760 250h110v70h170M760 370h130v-60h120"/>
</g>
<path d="M230 380l-70 0 40-70-70 0 70-120" stroke="${V.computing}" stroke-opacity=".35" stroke-width="2"/>
<path d="M950 110l70 0-40 70 70 0-70 120" stroke="${V.computing}" stroke-opacity=".25" stroke-width="2"/>`),
  society: shell(V.society, "AI TIMELINE / SOCIETY &amp; ECONOMY", `
<g stroke="${V.society}" stroke-opacity=".28" stroke-width="2">
  <path d="M240 260l140-80 130 70 150-110 140 90M380 180l40 130 90 60 100-40M520 130l180 120 120-60"/>
</g>
<g fill="${V.society}" stroke="none">
  <circle cx="240" cy="260" r="9"/><circle cx="380" cy="180" r="8"/><circle cx="510" cy="250" r="9"/><circle cx="660" cy="140" r="8"/><circle cx="800" cy="230" r="9"/><circle cx="420" cy="310" r="7"/><circle cx="610" cy="330" r="8"/><circle cx="700" cy="190" r="7"/>
</g>
<g stroke="${V.society}" stroke-opacity=".4" stroke-width="2">
  <path d="M900 400V280h50v120M980 400V220h50v180M1060 400V320h50v80"/>
</g>
<circle cx="930" cy="150" r="88" stroke="${V.society}" stroke-opacity=".16" stroke-width="2" stroke-dasharray="4 10"/>
<path d="M100 440h1000" stroke="${V.society}" stroke-opacity=".15" stroke-width="2"/>`),
  general: shell(V.general, "AI TIMELINE / FRONTIER", `
<path d="M100 300c120-140 240-140 360 0s240 140 360 0 240-140 360 0" stroke="${V.general}" stroke-opacity=".55" stroke-width="3"/>
<g fill="${V.general}" stroke="none">
  <circle cx="280" cy="210" r="9"/><circle cx="460" cy="300" r="8"/><circle cx="640" cy="210" r="10"/><circle cx="820" cy="300" r="8"/><circle cx="1000" cy="210" r="9"/>
</g>
<g stroke="${V.general}" stroke-opacity=".18" stroke-width="2">
  <path d="M280 210l180 90 180-90 180 90 180-90M460 300l180-90 180 90"/>
</g>
<circle cx="640" cy="210" r="44" stroke="${V.general}" stroke-opacity=".35" stroke-width="2"/>
<circle cx="640" cy="210" r="80" stroke="${V.general}" stroke-opacity=".14" stroke-width="2" stroke-dasharray="4 10"/>
<path d="M100 440h1000" stroke="${V.general}" stroke-opacity=".12" stroke-width="2"/>`)
};

const events = {
  turing: shell("#4f5fd8", "AI TIMELINE / 1950 · TURING", `
<path d="M180 260h840" stroke="#4f5fd8" stroke-opacity=".35" stroke-width="2"/>
<g stroke="#4f5fd8" stroke-opacity=".55" stroke-width="2">
  <rect x="220" y="210" width="70" height="100" rx="8"/><rect x="310" y="210" width="70" height="100" rx="8"/><rect x="400" y="210" width="70" height="100" rx="8"/><rect x="490" y="210" width="70" height="100" rx="8"/>
  <path d="M255 245h0M345 245h0M435 245h0M525 245h0" stroke-width="10"/>
</g>
<g transform="translate(820 260)" stroke="#4f5fd8" stroke-opacity=".5" stroke-width="2">
  <circle r="104"/><circle r="56"/><path d="M0-104v44M0 104v-44M-104 0h44M104 0h-44"/>
</g>
<path d="M640 260h80" stroke="#4f5fd8" stroke-opacity=".7" stroke-width="3"/><circle cx="640" cy="260" r="10" fill="#4f5fd8" stroke="none"/>`),
  alphago: shell("#b26a00", "AI TIMELINE / 2016 · ALPHAGO", `
<rect x="300" y="70" width="600" height="380" rx="20" stroke="#b26a00" stroke-opacity=".5" stroke-width="2"/>
<g stroke="#b26a00" stroke-opacity=".18" stroke-width="1.5">
  <path d="M360 70v380M420 70v380M480 70v380M540 70v380M600 70v380M660 70v380M720 70v380M780 70v380M840 70v380M360 130h540M360 190h540M360 250h540M360 310h540M360 370h540M360 430h540"/>
</g>
<g fill="#1f2937">
  <circle cx="480" cy="190" r="17"/><circle cx="600" cy="250" r="17"/><circle cx="720" cy="310" r="17"/><circle cx="840" cy="190" r="17"/>
</g>
<g fill="#ffffff" stroke="#334155" stroke-width="2">
  <circle cx="540" cy="190" r="17"/><circle cx="660" cy="130" r="17"/><circle cx="660" cy="370" r="17"/><circle cx="780" cy="250" r="17"/><circle cx="780" cy="430" r="17"/>
</g>
<path d="M900 120l120 0-60 100z" stroke="#b26a00" stroke-opacity=".35" stroke-width="2"/>`),
  transformer: shell("#1f7fbf", "AI TIMELINE / 2017 · TRANSFORMER", `
<g stroke="#1f7fbf" stroke-opacity=".22" stroke-width="1.5">
  <path d="M360 100h480M360 160h480M360 220h480M360 280h480M360 340h480M360 400h480M400 70v360M460 70v360M520 70v360M580 70v360M640 70v360M700 70v360M760 70v360M820 70v360"/>
</g>
<rect x="460" y="160" width="60" height="60" fill="#1f7fbf" fill-opacity=".35" stroke="none"/>
<rect x="520" y="220" width="60" height="60" fill="#1f7fbf" fill-opacity=".55" stroke="none"/>
<rect x="580" y="280" width="60" height="60" fill="#1f7fbf" fill-opacity=".8" stroke="none"/>
<rect x="640" y="340" width="60" height="60" fill="#1f7fbf" fill-opacity=".45" stroke="none"/>
<path d="M400 340h480M340 400h520" stroke="#1f7fbf" stroke-opacity=".5" stroke-width="2"/>
<path d="M920 120l120 80-120 80z" stroke="#1f7fbf" stroke-opacity=".35" stroke-width="2"/>`),
  alphafold: shell("#4f9a2f", "AI TIMELINE / 2020 · ALPHAFOLD", `
<path d="M240 360c80-180 180-180 260 0s180 180 260 0 180-180 260 0" stroke="#4f9a2f" stroke-opacity=".75" stroke-width="4"/>
<path d="M240 360c80-180 180-180 260 0s180 180 260 0 180-180 260 0" stroke="#4f9a2f" stroke-opacity=".18" stroke-width="12"/>
<path d="M300 200c100 40 160 120 260 120s180-80 280-120" stroke="#4f9a2f" stroke-opacity=".35" stroke-width="2"/>
<g fill="#4f9a2f" stroke="none">
  <circle cx="300" cy="260" r="8"/><circle cx="380" cy="190" r="7"/><circle cx="460" cy="300" r="9"/><circle cx="560" cy="320" r="7"/><circle cx="660" cy="260" r="8"/><circle cx="760" cy="200" r="7"/><circle cx="860" cy="280" r="9"/>
</g>
<circle cx="900" cy="180" r="80" stroke="#4f9a2f" stroke-opacity=".16" stroke-width="2" stroke-dasharray="4 10"/>`),
  chatgpt: shell("#0f9b7f", "AI TIMELINE / 2022 · CHATGPT", `
<path d="M260 140h500a50 50 0 0 1 50 50v140a50 50 0 0 1-50 50H420l-100 70v-70h-60a50 50 0 0 1-50-50V190a50 50 0 0 1 50-50z" stroke="#0f9b7f" stroke-opacity=".55" stroke-width="2"/>
<path d="M690 260h260a40 40 0 0 1 40 40v90a40 40 0 0 1-40 40h-160l-70 50v-50h-30a40 40 0 0 1-40-40v-90a40 40 0 0 1 40-40z" stroke="#0f9b7f" stroke-opacity=".35" stroke-width="2"/>
<g fill="#0f9b7f" stroke="none">
  <circle cx="350" cy="260" r="9"/><circle cx="420" cy="260" r="9"/><circle cx="490" cy="260" r="9"/>
</g>
<path d="M740 370h140M740 400h100" stroke="#0f9b7f" stroke-opacity=".35" stroke-width="2"/>
<circle cx="940" cy="130" r="60" stroke="#0f9b7f" stroke-opacity=".14" stroke-width="2" stroke-dasharray="4 9"/>`),
  "openai-math": shell("#4f5fd8", "AI TIMELINE / 2026 · 722 MANUSCRIPTS", `
<g stroke="#4f5fd8" stroke-opacity=".35" stroke-width="2">
  <rect x="390" y="120" width="300" height="300" rx="12" transform="rotate(-6 540 270)"/>
  <rect x="420" y="100" width="300" height="300" rx="12" transform="rotate(-2 570 250)"/>
  <rect x="450" y="80" width="300" height="300" rx="12"/>
</g>
<path d="M500 150h190M500 190h150M500 230h190M500 270h130M500 310h170" stroke="#4f5fd8" stroke-opacity=".3" stroke-width="2"/>
<g transform="translate(820 290)" stroke="#4f5fd8" stroke-opacity=".65" stroke-width="4">
  <circle r="86"/><path d="M-38 2l28 30 56-70"/>
</g>
<text x="570" y="260" font-family="Georgia, serif" font-size="96" fill="#4f5fd8" fill-opacity=".2">∑</text>
<path d="M180 420h840" stroke="#4f5fd8" stroke-opacity=".15" stroke-width="2"/>`),
  leap71: shell("#c06a1c", "AI TIMELINE / 2025 · LEAP 71", `
<path d="M300 220h240l120 40-120 40H300z" stroke="#c06a1c" stroke-opacity=".55" stroke-width="2"/>
<path d="M660 220l180 40-180 40z" stroke="#c06a1c" stroke-opacity=".75" stroke-width="2"/>
<path d="M840 260c100-80 200-40 280 0-80 40-180 80-280 0z" fill="#c06a1c" fill-opacity=".15" stroke="#c06a1c" stroke-opacity=".6" stroke-width="2"/>
<path d="M880 260c60-30 120-20 180 0-60 20-120 30-180 0z" fill="#c06a1c" fill-opacity=".35" stroke="none"/>
<g stroke="#c06a1c" stroke-opacity=".22" stroke-width="2">
  <path d="M300 180h240M300 340h240M340 140v240M460 140v240"/>
</g>
<circle cx="420" cy="260" r="70" stroke="#c06a1c" stroke-opacity=".18" stroke-width="2" stroke-dasharray="4 10"/>
<path d="M180 420h840" stroke="#c06a1c" stroke-opacity=".15" stroke-width="2"/>`),
  "ge-ramjet": shell("#c06a1c", "AI TIMELINE / 2026 · GE RAMJET", `
<path d="M220 220h420l140-70 140 70v80l-140 70-140-70H220z" stroke="#c06a1c" stroke-opacity=".55" stroke-width="2"/>
<path d="M220 260h420M640 150v220M780 150v220" stroke="#c06a1c" stroke-opacity=".3" stroke-width="2"/>
<g fill="#c06a1c" stroke="none" fill-opacity=".4">
  <path d="M760 230l40 30-40 30z"/><path d="M820 230l40 30-40 30z"/><path d="M880 230l40 30-40 30z"/>
</g>
<path d="M220 190l-80 70 80 70" stroke="#c06a1c" stroke-opacity=".35" stroke-width="2"/>
<path d="M940 260h120" stroke="#c06a1c" stroke-opacity=".6" stroke-width="3"/>
<path d="M180 420h840" stroke="#c06a1c" stroke-opacity=".15" stroke-width="2"/>`)
};

for(const [id, svg] of Object.entries(fields)) fs.writeFileSync(path.join(fieldDir, id + ".svg"), svg, "utf8");
for(const [id, svg] of Object.entries(events)) fs.writeFileSync(path.join(eventDir, id + ".svg"), svg, "utf8");
console.log(`generated ${Object.keys(fields).length} field visuals + ${Object.keys(events).length} event visuals`);
