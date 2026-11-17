# 数据说明与核验记录

## 快照

- **数据截止日：2026-11-17**
- **节点数：156**（1943—2026；其中 2025—2026 年 67 个）
- **来源站点：70 个**；每个节点至少 1 条可点击来源
- 页面为单文件静态 HTML，构建时把事件数据内联，运行时不发网络请求

## 计数与布局

横向轴是**顺序轴**，每个节点等距排布，并非等比时间轴。原因很直接：2025—2026 年的信息密度远高于 1943—2010 年，若按真实时间比例，最近两年只占约 2% 的宽度，无法阅读。纵向上下交替只为容纳文字，不代表任何数值高低。

事件按 `dt` 升序排列；同一天的事件按数据文件中的顺序稳定排序。年份刻度放在每年第一个节点处，右上角 HUD 跟随滚动显示「当前节点日期 · 所属时代」。

## 来源分级

1. **官方公告**：OpenAI、Anthropic、Google DeepMind、DeepSeek、阿里巴巴、月之暗面、智谱、Meta、华为云等。
2. **研究文献**：Nature、Science、arXiv、SIAM、NeurIPS 及会议/期刊页面。
3. **机构与媒体**：Menlo Ventures、IEA、PwC、Gartner、Microsoft、FDA、路透、彭博、新华社、科技日报等。

官方页面与二手报道冲突时以官方为准；官方不可访问时，至少两家独立来源一致才采用；仍不一致则保留最保守表述，并在正文中说明口径差异。

## 重点更正

### 1. OpenAI 722 篇数学手稿

- GitHub 仓库创建于 **2026-10-06T21:47Z**，对外发布在 **2026-10-07**。
- 发布口径：**722 篇手稿 / 372 个成果族**；模型尝试约 **4000 道题**，平均每个结果约 **3 小时** ChatGPT Pro 级推理算力。
- 发布后 **3 篇撤回、14 篇修订**；截至 **2026-11-17**，仓库为 **721 篇 / 373 个成果族**，约 **42%** 的顶线结果有 Lean 形式化。
- 标题保留用户熟悉的「722 篇」，正文与关键数字写明最新状态与限制：Lean 覆盖不是全部，未形式化结果可能有问题，这是研究数据公开而非完成同行评审。

### 2. GPT-6 Astra 首发日期

- 首发按官方页面与多家报道取 **2026-09-03**（部分报道为 09-04，属时区差异）。
- 2026-09-29 的更新指向 **GPT-6.1 Sol**，不能当作 Astra 首发。页面中 Astra 节点只写「9 月」，避免把后续版本日期误标为首发。

### 3. Gemini 4 Carbon 的两个阶段

- **2026-10-28**：面向网络安全防御者与受信伙伴开放。
- **2026-11-10/11**：扩大到开发者、企业与 Google AI Ultra 订阅者。
- 节点日期记为 10-28，正文写清 11 月的全面开放，不把两者混为一次发布。

### 4. Anthropic IPO 的口径

- **2026 年 6 月**已保密递交 S-1。
- **2026-11-10** 为更新注册声明 / 启动路演：拟发行 8.25 亿股、每股 70–78 美元；**基本市值约 1.02 万亿美元**，按上限的**完全稀释市值约 1.404 万亿美元**。
- 节点标题用「更新招股书」，不写成「首次递交」。

### 5. 需要限定的数字

- **初级程序员 87% 替代率**：来自清华大学报告口径，不是官方就业统计。
- **人形机器人 1.64% 投产率**：来自研究机构对受访客户的调研，样本有限，不代表全行业。
- **Menlo Ventures 企业支出数据**：VC 基于调研与推算的估算，非审计财报。
- **Arena 排名**：匿名盲测的用户偏好，不是绝对能力测试；分差在误差范围内视为并列。
- **OpenAI 年化收入 500 / 700 亿美元**：来自知情人士与媒体报道，非官方财报。

## 已知不确定性

- 2026 年的事件日期多数只精确到月；卡片显示月份，详情里保留可核对的日期表述。
- 不同基准（Arena、SWE-bench、ARC-AGI、FrontierMath 等）不可直接横向比较，厂商自报分数与第三方复现也可能不同。
- 中文来源的英文模型名、版本号存在翻译差异；以厂商官方模型名为准。
- AI 行业每周都有新发布，本时间线是**快照**而非实时数据库。

## 更新流程

1. 修改 `src/part*.js` 或 `src/template.html`。
2. 运行 `node build.mjs && node scripts/validate.mjs`。
3. 更新本文件的数据截止日与更正记录。
4. 提交并推送；GitHub Pages 自动发布。

## 主要来源入口

- Menlo Ventures, *2026: The State of Enterprise AI* — <https://menlovc.com/perspective/2026-the-state-of-enterprise-ai/>
- OpenAI, *GPT-6 Astra* — <https://openai.com/zh-Hant/index/gpt-6-astra/>
- Anthropic, *Claude Fable 5* — <https://www.anthropic.com/news/claude-fable-5>
- DeepSeek V4（新华网）— <http://kr.xinhuanet.com/20260426/2a945a0a397e4839b260db068773ccf9/c.html>
- Kimi K3（科技日报）— <https://www.stdaily.com/web/English/2026-08/10/content_561669.html>
- Microsoft 编码智能体研究（TechRepublic）— <https://www.techrepublic.com/fr/article/news-ai-coding-agents-microsoft-pull-requests/>
- Nature, 37,000-agent virtual biotech — <https://www.nature.com/articles/d41586-026-02954-y>
- IEA 数据中心资本开支（中国能源新闻网）— <https://www.cnenergynews.cn/article/4SZePn5YiyE>
