[
 {
  "dt": "2012-06-26",
  "d": "2012.06",
  "era": "deep",
  "cat": "science",
  "t": "谷歌大脑：16000 核让机器自己学会「猫」",
  "org": "吴恩达 & 杰夫·迪恩",
  "s": "谷歌用 1000 台机器、16000 个 CPU 核训练深度网络，从 1000 万张 YouTube 缩略图中自发学出「猫脸」检测器。",
  "x": "这项实验证明：只要给足数据与算力，网络可以自己发现概念，而不必由人定义特征。它和同年的 AlexNet 一起，把「规模」变成了 AI 的核心变量。",
  "n": [
   [
    "16000",
    "CPU 核"
   ]
  ],
  "tags": [
   "无监督学习",
   "规模",
   "谷歌"
  ],
  "src": [
   [
    "Wikipedia｜Google Brain",
    "https://en.wikipedia.org/wiki/Google_Brain"
   ]
  ]
 },
 {
  "dt": "2012-09-30",
  "d": "2012.09",
  "era": "deep",
  "cat": "science",
  "t": "AlexNet 夺冠：深度学习引爆点",
  "f": true,
  "org": "辛顿团队（多伦多大学）",
  "s": "AlexNet 在 ImageNet 竞赛中以 15.3% 的 top-5 错误率夺冠，比第二名低近 11 个百分点，深度学习从此成为主流。",
  "x": "AlexNet 有 8 层、约 6000 万参数，用两块 GTX 580 显卡训练数天。它同时用上 ReLU、Dropout 与数据增强，把工程技巧与 GPU 算力结合到极致。此后十年，计算机视觉的论文几乎都建立在卷积网络之上。",
  "n": [
   [
    "15.3%",
    "top-5 错误率"
   ],
   [
    "8",
    "网络层数"
   ]
  ],
  "tags": [
   "AlexNet",
   "ImageNet",
   "GPU"
  ],
  "src": [
   [
    "Wikipedia｜AlexNet",
    "https://en.wikipedia.org/wiki/AlexNet"
   ]
  ]
 },
 {
  "dt": "2013-01-16",
  "d": "2013.01",
  "era": "deep",
  "cat": "science",
  "t": "Word2Vec：词语变成可计算的向量",
  "org": "托马斯·米科洛夫（谷歌）",
  "s": "Word2Vec 用浅层网络把词映射到稠密向量，语义相近的词在空间中靠近，甚至支持「国王 − 男人 + 女人 ≈ 女王」的向量运算。",
  "x": "它让「语义」第一次可以用几何距离度量，直接推动了搜索、推荐、机器翻译与后来的 Embedding 体系。也是「表示学习」成为 AI 核心方法的标志。",
  "tags": [
   "词向量",
   "表示学习",
   "NLP"
  ],
  "src": [
   [
    "Wikipedia｜Word2vec",
    "https://en.wikipedia.org/wiki/Word2vec"
   ]
  ]
 },
 {
  "dt": "2014-01-26",
  "d": "2014.01",
  "era": "deep",
  "cat": "industry",
  "t": "谷歌收购 DeepMind：深度学习进入巨头时代",
  "org": "谷歌 / DeepMind",
  "s": "谷歌以约 5 亿美元收购 DeepMind，创下当时欧洲 AI 创业公司的收购纪录，顶尖研究团队开始被大公司系统性收编。",
  "x": "收购保留了 DeepMind 的独立研究文化，也给它提供了谷歌的算力与数据。此后「大厂 + 顶尖实验室」成为前沿 AI 的标准组织形态。",
  "n": [
   [
    "~5亿",
    "美元收购价"
   ]
  ],
  "tags": [
   "收购",
   "DeepMind",
   "人才"
  ],
  "src": [
   [
    "Wikipedia｜Google DeepMind",
    "https://en.wikipedia.org/wiki/Google_DeepMind"
   ]
  ]
 },
 {
  "dt": "2014-06-10",
  "d": "2014.06",
  "era": "deep",
  "cat": "science",
  "t": "生成对抗网络 GAN：让两个网络互相博弈",
  "f": true,
  "org": "伊恩·古德费洛",
  "s": "GAN 用生成器与判别器的对抗训练来学习数据分布，第一次生成出逼真的人脸与场景，开创了生成模型的新范式。",
  "x": "古德费洛在酒吧争论后当晚写出原型。GAN 的训练不稳定、模式坍塌等问题催生了大量后续研究，但「对抗」思想深刻影响了图像生成、语音合成与自监督学习。",
  "n": [
   [
    "2014",
    "NeurIPS 论文"
   ]
  ],
  "tags": [
   "GAN",
   "生成模型",
   "对抗训练"
  ],
  "src": [
   [
    "Wikipedia｜Generative adversarial network",
    "https://en.wikipedia.org/wiki/Generative_adversarial_network"
   ]
  ]
 },
 {
  "dt": "2014-09-01",
  "d": "2014.09",
  "era": "deep",
  "cat": "science",
  "t": "Seq2Seq 与注意力机制：神经机器翻译登场",
  "org": "Sutskever / Bahdanau 等",
  "s": "编码器—解码器结构把整句压缩成向量再逐词生成，注意力机制则让解码器动态回看输入，翻译质量大幅提升。",
  "x": "这一年，神经机器翻译开始取代统计机器翻译。注意力机制更重要的遗产是：它让网络学会「对齐」与「加权检索」，三年后直接演化成 Transformer。",
  "tags": [
   "机器翻译",
   "Seq2Seq",
   "注意力"
  ],
  "src": [
   [
    "arXiv｜Neural Machine Translation by Jointly Learning to Align and Translate",
    "https://arxiv.org/abs/1409.0473"
   ]
  ]
 },
 {
  "dt": "2015-11-09",
  "d": "2015.11",
  "era": "deep",
  "cat": "infra",
  "t": "TensorFlow 开源：深度学习框架民主化",
  "org": "谷歌",
  "s": "谷歌开源 TensorFlow，把内部使用的分布式训练与推理框架交给全世界，深度学习研究的门槛骤降。",
  "x": "TensorFlow 用计算图描述模型，支持 CPU/GPU/TPU 与移动端部署。它与后来的 PyTorch 一起，构成了深度学习时代的「操作系统」。",
  "tags": [
   "框架",
   "开源",
   "工程"
  ],
  "src": [
   [
    "Wikipedia｜TensorFlow",
    "https://en.wikipedia.org/wiki/TensorFlow"
   ]
  ]
 },
 {
  "dt": "2015-12-10",
  "d": "2015.12",
  "era": "deep",
  "cat": "science",
  "t": "ResNet：152 层残差网络，误差降到 3.57%",
  "f": true,
  "org": "何恺明等（微软亚洲研究院）",
  "s": "ResNet 用「残差连接」让梯度跨层直通，成功训练 152 层网络，在 ImageNet 上把 top-5 错误率降到 3.57%，低于人类水平。",
  "x": "残差连接解决了「网络越深越难训」的退化问题，其结构简单到只有一行加法，却成为此后几乎所有大模型的标配。Transformer 的每个子层也都带着它。",
  "n": [
   [
    "3.57%",
    "top-5 错误率"
   ],
   [
    "152",
    "层"
   ]
  ],
  "tags": [
   "ResNet",
   "残差连接",
   "计算机视觉"
  ],
  "src": [
   [
    "arXiv｜Deep Residual Learning for Image Recognition",
    "https://arxiv.org/abs/1512.03385"
   ]
  ]
 },
 {
  "dt": "2015-12-11",
  "d": "2015.12",
  "era": "deep",
  "cat": "industry",
  "t": "OpenAI 成立：以「安全地实现 AGI」为使命",
  "f": true,
  "org": "奥尔特曼、马斯克等",
  "s": "OpenAI 以非营利实验室形式成立，承诺开放研究成果、以造福全人类为目标，初始资金承诺 10 亿美元。",
  "x": "OpenAI 后来转为「有限利润」结构并接受微软投资，引发关于「开放」与「安全」的长期争论。它从 GPT 系列一路走到 ChatGPT，成为这一轮 AI 浪潮最具象征性的公司。",
  "n": [
   [
    "10亿",
    "美元初始承诺"
   ]
  ],
  "tags": [
   "OpenAI",
   "AGI",
   "实验室"
  ],
  "src": [
   [
    "Wikipedia｜OpenAI",
    "https://en.wikipedia.org/wiki/OpenAI"
   ]
  ]
 },
 {
  "dt": "2016-03-09",
  "d": "2016.03",
  "era": "deep",
  "cat": "app",
  "t": "AlphaGo 4:1 战胜李世石：围棋被攻破",
  "f": true,
  "org": "DeepMind",
  "s": "AlphaGo 以 4:1 击败围棋世界冠军李世石，第二局的「第 37 手」被职业棋手称为人类从未下出的着法。",
  "x": "围棋的状态空间远超国际象棋，长期被视为 AI 的「圣杯」。AlphaGo 用策略网络、价值网络与蒙特卡洛树搜索结合，第一次在直觉型领域击败人类顶尖。这场比赛让 AI 从实验室走进大众视野。",
  "n": [
   [
    "4:1",
    "对阵李世石"
   ]
  ],
  "tags": [
   "AlphaGo",
   "围棋",
   "强化学习"
  ],
  "src": [
   [
    "Wikipedia｜AlphaGo",
    "https://en.wikipedia.org/wiki/AlphaGo"
   ]
  ],
  "img": {
   "src": "assets/events/alphago.svg",
   "alt": "AlphaGo 围棋对局示意",
   "credit": "本项目绘制"
  }
 },
 {
  "dt": "2016-05-18",
  "d": "2016.05",
  "era": "deep",
  "cat": "infra",
  "t": "谷歌公布 TPU：为神经网络定制芯片",
  "org": "谷歌",
  "s": "谷歌在 I/O 大会上公布张量处理单元 TPU，一款专为推理与训练矩阵运算设计的 ASIC，已秘密用于 AlphaGo 与搜索排序。",
  "x": "TPU 用脉动阵列做矩阵乘法，能效比通用 GPU 高出一个量级。它开启了「AI 专用芯片」竞赛，也让算力从成本项变成战略资源。",
  "tags": [
   "TPU",
   "AI芯片",
   "算力"
  ],
  "src": [
   [
    "Wikipedia｜Tensor Processing Unit",
    "https://en.wikipedia.org/wiki/Tensor_Processing_Unit"
   ]
  ]
 },
 {
  "dt": "2016-09-12",
  "d": "2016.09",
  "era": "deep",
  "cat": "science",
  "t": "WaveNet：直接生成原始音频波形",
  "org": "DeepMind",
  "s": "WaveNet 用空洞因果卷积逐采样点生成音频，合成语音的自然度首次接近真人，超越传统拼接式与参数式方法。",
  "x": "它证明深度生成模型可以处理高采样率时序信号。今天语音合成、音乐生成与实时语音对话的底层思路，都能追溯到 WaveNet。",
  "tags": [
   "语音合成",
   "生成模型",
   "卷积"
  ],
  "src": [
   [
    "DeepMind｜WaveNet",
    "https://deepmind.google/discover/blog/wavenet-a-generative-model-for-raw-audio/"
   ]
  ]
 },
 {
  "dt": "2017-06-12",
  "d": "2017.06",
  "era": "deep",
  "cat": "science",
  "t": "Transformer：一篇论文改写此后一切",
  "f": true,
  "org": "谷歌大脑（Vaswani 等 8 人）",
  "s": "《Attention Is All You Need》提出 Transformer，完全用自注意力替代循环与卷积，训练可并行、长程依赖建模更好。",
  "x": "论文最初的目标只是改进机器翻译。但自注意力天然适合堆叠与扩展，GPT、BERT、T5、ViT、Sora 乃至今天的多模态模型，全部建立在它之上。它是这一轮 AI 浪潮真正的「地基」。",
  "n": [
   [
    "8",
    "作者"
   ],
   [
    "2017",
    "论文发布"
   ]
  ],
  "tags": [
   "Transformer",
   "自注意力",
   "架构"
  ],
  "src": [
   [
    "arXiv｜Attention Is All You Need",
    "https://arxiv.org/abs/1706.03762"
   ]
  ],
  "img": {
   "src": "assets/events/transformer.svg",
   "alt": "Transformer 注意力矩阵示意",
   "credit": "本项目绘制"
  }
 },
 {
  "dt": "2017-10-18",
  "d": "2017.10",
  "era": "deep",
  "cat": "science",
  "t": "AlphaGo Zero：从零开始，不需要人类棋谱",
  "org": "DeepMind",
  "s": "AlphaGo Zero 只知规则、从随机下起，通过自我对弈 3 天便以 100:0 击败曾战胜李世石的 AlphaGo。",
  "x": "这证明在规则明确、可自我模拟的领域，「搜索 + 自我对弈」可以超越人类知识。它把「数据壁垒」的讨论推向新阶段：最强的数据可能是模型自己生成的。",
  "n": [
   [
    "100:0",
    "对 AlphaGo Lee"
   ]
  ],
  "tags": [
   "自我对弈",
   "零人类数据",
   "强化学习"
  ],
  "src": [
   [
    "Nature｜Mastering the game of Go without human knowledge",
    "https://www.nature.com/articles/nature24270"
   ]
  ]
 },
 {
  "dt": "2017-12-05",
  "d": "2017.12",
  "era": "deep",
  "cat": "science",
  "t": "AlphaZero：一套算法通吃国际象棋、将棋与围棋",
  "org": "DeepMind",
  "s": "AlphaZero 用同一套自我对弈算法，在 24 小时内从零超越国际象棋、将棋与围棋的最强程序。",
  "x": "它把「通用强化学习」的可行性推到台前：不依赖领域知识、不依赖人类数据，只依赖规则与算力。这直接影响了后来的推理模型训练与游戏智能体。",
  "tags": [
   "AlphaZero",
   "通用算法",
   "自我对弈"
  ],
  "src": [
   [
    "Science｜A general reinforcement learning algorithm",
    "https://www.science.org/doi/10.1126/science.aar6404"
   ]
  ]
 },
 {
  "dt": "2018-06-11",
  "d": "2018.06",
  "era": "llm",
  "cat": "model",
  "t": "GPT-1：生成式预训练 + 微调范式",
  "org": "OpenAI",
  "s": "GPT-1 用 Transformer 解码器在大量文本上做无监督预训练，再针对下游任务微调，证明「预训练 + 迁移」可行。",
  "x": "1.17 亿参数的 GPT-1 在多项自然语言任务上超过专门设计的模型。它确立了此后五年的主线：先在海量语料上学会语言，再适配具体任务。",
  "n": [
   [
    "1.17亿",
    "参数"
   ]
  ],
  "tags": [
   "GPT",
   "预训练",
   "迁移学习"
  ],
  "src": [
   [
    "OpenAI｜Improving Language Understanding with Unsupervised Learning",
    "https://openai.com/research/language-unsupervised"
   ]
  ]
 },
 {
  "dt": "2018-10-11",
  "d": "2018.10",
  "era": "llm",
  "cat": "model",
  "t": "BERT：双向编码器刷新 11 项 NLP 纪录",
  "org": "谷歌",
  "s": "BERT 用掩码语言模型做双向预训练，一次性刷新 11 项自然语言理解任务的纪录，成为工业界最流行的预训练模型。",
  "x": "BERT 与 GPT 代表了两种路线：编码器擅长理解与分类，解码器擅长生成。此后「Encoder-only / Decoder-only」之争持续多年，最终由 GPT 系列的解码器路线胜出。",
  "n": [
   [
    "11",
    "项纪录被刷新"
   ]
  ],
  "tags": [
   "BERT",
   "双向编码",
   "NLP"
  ],
  "src": [
   [
    "arXiv｜BERT",
    "https://arxiv.org/abs/1810.04805"
   ]
  ]
 },
 {
  "dt": "2018-12-01",
  "d": "2018.12",
  "era": "llm",
  "cat": "science",
  "t": "AlphaFold 1 在 CASP13 夺冠：蛋白质折叠迎来拐点",
  "org": "DeepMind",
  "s": "AlphaFold 首次参加蛋白质结构预测竞赛 CASP13 便大幅领先，平均 GDT 分数约 60，震动结构生物学界。",
  "x": "它把「从序列预测三维结构」的误差降到此前难以想象的水平。两年后的 AlphaFold 2 更进一步，直接解决了这个困扰生物学五十年的问题。",
  "tags": [
   "AlphaFold",
   "蛋白质",
   "CASP"
  ],
  "src": [
   [
    "Wikipedia｜AlphaFold",
    "https://en.wikipedia.org/wiki/AlphaFold"
   ]
  ]
 },
 {
  "dt": "2019-02-14",
  "d": "2019.02",
  "era": "llm",
  "cat": "model",
  "t": "GPT-2：15 亿参数与「分阶段发布」之争",
  "org": "OpenAI",
  "s": "GPT-2 展示出惊人的零样本生成能力，OpenAI 以「防止滥用」为由分阶段发布权重，引发开放与安全的第一次大辩论。",
  "x": "GPT-2 能续写出连贯的长文，让「AI 生成文本」第一次成为公共议题。分阶段发布也开创了前沿模型「能力越强、披露越谨慎」的行业惯例。",
  "n": [
   [
    "15亿",
    "参数"
   ]
  ],
  "tags": [
   "GPT-2",
   "零样本",
   "开放争议"
  ],
  "src": [
   [
    "OpenAI｜Better Language Models and Their Implications",
    "https://openai.com/research/better-language-models"
   ]
  ]
 },
 {
  "dt": "2020-05-28",
  "d": "2020.05",
  "era": "llm",
  "cat": "model",
  "t": "GPT-3：1750 亿参数，少样本学习成为新范式",
  "f": true,
  "org": "OpenAI",
  "s": "GPT-3 把参数推到 1750 亿，发现只要模型足够大，不微调、只给几个例子就能完成新任务——「上下文学习」诞生。",
  "x": "GPT-3 的论文《Language Models are Few-Shot Learners》改变了整个领域的假设：能力可以从规模中「涌现」。同年 7 月开放 API，AI 第一次以「通用接口」的形式进入产品。",
  "n": [
   [
    "1750亿",
    "参数"
   ]
  ],
  "tags": [
   "GPT-3",
   "少样本",
   "缩放律"
  ],
  "src": [
   [
    "arXiv｜Language Models are Few-Shot Learners",
    "https://arxiv.org/abs/2005.14165"
   ]
  ]
 },
 {
  "dt": "2020-06-19",
  "d": "2020.06",
  "era": "llm",
  "cat": "science",
  "t": "扩散模型 DDPM：生成质量超越 GAN",
  "org": "Ho、Jain、Abbeel",
  "s": "DDPM 用「逐步加噪、再逐步去噪」的方式学习数据分布，训练稳定、样本多样，迅速成为图像生成的主流。",
  "x": "扩散模型后来成为 Stable Diffusion、DALL·E 2、Sora 等系统的底层。它把生成过程变成一条可逆的马尔可夫链，也让「可控生成」有了数学抓手。",
  "tags": [
   "扩散模型",
   "生成",
   "DDPM"
  ],
  "src": [
   [
    "arXiv｜Denoising Diffusion Probabilistic Models",
    "https://arxiv.org/abs/2006.11239"
   ]
  ]
 },
 {
  "dt": "2020-10-22",
  "d": "2020.10",
  "era": "llm",
  "cat": "science",
  "t": "ViT：把图像切成 patch，用 Transformer 看世界",
  "org": "谷歌 Research",
  "s": "Vision Transformer 把图像切成 16×16 的 patch 当作「词」，直接用 Transformer 编码，在足够数据下超越卷积网络。",
  "x": "ViT 证明了 Transformer 的通用性：只要把输入切成序列，视觉、语音、视频都能统一处理。它是此后多模态模型的标准视觉骨干。",
  "tags": [
   "ViT",
   "多模态",
   "Transformer"
  ],
  "src": [
   [
    "arXiv｜An Image is Worth 16x16 Words",
    "https://arxiv.org/abs/2010.11929"
   ]
  ]
 },
 {
  "dt": "2020-11-30",
  "d": "2020.11",
  "era": "llm",
  "cat": "science",
  "t": "AlphaFold 2 攻克蛋白质结构预测",
  "f": true,
  "org": "DeepMind",
  "s": "AlphaFold 2 在 CASP14 上把蛋白质结构预测的中位 GDT 分数推到 92.4，接近实验精度，被评价为「解决了 50 年的问题」。",
  "x": "它把注意力机制与几何约束结合，能从氨基酸序列直接给出原子级三维结构。2021 年 AlphaFold DB 开放，2024 年哈萨比斯与江珀因此获得诺贝尔化学奖。",
  "n": [
   [
    "92.4",
    "GDT 中位数"
   ]
  ],
  "tags": [
   "AlphaFold2",
   "结构生物学",
   "CASP14"
  ],
  "src": [
   [
    "Nature｜Highly accurate protein structure prediction with AlphaFold",
    "https://www.nature.com/articles/s41586-021-03819-2"
   ]
  ],
  "img": {
   "src": "assets/events/alphafold.svg",
   "alt": "AlphaFold 蛋白质结构预测示意",
   "credit": "本项目绘制"
  }
 },
 {
  "dt": "2021-01-05",
  "d": "2021.01",
  "era": "llm",
  "cat": "model",
  "t": "CLIP 与 DALL·E：图文对齐，文本生成图像",
  "org": "OpenAI",
  "s": "CLIP 用 4 亿图文对学习「图片与文字是否匹配」，DALL·E 则把文本描述直接变成图像，多模态生成进入大众视野。",
  "x": "CLIP 的对比学习让「零样本分类」成为可能，也成为此后所有文生图模型（含 Stable Diffusion）的文本编码器。",
  "n": [
   [
    "4亿",
    "图文对"
   ]
  ],
  "tags": [
   "CLIP",
   "DALL·E",
   "多模态"
  ],
  "src": [
   [
    "OpenAI｜CLIP",
    "https://openai.com/research/clip"
   ]
  ]
 },
 {
  "dt": "2021-06-29",
  "d": "2021.06",
  "era": "llm",
  "cat": "app",
  "t": "GitHub Copilot 预览：AI 成为结对程序员",
  "org": "GitHub / OpenAI",
  "s": "Copilot 基于 Codex，在编辑器里实时补全整段代码，第一次让「AI 写代码」成为数百万开发者的日常体验。",
  "x": "Copilot 把大模型从「演示」变成「生产力工具」，也引发了关于代码版权、许可证与开发者岗位的持续争论。它是 AI Agent 进入工作流的最早大规模实验。",
  "tags": [
   "Copilot",
   "代码生成",
   "开发者"
  ],
  "src": [
   [
    "GitHub Blog｜Introducing GitHub Copilot",
    "https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer/"
   ]
  ]
 },
 {
  "dt": "2021-07-22",
  "d": "2021.07",
  "era": "llm",
  "cat": "infra",
  "t": "AlphaFold DB 开放：2 亿+ 蛋白质结构免费下载",
  "org": "DeepMind / EMBL-EBI",
  "s": "AlphaFold 蛋白质结构数据库上线，随后扩展到覆盖地球上已知的 2 亿多个蛋白质，结构生物学进入「查表时代」。",
  "x": "此前实验解析一个蛋白结构需要数月到数年；数据库上线后，全球研究者可免费下载预测结构。这是 AI 对基础科学最直接、最大规模的一次基础设施级贡献。",
  "n": [
   [
    "2亿+",
    "蛋白质结构"
   ]
  ],
  "tags": [
   "开放科学",
   "结构数据库",
   "生物学"
  ],
  "src": [
   [
    "DeepMind｜AlphaFold DB",
    "https://alphafold.ebi.ac.uk/"
   ]
  ]
 },
 {
  "dt": "2021-08-10",
  "d": "2021.08",
  "era": "llm",
  "cat": "model",
  "t": "Codex：从自然语言到可运行代码",
  "org": "OpenAI",
  "s": "Codex 在 GitHub 代码上微调，能把英文注释变成 Python 函数，HumanEval 一次通过率 28.8%，是 Copilot 的引擎。",
  "x": "Codex 让「编程」成为大模型最成功的应用场景之一。它也是后来「AI 智能体写代码、跑测试、提 PR」这条演进线的起点。",
  "n": [
   [
    "28.8%",
    "HumanEval 通过率"
   ]
  ],
  "tags": [
   "Codex",
   "代码生成",
   "Copilot"
  ],
  "src": [
   [
    "arXiv｜Evaluating Large Language Models Trained on Code",
    "https://arxiv.org/abs/2107.03374"
   ]
  ]
 },
 {
  "dt": "2022-01-27",
  "d": "2022.01",
  "era": "llm",
  "cat": "model",
  "t": "InstructGPT：RLHF 让模型学会「听话」",
  "org": "OpenAI",
  "s": "InstructGPT 用人类反馈强化学习（RLHF）对齐指令，13 亿参数的版本在人类偏好上超过了 1750 亿参数的 GPT-3。",
  "x": "它证明「对齐」不只是安全措施，也是能力放大器：模型从「续写文本」变成「完成任务」。这条技术路线直接通向 ChatGPT。",
  "n": [
   [
    "1.3B > 175B",
    "人类偏好胜出"
   ]
  ],
  "tags": [
   "RLHF",
   "对齐",
   "指令微调"
  ],
  "src": [
   [
    "arXiv｜Training language models to follow instructions with human feedback",
    "https://arxiv.org/abs/2203.02155"
   ]
  ]
 },
 {
  "dt": "2022-03-29",
  "d": "2022.03",
  "era": "llm",
  "cat": "science",
  "t": "Chinchilla：数据比参数更重要的缩放律",
  "org": "DeepMind",
  "s": "Chinchilla 用 700 亿参数配 1.4 万亿 token，击败了参数量四倍于它的 Gopher，重新定义了「计算最优」训练配方。",
  "x": "论文指出此前的模型普遍「训练不足」：在固定算力下，参数与数据应按比例增长。此后「数据质量与数量」成为模型竞赛的新焦点。",
  "n": [
   [
    "70B / 1.4T",
    "参数 / token"
   ]
  ],
  "tags": [
   "缩放律",
   "训练配方",
   "数据"
  ],
  "src": [
   [
    "arXiv｜Training Compute-Optimal Large Language Models",
    "https://arxiv.org/abs/2203.15556"
   ]
  ]
 },
 {
  "dt": "2022-04-06",
  "d": "2022.04",
  "era": "llm",
  "cat": "model",
  "t": "DALL·E 2：文本到图像的质变",
  "org": "OpenAI",
  "s": "DALL·E 2 用扩散模型生成高分辨率、风格多样的图像，支持以图生图与局部编辑，AI 绘画第一次让普通人惊艳。",
  "x": "它把「提示词」变成一种创作接口，直接引发了 Midjourney、Stable Diffusion 与整个 AIGC 图像浪潮，也让版权与真实性争议提前到来。",
  "tags": [
   "文生图",
   "扩散模型",
   "AIGC"
  ],
  "src": [
   [
    "OpenAI｜DALL·E 2",
    "https://openai.com/index/dall-e-2/"
   ]
  ]
 },
 {
  "dt": "2022-08-22",
  "d": "2022.08",
  "era": "llm",
  "cat": "model",
  "t": "Stable Diffusion 开源：消费级显卡也能生成图像",
  "org": "Stability AI / LMU",
  "s": "Stable Diffusion 把潜在扩散模型的开源权重公开，一张消费级显卡几秒钟就能出图，AI 绘画迅速普及到个人电脑。",
  "x": "开源权重催生了庞大的插件、模型微调与本地部署生态，也让「生成内容的版权与滥用」成为监管议题。它是开源生成模型最具影响力的一次 release。",
  "tags": [
   "开源",
   "文生图",
   "Stable Diffusion"
  ],
  "src": [
   [
    "Wikipedia｜Stable Diffusion",
    "https://en.wikipedia.org/wiki/Stable_Diffusion"
   ]
  ]
 },
 {
  "dt": "2022-11-30",
  "d": "2022.11",
  "era": "llm",
  "cat": "model",
  "t": "ChatGPT 发布：AI 大众化的拐点",
  "f": true,
  "org": "OpenAI",
  "s": "ChatGPT 以对话界面免费开放，5 天用户破百万、两个月破亿，成为历史上增长最快的消费级应用。",
  "x": "它把 GPT-3.5 的能力包装成「人人可用的助手」，让 AI 从开发者 API 变成大众产品。此后两年，生成式 AI 进入办公、教育、编程与客服，全球监管与产业投资随之加速。",
  "n": [
   [
    "1亿",
    "两月用户"
   ]
  ],
  "tags": [
   "ChatGPT",
   "对话",
   "大众化"
  ],
  "src": [
   [
    "OpenAI｜Introducing ChatGPT",
    "https://openai.com/index/chatgpt/"
   ]
  ],
  "img": {
   "src": "assets/events/chatgpt.svg",
   "alt": "ChatGPT 对话界面示意",
   "credit": "本项目绘制"
  }
 }
]
