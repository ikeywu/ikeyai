// AI 工具数据库 - 带官方 Logo
const aiTools = [
    // 💬 对话聊天 (15 个)
    {
        id: 1,
        name: "ChatGPT",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        category: "chat",
        tags: ["对话", "问答", "写作"],
        price: "免费 / $20/月",
        description: "OpenAI 开发的 AI 对话助手，能回答问题、写作、编程等",
        features: ["自然对话", "多语言支持", "代码生成", "文案写作", "逻辑推理"],
        url: "https://chat.openai.com",
        hot: true,
        chinese: false
    },
    {
        id: 2,
        name: "Claude",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Claude_Ai_logo.svg",
        category: "chat",
        tags: ["对话", "长文本", "分析"],
        price: "免费 / $20/月",
        description: "Anthropic 开发的 AI 助手，擅长长文本处理和分析",
        features: ["200K 上下文", "文档分析", "代码能力", "安全性高"],
        url: "https://claude.ai",
        hot: true,
        chinese: false
    },
    {
        id: 3,
        name: "文心一言",
        logo: "https://yiyan.baidu.com/static/img/logo.png",
        category: "chat",
        tags: ["对话", "中文", "百度"],
        price: "免费",
        description: "百度开发的大语言模型，中文理解能力强",
        features: ["中文优化", "知识问答", "文案创作", "图片理解"],
        url: "https://yiyan.baidu.com",
        hot: true,
        chinese: true
    },
    {
        id: 4,
        name: "通义千问",
        logo: "https://img.alicdn.com/imgextra/i2/O1CN01KqQ3uN1MbFQvJKdWZ_!!6000000001455-2-tps-200-200.png",
        category: "chat",
        tags: ["对话", "阿里", "多模态"],
        price: "免费",
        description: "阿里巴巴开发的 AI 大模型，支持多模态理解",
        features: ["对话理解", "代码生成", "图片分析", "文档处理"],
        url: "https://tongyi.aliyun.com",
        hot: true,
        chinese: true
    },
    {
        id: 5,
        name: "Kimi",
        logo: "https://kimi.moonshot.cn/assets/logo.png",
        category: "chat",
        tags: ["对话", "长文本", "月之暗面"],
        price: "免费",
        description: "月之暗面开发的 AI 助手，支持超长上下文",
        features: ["200 万上下文", "文件上传", "联网搜索", "多轮对话"],
        url: "https://kimi.moonshot.cn",
        hot: true,
        chinese: true
    },
    {
        id: 6,
        name: "智谱清言",
        logo: "https://chatglm.cn/assets/favicon.png",
        category: "chat",
        tags: ["对话", "清华", "中文"],
        price: "免费",
        description: "清华智谱开发的 AI 对话助手",
        features: ["中文对话", "知识问答", "代码生成", "文档理解"],
        url: "https://chatglm.cn",
        hot: false,
        chinese: true
    },
    {
        id: 7,
        name: "讯飞星火",
        logo: "https://xinghuo.xfyun.cn/assets/favicon.png",
        category: "chat",
        tags: ["对话", "科大讯飞", "语音"],
        price: "免费",
        description: "科大讯飞开发的认知大模型",
        features: ["语音交互", "多轮对话", "知识问答", "办公辅助"],
        url: "https://xinghuo.xfyun.cn",
        hot: false,
        chinese: true
    },
    {
        id: 8,
        name: "DeepSeek",
        logo: "https://chat.deepseek.com/assets/favicon.png",
        category: "chat",
        tags: ["对话", "深度求索", "推理"],
        price: "免费",
        description: "深度求索开发的 AI 助手，擅长逻辑推理",
        features: ["逻辑推理", "数学计算", "代码能力", "长文本"],
        url: "https://chat.deepseek.com",
        hot: true,
        chinese: true
    },
    {
        id: 9,
        name: "Doubao",
        logo: "https://doubao.com/assets/favicon.png",
        category: "chat",
        tags: ["对话", "字节", "多功能"],
        price: "免费",
        description: "字节跳动开发的多功能 AI 助手",
        features: ["对话聊天", "知识问答", "创意写作", "生活助手"],
        url: "https://doubao.com",
        hot: false,
        chinese: true
    },
    {
        id: 10,
        name: "Grok",
        logo: "https://x.ai/assets/favicon.png",
        category: "chat",
        tags: ["对话", "xAI", "马斯克"],
        price: "$22/月",
        description: "马斯克 xAI 团队开发的 AI 助手",
        features: ["实时数据", "幽默风格", "X 平台集成", "独立思考"],
        url: "https://x.ai",
        hot: false,
        chinese: false
    },
    {
        id: 11,
        name: "Pi",
        logo: "https://pi.ai/assets/favicon.png",
        category: "chat",
        tags: ["陪伴", "情感", "虚拟朋友"],
        price: "免费",
        description: "Inflection AI 开发的情感 AI 助手",
        features: ["情感支持", "友好对话", "心理健康", "日常陪伴"],
        url: "https://pi.ai",
        hot: false,
        chinese: false
    },
    {
        id: 12,
        name: "Perplexity",
        logo: "https://www.perplexity.ai/favicon.ico",
        category: "chat",
        tags: ["搜索", "问答", "引用"],
        price: "免费 / $20/月",
        description: "AI 搜索引擎，提供带引用的答案",
        features: ["实时搜索", "引用来源", "多模型选择", "专业搜索"],
        url: "https://perplexity.ai",
        hot: true,
        chinese: false
    },
    {
        id: 13,
        name: "YouChat",
        logo: "https://you.com/assets/favicon.png",
        category: "chat",
        tags: ["搜索", "对话", "实时"],
        price: "免费",
        description: "You.com 的 AI 对话搜索引擎",
        features: ["实时搜索", "对话式回答", "引用链接", "多语言"],
        url: "https://you.com",
        hot: false,
        chinese: false
    },
    {
        id: 14,
        name: "Character.ai",
        logo: "https://character.ai/assets/favicon.png",
        category: "chat",
        tags: ["角色扮演", "娱乐", "虚拟人"],
        price: "免费 / $5/月",
        description: "创建和对话虚拟角色的 AI 平台",
        features: ["角色扮演", "名人对话", "原创角色", "娱乐聊天"],
        url: "https://character.ai",
        hot: false,
        chinese: false
    },
    {
        id: 15,
        name: "Replika",
        logo: "https://replika.ai/assets/favicon.png",
        category: "chat",
        tags: ["陪伴", "情感", "虚拟朋友"],
        price: "免费 / $8/月",
        description: "AI 虚拟朋友，提供情感陪伴",
        features: ["情感陪伴", "个性化成长", "语音通话", "AR 互动"],
        url: "https://replika.ai",
        hot: false,
        chinese: false
    },

    // 🎨 图像绘画 (20 个)
    {
        id: 20,
        name: "Midjourney",
        logo: "https://midjourney.com/assets/favicon.png",
        category: "image",
        tags: ["绘画", "艺术", "高质量"],
        price: "$10/月起",
        description: "最流行的 AI 绘画工具，艺术风格独特",
        features: ["高质量图像", "艺术风格", "Discord 使用", "社区活跃"],
        url: "https://midjourney.com",
        hot: true,
        chinese: false
    },
    {
        id: 21,
        name: "Stable Diffusion",
        logo: "https://stability.ai/assets/favicon.png",
        category: "image",
        tags: ["绘画", "开源", "本地部署"],
        price: "免费",
        description: "开源 AI 绘画模型，可本地部署",
        features: ["完全免费", "可本地运行", "插件丰富", "可控性强"],
        url: "https://stability.ai",
        hot: true,
        chinese: false
    },
    {
        id: 22,
        name: "DALL-E 3",
        logo: "https://openai.com/assets/favicon.png",
        category: "image",
        tags: ["绘画", "OpenAI", "精准"],
        price: "通过 ChatGPT Plus",
        description: "OpenAI 的图像生成模型，理解能力强",
        features: ["精准理解", "文字渲染", "集成 ChatGPT", "安全性高"],
        url: "https://openai.com/dall-e-3",
        hot: true,
        chinese: false
    },
    {
        id: 23,
        name: "Leonardo AI",
        logo: "https://leonardo.ai/assets/favicon.png",
        category: "image",
        tags: ["绘画", "游戏", "设计"],
        price: "免费 / $10/月",
        description: "专注于游戏资产和设计的 AI 绘画工具",
        features: ["游戏素材", "3D 模型", "纹理生成", "免费额度"],
        url: "https://leonardo.ai",
        hot: true,
        chinese: false
    },
    {
        id: 24,
        name: "Canva AI",
        logo: "https://canva.com/assets/favicon.png",
        category: "image",
        tags: ["设计", "模板", "易用"],
        price: "免费 / $12/月",
        description: "在线设计工具的 AI 功能，模板丰富",
        features: ["AI 绘图", "模板库", "一键设计", "团队协作"],
        url: "https://canva.com",
        hot: true,
        chinese: false
    },
    {
        id: 25,
        name: "Adobe Firefly",
        logo: "https://adobe.com/assets/favicon.png",
        category: "image",
        tags: ["绘画", "Adobe", "商业"],
        price: "免费 / $10/月",
        description: "Adobe 的 AI 图像生成工具，可商用",
        features: ["商业授权", "Photoshop 集成", "高质量", "版权安全"],
        url: "https://firefly.adobe.com",
        hot: true,
        chinese: false
    },
    {
        id: 26,
        name: "Bing Image Creator",
        logo: "https://bing.com/assets/favicon.png",
        category: "image",
        tags: ["绘画", "微软", "免费"],
        price: "免费",
        description: "微软的免费 AI 绘画工具，基于 DALL-E 3",
        features: ["完全免费", "DALL-E 3 驱动", "Bing 集成", "简单易用"],
        url: "https://bing.com/images/create",
        hot: true,
        chinese: false
    },
    {
        id: 27,
        name: "Ideogram",
        logo: "https://ideogram.ai/assets/favicon.png",
        category: "image",
        tags: ["绘画", "文字", "设计"],
        price: "免费 / $8/月",
        description: "擅长生成带文字的 AI 绘画工具",
        features: ["文字渲染", "海报设计", "Logo 生成", "免费额度"],
        url: "https://ideogram.ai",
        hot: false,
        chinese: false
    },
    {
        id: 28,
        name: "Playground AI",
        logo: "https://playgroundai.com/assets/favicon.png",
        category: "image",
        tags: ["绘画", "免费", "社交"],
        price: "免费 / $15/月",
        description: "免费在线 AI 绘画平台，社区活跃",
        features: ["每日免费", "社区分享", "多种模型", "编辑功能"],
        url: "https://playgroundai.com",
        hot: false,
        chinese: false
    },
    {
        id: 29,
        name: "Clipdrop",
        logo: "https://clipdrop.co/assets/favicon.png",
        category: "image",
        tags: ["图像处理", "抠图", "Stability"],
        price: "免费 / $10/月",
        description: "Stability AI 的图像处理工具集",
        features: ["一键抠图", "背景移除", "图片放大", "重照明"],
        url: "https://clipdrop.co",
        hot: false,
        chinese: false
    },
    {
        id: 30,
        name: "Remove.bg",
        logo: "https://remove.bg/assets/favicon.png",
        category: "image",
        tags: ["抠图", "背景移除", "免费"],
        price: "免费 / $9/月",
        description: "一键移除图片背景的在线工具",
        features: ["自动抠图", "高清输出", "批量处理", "API 支持"],
        url: "https://remove.bg",
        hot: false,
        chinese: false
    },
    {
        id: 31,
        name: "Magnific AI",
        logo: "https://magnific.ai/assets/favicon.png",
        category: "image",
        tags: ["放大", "增强", "高清"],
        price: "$39/月",
        description: "AI 图片放大和增强工具",
        features: ["超分辨率", "细节增强", "批量处理", "高质量"],
        url: "https://magnific.ai",
        hot: false,
        chinese: false
    },
    {
        id: 32,
        name: "Krea AI",
        logo: "https://krea.ai/assets/favicon.png",
        category: "image",
        tags: ["绘画", "实时", "设计"],
        price: "免费 / $10/月",
        description: "实时 AI 绘画和设计工具",
        features: ["实时生成", "图案设计", "品牌工具", "模板库"],
        url: "https://krea.ai",
        hot: false,
        chinese: false
    },
    {
        id: 33,
        name: "SeaArt",
        logo: "https://seaart.ai/assets/favicon.png",
        category: "image",
        tags: ["绘画", "免费", "亚洲"],
        price: "免费",
        description: "免费 AI 绘画平台，亚洲风格丰富",
        features: ["免费使用", "亚洲模型", "社区活跃", "移动端"],
        url: "https://seaart.ai",
        hot: false,
        chinese: false
    },
    {
        id: 34,
        name: "LiblibAI",
        logo: "https://liblib.art/assets/favicon.png",
        category: "image",
        tags: ["绘画", "中国", "模型"],
        price: "免费",
        description: "国内 AI 绘画模型分享平台",
        features: ["中文界面", "模型分享", "在线生成", "社区活跃"],
        url: "https://liblib.art",
        hot: false,
        chinese: true
    },
    {
        id: 35,
        name: "Recraft",
        logo: "https://recraft.ai/assets/favicon.png",
        category: "image",
        tags: ["设计", "矢量", "图标"],
        price: "免费 / $12/月",
        description: "AI 矢量图和图标生成工具",
        features: ["矢量生成", "图标设计", "风格一致", "商业授权"],
        url: "https://recraft.ai",
        hot: false,
        chinese: false
    },
    {
        id: 36,
        name: "Flux",
        logo: "https://blackforestlabs.ai/assets/favicon.png",
        category: "image",
        tags: ["绘画", "开源", "高质量"],
        price: "免费",
        description: "开源高质量 AI 绘画模型",
        features: ["开源免费", "高质量", "本地部署", "社区支持"],
        url: "https://blackforestlabs.ai",
        hot: true,
        chinese: false
    },
    {
        id: 37,
        name: "ComfyUI",
        logo: "https://github.com/comfyanonymous/ComfyUI/raw/master/comfyui.png",
        category: "image",
        tags: ["绘画", "工作流", "专业"],
        price: "免费",
        description: "节点式 AI 绘画工作流工具",
        features: ["节点编辑", "工作流", "高度定制", "专业用户"],
        url: "https://github.com/comfyanonymous/ComfyUI",
        hot: false,
        chinese: false
    },
    {
        id: 38,
        name: "Fooocus",
        logo: "https://github.com/lllyasviel/Fooocus/raw/master/assets/logo.png",
        category: "image",
        tags: ["绘画", "简单", "本地"],
        price: "免费",
        description: "简单易用的本地 AI 绘画工具",
        features: ["一键启动", "简单界面", "本地运行", "免费开源"],
        url: "https://github.com/lllyasviel/Fooocus",
        hot: false,
        chinese: false
    },
    {
        id: 39,
        name: "Draw Things",
        logo: "https://drawthings.ai/assets/favicon.png",
        category: "image",
        tags: ["绘画", "移动端", "iOS"],
        price: "免费",
        description: "手机端 AI 绘画应用",
        features: ["iOS/Android", "离线使用", "多种模型", "移动优化"],
        url: "https://drawthings.ai",
        hot: false,
        chinese: false
    },

    // ✍️ 写作创作 (18 个)
    {
        id: 50,
        name: "Jasper",
        logo: "https://jasper.ai/assets/favicon.png",
        category: "writing",
        tags: ["写作", "营销", "专业"],
        price: "$49/月",
        description: "专业 AI 写作助手，适合营销内容创作",
        features: ["营销文案", "品牌声音", "SEO 优化", "团队协作"],
        url: "https://jasper.ai",
        hot: true,
        chinese: false
    },
    {
        id: 51,
        name: "Notion AI",
        logo: "https://notion.so/assets/favicon.png",
        category: "writing",
        tags: ["写作", "笔记", "整理"],
        price: "$10/月",
        description: "Notion 内置的 AI 写作助手",
        features: ["笔记整理", "文章润色", "摘要生成", "任务管理"],
        url: "https://notion.so",
        hot: true,
        chinese: false
    },
    {
        id: 52,
        name: "Grammarly",
        logo: "https://grammarly.com/assets/favicon.png",
        category: "writing",
        tags: ["写作", "校对", "英语"],
        price: "免费 / $12/月",
        description: "AI 语法检查和写作改进工具",
        features: ["语法检查", "拼写纠正", "风格建议", "抄袭检测"],
        url: "https://grammarly.com",
        hot: true,
        chinese: false
    },
    {
        id: 53,
        name: "Copy.ai",
        logo: "https://copy.ai/assets/favicon.png",
        category: "writing",
        tags: ["写作", "营销", "社交媒体"],
        price: "免费 / $36/月",
        description: "专注于营销文案的 AI 写作工具",
        features: ["社交媒体", "广告文案", "产品描述", "邮件营销"],
        url: "https://copy.ai",
        hot: false,
        chinese: false
    },
    {
        id: 54,
        name: "Writesonic",
        logo: "https://writesonic.com/assets/favicon.png",
        category: "writing",
        tags: ["写作", "营销", "SEO"],
        price: "免费 / $20/月",
        description: "AI 营销文案和博客写作工具",
        features: ["博客文章", "广告文案", "SEO 优化", "多语言"],
        url: "https://writesonic.com",
        hot: false,
        chinese: false
    },
    {
        id: 55,
        name: "Rytr",
        logo: "https://rytr.me/assets/favicon.png",
        category: "writing",
        tags: ["写作", "便宜", "多语言"],
        price: "免费 / $9/月",
        description: "经济实惠的 AI 写作助手",
        features: ["多语言", "多场景", "便宜实惠", "简单易用"],
        url: "https://rytr.me",
        hot: false,
        chinese: false
    },
    {
        id: 56,
        name: "Sudowrite",
        logo: "https://sudowrite.com/assets/favicon.png",
        category: "writing",
        tags: ["写作", "小说", "创意"],
        price: "$19/月",
        description: "专为小说家设计的 AI 写作工具",
        features: ["小说创作", "情节生成", "角色设计", "创意激发"],
        url: "https://sudowrite.com",
        hot: false,
        chinese: false
    },
    {
        id: 57,
        name: "Wordtune",
        logo: "https://wordtune.com/assets/favicon.png",
        category: "writing",
        tags: ["写作", "改写", "润色"],
        price: "免费 / $10/月",
        description: "AI 句子改写和润色工具",
        features: ["句子改写", "语气调整", "长度调整", "浏览器插件"],
        url: "https://wordtune.com",
        hot: false,
        chinese: false
    },
    {
        id: 58,
        name: "Quillbot",
        logo: "https://quillbot.com/assets/favicon.png",
        category: "writing",
        tags: ["改写", "paraphrase", "免费"],
        price: "免费 / $10/月",
        description: "免费的 AI 改写和摘要工具",
        features: ["句子改写", "摘要生成", "语法检查", "免费额度"],
        url: "https://quillbot.com",
        hot: false,
        chinese: false
    },
    {
        id: 59,
        name: "Hemingway Editor",
        logo: "https://hemingwayapp.com/assets/favicon.png",
        category: "writing",
        tags: ["编辑", "简洁", "可读性"],
        price: "免费 / $20 一次性",
        description: "提升文章可读性的编辑工具",
        features: ["可读性分析", "简洁建议", "高亮显示", "离线使用"],
        url: "https://hemingwayapp.com",
        hot: false,
        chinese: false
    },
    {
        id: 60,
        name: "NovelAI",
        logo: "https://novelai.net/assets/favicon.png",
        category: "writing",
        tags: ["小说", "创意", "无限制"],
        price: "$10/月",
        description: "无限制的 AI 故事创作工具",
        features: ["无内容限制", "故事创作", "角色扮演", "隐私保护"],
        url: "https://novelai.net",
        hot: false,
        chinese: false
    },
    {
        id: 61,
        name: "ClosersCopy",
        logo: "https://closerscopy.com/assets/favicon.png",
        category: "writing",
        tags: ["写作", "销售", "营销"],
        price: "$49/月",
        description: "销售文案和营销内容写作工具",
        features: ["销售文案", "营销框架", "SEO 博客", "团队协作"],
        url: "https://closerscopy.com",
        hot: false,
        chinese: false
    },
    {
        id: 62,
        name: "Anyword",
        logo: "https://anyword.com/assets/favicon.png",
        category: "writing",
        tags: ["写作", "预测", "营销"],
        price: "$49/月",
        description: "AI 文案效果预测工具",
        features: ["效果预测", "A/B 测试", "营销文案", "数据分析"],
        url: "https://anyword.com",
        hot: false,
        chinese: false
    },
    {
        id: 63,
        name: "Peppertype",
        logo: "https://peppertype.ai/assets/favicon.png",
        category: "writing",
        tags: ["写作", "营销", "快速"],
        price: "$35/月",
        description: "快速生成营销内容的 AI 工具",
        features: ["内容生成", "营销模板", "SEO 优化", "多语言"],
        url: "https://peppertype.ai",
        hot: false,
        chinese: false
    },
    {
        id: 64,
        name: "INK Editor",
        logo: "https://inkforall.com/assets/favicon.png",
        category: "writing",
        tags: ["写作", "SEO", "WordPress"],
        price: "免费 / $19/月",
        description: "SEO 优化的 AI 写作和编辑工具",
        features: ["SEO 优化", "WordPress 集成", "关键词研究", "内容规划"],
        url: "https://inkforall.com",
        hot: false,
        chinese: false
    },
    {
        id: 65,
        name: "Frase",
        logo: "https://frase.io/assets/favicon.png",
        category: "writing",
        tags: ["写作", "SEO", "研究"],
        price: "$15/月",
        description: "AI 内容研究和写作工具",
        features: ["内容研究", "竞品分析", "SEO 优化", "自动大纲"],
        url: "https://frase.io",
        hot: false,
        chinese: false
    },
    {
        id: 66,
        name: "MarketMuse",
        logo: "https://marketmuse.com/assets/favicon.png",
        category: "writing",
        tags: ["写作", "企业", "SEO"],
        price: "$149/月",
        description: "企业级 AI 内容规划工具",
        features: ["内容规划", "竞品分析", "SEO 策略", "团队协作"],
        url: "https://marketmuse.com",
        hot: false,
        chinese: false
    },
    {
        id: 67,
        name: "笔神",
        logo: "https://bishen.ink/assets/favicon.png",
        category: "writing",
        tags: ["写作", "中文", "素材"],
        price: "免费 / ¥30/月",
        description: "中文 AI 写作助手，素材丰富",
        features: ["素材推荐", "句子优化", "中文写作", "论文辅助"],
        url: "https://bishen.ink",
        hot: false,
        chinese: true
    },

    // 🎬 视频处理 (15 个)
    {
        id: 80,
        name: "Runway",
        logo: "https://runwayml.com/assets/favicon.png",
        category: "video",
        tags: ["视频", "编辑", "生成"],
        price: "免费 / $15/月",
        description: "AI 视频编辑和生成工具",
        features: ["视频生成", "智能剪辑", "绿幕抠图", "运动追踪"],
        url: "https://runwayml.com",
        hot: true,
        chinese: false
    },
    {
        id: 81,
        name: "Sora",
        logo: "https://openai.com/assets/favicon.png",
        category: "video",
        tags: ["视频", "生成", "OpenAI"],
        price: "未公开",
        description: "OpenAI 的视频生成模型，文字生成视频",
        features: ["文字转视频", "高质量", "长视频", "物理模拟"],
        url: "https://openai.com/sora",
        hot: true,
        chinese: false
    },
    {
        id: 82,
        name: "Descript",
        logo: "https://descript.com/assets/favicon.png",
        category: "video",
        tags: ["视频", "编辑", "转录"],
        price: "免费 / $15/月",
        description: "像编辑文档一样编辑视频",
        features: ["文字编辑视频", "自动转录", "配音克隆", "屏幕录制"],
        url: "https://descript.com",
        hot: true,
        chinese: false
    },
    {
        id: 83,
        name: "HeyGen",
        logo: "https://heygen.com/assets/favicon.png",
        category: "video",
        tags: ["视频", "数字人", "口播"],
        price: "免费 / $29/月",
        description: "AI 数字人视频生成工具",
        features: ["数字人播报", "多语言", "口型同步", "模板丰富"],
        url: "https://heygen.com",
        hot: true,
        chinese: false
    },
    {
        id: 84,
        name: "Synthesia",
        logo: "https://synthesia.io/assets/favicon.png",
        category: "video",
        tags: ["视频", "数字人", "企业"],
        price: "$30/月",
        description: "企业级 AI 数字人视频平台",
        features: ["140+ 数字人", "多语言", "企业模板", "品牌定制"],
        url: "https://synthesia.io",
        hot: true,
        chinese: false
    },
    {
        id: 85,
        name: "Pictory",
        logo: "https://pictory.ai/assets/favicon.png",
        category: "video",
        tags: ["视频", "摘要", "营销"],
        price: "$19/月",
        description: "将长内容转换为短视频",
        features: ["长文转视频", "自动摘要", "素材匹配", "字幕生成"],
        url: "https://pictory.ai",
        hot: false,
        chinese: false
    },
    {
        id: 86,
        name: "InVideo",
        logo: "https://invideo.io/assets/favicon.png",
        category: "video",
        tags: ["视频", "模板", "社交媒体"],
        price: "免费 / $15/月",
        description: "在线视频制作工具，模板丰富",
        features: ["5000+ 模板", "AI 生成", "社交媒体", "团队协作"],
        url: "https://invideo.io",
        hot: false,
        chinese: false
    },
    {
        id: 87,
        name: "Lumen5",
        logo: "https://lumen5.com/assets/favicon.png",
        category: "video",
        tags: ["视频", "博客", "营销"],
        price: "免费 / $29/月",
        description: "博客文章转视频工具",
        features: ["文章转视频", "自动匹配", "品牌定制", "数据分析"],
        url: "https://lumen5.com",
        hot: false,
        chinese: false
    },
    {
        id: 88,
        name: "Fliki",
        logo: "https://fliki.ai/assets/favicon.png",
        category: "video",
        tags: ["视频", "配音", "多语言"],
        price: "免费 / $21/月",
        description: "AI 视频和配音生成工具",
        features: ["文字转视频", "AI 配音", "多语言", "素材库"],
        url: "https://fliki.ai",
        hot: false,
        chinese: false
    },
    {
        id: 89,
        name: "Elai.io",
        logo: "https://elai.io/assets/favicon.png",
        category: "video",
        tags: ["视频", "数字人", "教育"],
        price: "$23/月",
        description: "AI 数字人视频生成平台",
        features: ["数字人播报", "PPT 转视频", "多语言", "教育场景"],
        url: "https://elai.io",
        hot: false,
        chinese: false
    },
    {
        id: 90,
        name: "D-ID",
        logo: "https://d-id.com/assets/favicon.png",
        category: "video",
        tags: ["视频", "照片", "说话"],
        price: "免费 / $6/月",
        description: "让照片说话的视频工具",
        features: ["照片说话", "数字人", "多语言", "API 支持"],
        url: "https://d-id.com",
        hot: false,
        chinese: false
    },
    {
        id: 91,
        name: "Kaiber",
        logo: "https://kaiber.ai/assets/favicon.png",
        category: "video",
        tags: ["视频", "艺术", "音乐"],
        price: "$5/月",
        description: "AI 艺术视频生成工具",
        features: ["音乐可视化", "艺术风格", "动画生成", "创意视频"],
        url: "https://kaiber.ai",
        hot: false,
        chinese: false
    },
    {
        id: 92,
        name: "Captions",
        logo: "https://captions.ai/assets/favicon.png",
        category: "video",
        tags: ["字幕", "短视频", "社交媒体"],
        price: "免费 / $10/月",
        description: "自动生成视频字幕的工具",
        features: ["自动字幕", "动态字幕", "多语言", "短视频优化"],
        url: "https://captions.ai",
        hot: false,
        chinese: false
    },
    {
        id: 93,
        name: "Opus Clip",
        logo: "https://opus.pro/assets/favicon.png",
        category: "video",
        tags: ["剪辑", "短视频", "自动化"],
        price: "免费 / $19/月",
        description: "长视频自动剪辑成短视频",
        features: ["自动剪辑", "亮点提取", "竖屏适配", "病毒潜力评分"],
        url: "https://opus.pro",
        hot: true,
        chinese: false
    },
    {
        id: 94,
        name: "Veed.io",
        logo: "https://veed.io/assets/favicon.png",
        category: "video",
        tags: ["视频", "编辑", "在线"],
        price: "免费 / $18/月",
        description: "在线视频编辑工具",
        features: ["在线编辑", "自动字幕", "屏幕录制", "模板库"],
        url: "https://veed.io",
        hot: false,
        chinese: false
    },

    // 💻 编程开发 (15 个)
    {
        id: 110,
        name: "GitHub Copilot",
        logo: "https://github.githubassets.com/assets/copilot-logo.png",
        category: "code",
        tags: ["编程", "代码", "GitHub"],
        price: "$10/月",
        description: "GitHub 的 AI 编程助手，自动补全代码",
        features: ["代码补全", "多语言支持", "IDE 集成", "测试生成"],
        url: "https://github.com/features/copilot",
        hot: true,
        chinese: false
    },
    {
        id: 111,
        name: "Cursor",
        logo: "https://cursor.sh/assets/favicon.png",
        category: "code",
        tags: ["编程", "IDE", "AI"],
        price: "免费 / $20/月",
        description: "AI 优先的代码编辑器",
        features: ["AI 对话编程", "代码生成", "智能重构", "Bug 修复"],
        url: "https://cursor.sh",
        hot: true,
        chinese: false
    },
    {
        id: 112,
        name: "Replit AI",
        logo: "https://replit.com/assets/favicon.png",
        category: "code",
        tags: ["编程", "在线 IDE", "学习"],
        price: "免费 / $20/月",
        description: "在线 IDE 的 AI 编程助手",
        features: ["在线编程", "AI 助手", "项目托管", "协作开发"],
        url: "https://replit.com",
        hot: false,
        chinese: false
    },
    {
        id: 113,
        name: "Codeium",
        logo: "https://codeium.com/assets/favicon.png",
        category: "code",
        tags: ["编程", "免费", "补全"],
        price: "免费",
        description: "免费的 AI 代码补全工具",
        features: ["免费使用", "快速补全", "多 IDE 支持", "聊天功能"],
        url: "https://codeium.com",
        hot: true,
        chinese: false
    },
    {
        id: 114,
        name: "Tabnine",
        logo: "https://tabnine.com/assets/favicon.png",
        category: "code",
        tags: ["编程", "补全", "隐私"],
        price: "免费 / $12/月",
        description: "注重隐私的 AI 代码补全工具",
        features: ["本地模型", "隐私保护", "多 IDE", "团队协作"],
        url: "https://tabnine.com",
        hot: false,
        chinese: false
    },
    {
        id: 115,
        name: "Amazon CodeWhisperer",
        logo: "https://aws.amazon.com/assets/favicon.png",
        category: "code",
        tags: ["编程", "AWS", "免费"],
        price: "免费 / $19/月",
        description: "亚马逊的 AI 编程助手",
        features: ["代码生成", "安全扫描", "AWS 集成", "个人免费"],
        url: "https://aws.amazon.com/codewhisperer",
        hot: false,
        chinese: false
    },
    {
        id: 116,
        name: "Sourcegraph Cody",
        logo: "https://sourcegraph.com/assets/favicon.png",
        category: "code",
        tags: ["编程", "搜索", "理解"],
        price: "免费 / $9/月",
        description: "理解整个代码库的 AI 助手",
        features: ["代码库理解", "智能搜索", "代码生成", "文档生成"],
        url: "https://sourcegraph.com/cody",
        hot: false,
        chinese: false
    },
    {
        id: 117,
        name: "Continue",
        logo: "https://continue.dev/assets/favicon.png",
        category: "code",
        tags: ["编程", "开源", "本地"],
        price: "免费",
        description: "开源的 AI 编程助手",
        features: ["开源免费", "本地模型", "多模型支持", "VSCode 插件"],
        url: "https://continue.dev",
        hot: false,
        chinese: false
    },
    {
        id: 118,
        name: "Windsurf",
        logo: "https://codeium.com/assets/favicon.png",
        category: "code",
        tags: ["编程", "IDE", "智能"],
        price: "免费 / $15/月",
        description: "下一代 AI 代码编辑器",
        features: ["深度理解", "智能编辑", "多文件操作", "上下文感知"],
        url: "https://codeium.com/windsurf",
        hot: false,
        chinese: false
    },
    {
        id: 119,
        name: "Bolt.new",
        logo: "https://bolt.new/assets/favicon.png",
        category: "code",
        tags: ["编程", "全栈", "快速"],
        price: "免费 / $20/月",
        description: "浏览器中快速构建全栈应用",
        features: ["浏览器开发", "全栈生成", "实时预览", "一键部署"],
        url: "https://bolt.new",
        hot: true,
        chinese: false
    },
    {
        id: 120,
        name: "v0",
        logo: "https://v0.dev/assets/favicon.png",
        category: "code",
        tags: ["前端", "UI", "生成"],
        price: "免费 / $20/月",
        description: "Vercel 的 UI 生成工具",
        features: ["UI 生成", "React 组件", "Tailwind", "一键复制"],
        url: "https://v0.dev",
        hot: true,
        chinese: false
    },
    {
        id: 121,
        name: "Lovable",
        logo: "https://lovable.dev/assets/favicon.png",
        category: "code",
        tags: ["编程", "全栈", "简单"],
        price: "免费 / $25/月",
        description: "用自然语言构建全栈应用",
        features: ["自然语言", "全栈生成", "数据库集成", "实时协作"],
        url: "https://lovable.dev",
        hot: false,
        chinese: false
    },
    {
        id: 122,
        name: "Durable",
        logo: "https://durable.co/assets/favicon.png",
        category: "code",
        tags: ["建站", "快速", "AI"],
        price: "$12/月",
        description: "30 秒生成一个网站",
        features: ["快速建站", "AI 生成", "域名注册", "营销工具"],
        url: "https://durable.co",
        hot: false,
        chinese: false
    },
    {
        id: 123,
        name: "Framer AI",
        logo: "https://framer.com/assets/favicon.png",
        category: "code",
        tags: ["建站", "设计", "无代码"],
        price: "免费 / $15/月",
        description: "AI 驱动的网站设计工具",
        features: ["AI 生成", "设计工具", "无代码", "响应式"],
        url: "https://framer.com",
        hot: false,
        chinese: false
    },
    {
        id: 124,
        name: "Relume",
        logo: "https://relume.io/assets/favicon.png",
        category: "code",
        tags: ["设计", "线框图", "Figma"],
        price: "免费 / $15/月",
        description: "AI 生成网站线框图和原型",
        features: ["线框图生成", "Figma 集成", "内容生成", "设计系统"],
        url: "https://relume.io",
        hot: false,
        chinese: false
    },

    // 🎵 音频音乐 (12 个)
    {
        id: 140,
        name: "Suno AI",
        logo: "https://suno.ai/assets/favicon.png",
        category: "audio",
        tags: ["音乐", "生成", "歌曲"],
        price: "免费 / $10/月",
        description: "AI 音乐生成工具，文字生成完整歌曲",
        features: ["完整歌曲", "人声生成", "多种风格", "歌词创作"],
        url: "https://suno.ai",
        hot: true,
        chinese: false
    },
    {
        id: 141,
        name: "ElevenLabs",
        logo: "https://elevenlabs.io/assets/favicon.png",
        category: "audio",
        tags: ["语音", "TTS", "克隆"],
        price: "免费 / $5/月",
        description: "AI 语音合成和声音克隆工具",
        features: ["逼真语音", "声音克隆", "多语言", "情感表达"],
        url: "https://elevenlabs.io",
        hot: true,
        chinese: false
    },
    {
        id: 142,
        name: "Udio",
        logo: "https://udio.com/assets/favicon.png",
        category: "audio",
        tags: ["音乐", "生成", "高质量"],
        price: "免费",
        description: "高质量 AI 音乐生成工具",
        features: ["高音质", "多种风格", "快速生成", "免费使用"],
        url: "https://udio.com",
        hot: true,
        chinese: false
    },
    {
        id: 143,
        name: "Stable Audio",
        logo: "https://stability.ai/assets/favicon.png",
        category: "audio",
        tags: ["音乐", "Stability", "音效"],
        price: "免费 / $12/月",
        description: "Stability AI 的音乐生成工具",
        features: ["音乐生成", "音效设计", "长音频", "商业授权"],
        url: "https://stableaudio.com",
        hot: false,
        chinese: false
    },
    {
        id: 144,
        name: "Mubert",
        logo: "https://mubert.com/assets/favicon.png",
        category: "audio",
        tags: ["音乐", "流媒体", "BGM"],
        price: "免费 / $14/月",
        description: "AI 生成流媒体背景音乐",
        features: ["无限音乐", "BGM 生成", "API 支持", "商业授权"],
        url: "https://mubert.com",
        hot: false,
        chinese: false
    },
    {
        id: 145,
        name: "AIVA",
        logo: "https://aiva.ai/assets/favicon.png",
        category: "audio",
        tags: ["音乐", "古典", "配乐"],
        price: "免费 / $11/月",
        description: "AI 作曲工具，擅长古典音乐",
        features: ["古典音乐", "电影配乐", "MIDI 导出", "乐谱生成"],
        url: "https://aiva.ai",
        hot: false,
        chinese: false
    },
    {
        id: 146,
        name: "Soundraw",
        logo: "https://soundraw.io/assets/favicon.png",
        category: "audio",
        tags: ["音乐", "定制", "视频配乐"],
        price: "$17/月",
        description: "可定制的 AI 音乐生成工具",
        features: ["风格定制", "长度调整", "视频配乐", "免版税"],
        url: "https://soundraw.io",
        hot: false,
        chinese: false
    },
    {
        id: 147,
        name: "Beatoven",
        logo: "https://beatoven.ai/assets/favicon.png",
        category: "audio",
        tags: ["音乐", "视频", "情绪"],
        price: "免费 / $15/月",
        description: "根据情绪生成背景音乐的 AI 工具",
        features: ["情绪选择", "视频配乐", "免版税", "多风格"],
        url: "https://beatoven.ai",
        hot: false,
        chinese: false
    },
    {
        id: 148,
        name: "Play.ht",
        logo: "https://play.ht/assets/favicon.png",
        category: "audio",
        tags: ["语音", "TTS", "播客"],
        price: "免费 / $31/月",
        description: "AI 语音生成和播客工具",
        features: ["TTS 语音", "播客生成", "多语言", "情感表达"],
        url: "https://play.ht",
        hot: false,
        chinese: false
    },
    {
        id: 149,
        name: "Murf.ai",
        logo: "https://murf.ai/assets/favicon.png",
        category: "audio",
        tags: ["语音", "配音", "企业"],
        price: "免费 / $26/月",
        description: "企业级 AI 语音生成平台",
        features: ["专业配音", "多语言", "视频配音", "团队协作"],
        url: "https://murf.ai",
        hot: false,
        chinese: false
    },
    {
        id: 150,
        name: "Lovo",
        logo: "https://lovo.ai/assets/favicon.png",
        category: "audio",
        tags: ["语音", "配音", "游戏"],
        price: "免费 / $24/月",
        description: "AI 语音和配音工具",
        features: ["500+ 声音", "多语言", "情感控制", "游戏配音"],
        url: "https://lovo.ai",
        hot: false,
        chinese: false
    },
    {
        id: 151,
        name: "Resemble AI",
        logo: "https://resemble.ai/assets/favicon.png",
        category: "audio",
        tags: ["语音", "克隆", "实时"],
        price: "$0.006/秒",
        description: "实时声音克隆和语音生成",
        features: ["实时克隆", "多语言", "情感控制", "API 支持"],
        url: "https://resemble.ai",
        hot: false,
        chinese: false
    },

    // 📊 办公效率 (18 个)
    {
        id: 170,
        name: "Microsoft 365 Copilot",
        logo: "https://microsoft.com/assets/favicon.png",
        category: "productivity",
        tags: ["办公", "Office", "微软"],
        price: "$30/月",
        description: "微软 Office 的 AI 助手",
        features: ["Word 写作", "PPT 生成", "Excel 分析", "Outlook 邮件"],
        url: "https://microsoft.com/copilot",
        hot: true,
        chinese: false
    },
    {
        id: 171,
        name: "Gamma",
        logo: "https://gamma.app/assets/favicon.png",
        category: "productivity",
        tags: ["PPT", "演示", "生成"],
        price: "免费 / $10/月",
        description: "AI 生成演示文稿和文档",
        features: ["PPT 生成", "文档创建", "网页制作", "模板丰富"],
        url: "https://gamma.app",
        hot: true,
        chinese: false
    },
    {
        id: 172,
        name: "Beautiful.ai",
        logo: "https://beautiful.ai/assets/favicon.png",
        category: "productivity",
        tags: ["PPT", "设计", "自动化"],
        price: "$12/月",
        description: "智能 PPT 设计工具",
        features: ["自动排版", "智能模板", "品牌一致性", "团队协作"],
        url: "https://beautiful.ai",
        hot: false,
        chinese: false
    },
    {
        id: 173,
        name: "Otter.ai",
        logo: "https://otter.ai/assets/favicon.png",
        category: "productivity",
        tags: ["转录", "会议", "笔记"],
        price: "免费 / $10/月",
        description: "AI 会议转录和笔记工具",
        features: ["实时转录", "说话人识别", "关键词提取", "会议摘要"],
        url: "https://otter.ai",
        hot: true,
        chinese: false
    },
    {
        id: 174,
        name: "Fireflies.ai",
        logo: "https://fireflies.ai/assets/favicon.png",
        category: "productivity",
        tags: ["会议", "转录", "CRM"],
        price: "免费 / $10/月",
        description: "AI 会议助手，自动记录会议",
        features: ["自动参会", "会议转录", "智能摘要", "CRM 集成"],
        url: "https://fireflies.ai",
        hot: false,
        chinese: false
    },
    {
        id: 175,
        name: "Mem",
        logo: "https://mem.ai/assets/favicon.png",
        category: "productivity",
        tags: ["笔记", "AI", "知识管理"],
        price: "免费 / $10/月",
        description: "AI 驱动的智能笔记工具",
        features: ["自动整理", "智能搜索", "知识关联", "AI 助手"],
        url: "https://mem.ai",
        hot: false,
        chinese: false
    },
    {
        id: 176,
        name: "Taskade",
        logo: "https://taskade.com/assets/favicon.png",
        category: "productivity",
        tags: ["任务", "协作", "AI"],
        price: "免费 / $8/月",
        description: "AI 任务管理和协作工具",
        features: ["任务管理", "团队协作", "AI 助手", "模板库"],
        url: "https://taskade.com",
        hot: false,
        chinese: false
    },
    {
        id: 177,
        name: "Tome",
        logo: "https://tome.app/assets/favicon.png",
        category: "productivity",
        tags: ["演示", "故事", "AI"],
        price: "免费 / $10/月",
        description: "AI 驱动的演示和故事讲述工具",
        features: ["故事生成", "演示制作", "AI 图像", "嵌入内容"],
        url: "https://tome.app",
        hot: false,
        chinese: false
    },
    {
        id: 178,
        name: "Decktopus",
        logo: "https://decktopus.com/assets/favicon.png",
        category: "productivity",
        tags: ["PPT", "演示", "快速"],
        price: "免费 / $10/月",
        description: "快速生成演示文稿的 AI 工具",
        features: ["快速生成", "模板丰富", "自动设计", "演讲备注"],
        url: "https://decktopus.com",
        hot: false,
        chinese: false
    },
    {
        id: 179,
        name: "SlidesAI",
        logo: "https://slidesai.io/assets/favicon.png",
        category: "productivity",
        tags: ["PPT", "Google Slides", "扩展"],
        price: "免费 / $10/月",
        description: "Google Slides 的 AI 插件",
        features: ["Google 集成", "文本转 PPT", "自动设计", "多语言"],
        url: "https://slidesai.io",
        hot: false,
        chinese: false
    },
    {
        id: 180,
        name: "Plus AI",
        logo: "https://plusai.com/assets/favicon.png",
        category: "productivity",
        tags: ["PPT", "Google Slides", "专业"],
        price: "$10/月",
        description: "专业的 Google Slides AI 工具",
        features: ["专业模板", "内容生成", "重新设计", "团队协作"],
        url: "https://plusai.com",
        hot: false,
        chinese: false
    },
    {
        id: 181,
        name: "Scribe",
        logo: "https://scribehow.com/assets/favicon.png",
        category: "productivity",
        tags: ["文档", "流程", "教程"],
        price: "免费 / $15/月",
        description: "自动生成操作文档的工具",
        features: ["自动记录", "流程文档", "截图标注", "步骤说明"],
        url: "https://scribehow.com",
        hot: false,
        chinese: false
    },
    {
        id: 182,
        name: "Tango",
        logo: "https://tango.us/assets/favicon.png",
        category: "productivity",
        tags: ["文档", "教程", "流程"],
        price: "免费 / $15/月",
        description: "一键生成操作指南",
        features: ["一键生成", "图文教程", "流程文档", "团队协作"],
        url: "https://tango.us",
        hot: false,
        chinese: false
    },
    {
        id: 183,
        name: "Zapier AI",
        logo: "https://zapier.com/assets/favicon.png",
        category: "productivity",
        tags: ["自动化", "工作流", "集成"],
        price: "免费 / $20/月",
        description: "AI 驱动的工作流自动化工具",
        features: ["工作流自动化", "5000+ 应用", "AI 助手", "触发器"],
        url: "https://zapier.com",
        hot: true,
        chinese: false
    },
    {
        id: 184,
        name: "Make",
        logo: "https://make.com/assets/favicon.png",
        category: "productivity",
        tags: ["自动化", "工作流", "可视化"],
        price: "免费 / $9/月",
        description: "可视化工作流自动化平台",
        features: ["可视化编辑", "多应用集成", "条件逻辑", "定时任务"],
        url: "https://make.com",
        hot: false,
        chinese: false
    },
    {
        id: 185,
        name: "n8n",
        logo: "https://n8n.io/assets/favicon.png",
        category: "productivity",
        tags: ["自动化", "开源", "自托管"],
        price: "免费 / €20/月",
        description: "开源工作流自动化工具",
        features: ["开源免费", "自托管", "200+ 集成", "可视化"],
        url: "https://n8n.io",
        hot: false,
        chinese: false
    },
    {
        id: 186,
        name: "Bardeen",
        logo: "https://bardeen.ai/assets/favicon.png",
        category: "productivity",
        tags: ["自动化", "浏览器", "快捷"],
        price: "免费 / $10/月",
        description: "浏览器自动化助手",
        features: ["浏览器插件", "一键自动化", "网页抓取", "快捷操作"],
        url: "https://bardeen.ai",
        hot: false,
        chinese: false
    },
    {
        id: 187,
        name: "Airtable AI",
        logo: "https://airtable.com/assets/favicon.png",
        category: "productivity",
        tags: ["数据库", "表格", "AI"],
        price: "$20/用户/月",
        description: "智能数据库和表格工具",
        features: ["AI 字段", "数据分类", "智能视图", "自动化"],
        url: "https://airtable.com",
        hot: false,
        chinese: false
    },

    // 📈 数据分析 (12 个)
    {
        id: 200,
        name: "Julius AI",
        logo: "https://julius.ai/assets/favicon.png",
        category: "data",
        tags: ["数据", "分析", "可视化"],
        price: "免费 / $20/月",
        description: "AI 数据分析助手",
        features: ["数据上传", "自动分析", "图表生成", "自然语言查询"],
        url: "https://julius.ai",
        hot: true,
        chinese: false
    },
    {
        id: 201,
        name: "Consensus",
        logo: "https://consensus.app/assets/favicon.png",
        category: "data",
        tags: ["研究", "论文", "搜索"],
        price: "免费 / $20/月",
        description: "AI 学术研究搜索引擎",
        features: ["论文搜索", "结论提取", "引用分析", "研究总结"],
        url: "https://consensus.app",
        hot: true,
        chinese: false
    },
    {
        id: 202,
        name: "Elicit",
        logo: "https://elicit.org/assets/favicon.png",
        category: "data",
        tags: ["研究", "论文", "AI"],
        price: "免费 / $10/月",
        description: "AI 研究助手，帮助文献综述",
        features: ["文献搜索", "摘要提取", "观点对比", "引用管理"],
        url: "https://elicit.org",
        hot: false,
        chinese: false
    },
    {
        id: 203,
        name: "Scite",
        logo: "https://scite.ai/assets/favicon.png",
        category: "data",
        tags: ["研究", "引用", "验证"],
        price: "$5/月",
        description: "智能引用分析工具",
        features: ["引用分析", "支持/反驳", "文献验证", "研究趋势"],
        url: "https://scite.ai",
        hot: false,
        chinese: false
    },
    {
        id: 204,
        name: "ResearchRabbit",
        logo: "https://researchrabbit.ai/assets/favicon.png",
        category: "data",
        tags: ["研究", "文献", "可视化"],
        price: "免费",
        description: "文献发现和可视化工具",
        features: ["文献地图", "引用网络", "推荐系统", "协作功能"],
        url: "https://researchrabbit.ai",
        hot: false,
        chinese: false
    },
    {
        id: 205,
        name: "ChatPDF",
        logo: "https://chatpdf.com/assets/favicon.png",
        category: "data",
        tags: ["PDF", "文档", "问答"],
        price: "免费 / $5/月",
        description: "和 PDF 文档对话的 AI 工具",
        features: ["PDF 上传", "智能问答", "摘要生成", "多文档"],
        url: "https://chatpdf.com",
        hot: true,
        chinese: false
    },
    {
        id: 206,
        name: "Humata",
        logo: "https://humata.ai/assets/favicon.png",
        category: "data",
        tags: ["PDF", "文档", "企业"],
        price: "免费 / $10/月",
        description: "企业级文档 AI 助手",
        features: ["长文档", "智能问答", "引用标注", "团队协作"],
        url: "https://humata.ai",
        hot: false,
        chinese: false
    },
    {
        id: 207,
        name: "AskYourPDF",
        logo: "https://askyourpdf.com/assets/favicon.png",
        category: "data",
        tags: ["PDF", "问答", "免费"],
        price: "免费 / $10/月",
        description: "免费的 PDF 问答工具",
        features: ["PDF 上传", "智能问答", "免费使用", "多格式"],
        url: "https://askyourpdf.com",
        hot: false,
        chinese: false
    },
    {
        id: 208,
        name: "Tableau AI",
        logo: "https://tableau.com/assets/favicon.png",
        category: "data",
        tags: ["数据", "可视化", "企业"],
        price: "$70/用户/月",
        description: "企业级数据可视化和 AI 分析",
        features: ["数据可视化", "AI 洞察", "预测分析", "仪表板"],
        url: "https://tableau.com",
        hot: false,
        chinese: false
    },
    {
        id: 209,
        name: "Power BI AI",
        logo: "https://powerbi.microsoft.com/assets/favicon.png",
        category: "data",
        tags: ["数据", "微软", "BI"],
        price: "$10/用户/月",
        description: "微软的商业智能和 AI 分析工具",
        features: ["数据建模", "AI 洞察", "自然语言", "Office 集成"],
        url: "https://powerbi.microsoft.com",
        hot: false,
        chinese: false
    },
    {
        id: 210,
        name: "Akkio",
        logo: "https://akkio.com/assets/favicon.png",
        category: "data",
        tags: ["数据", "预测", "无代码"],
        price: "$49/月",
        description: "无代码 AI 预测分析平台",
        features: ["无代码", "预测模型", "数据准备", "部署简单"],
        url: "https://akkio.com",
        hot: false,
        chinese: false
    },
    {
        id: 211,
        name: "Obviously AI",
        logo: "https://obviously.ai/assets/favicon.png",
        category: "data",
        tags: ["数据", "预测", "快速"],
        price: "$99/月",
        description: "5 分钟构建 AI 预测模型",
        features: ["快速建模", "无代码", "预测分析", "自动 ML"],
        url: "https://obviously.ai",
        hot: false,
        chinese: false
    }
];

// 当前状态
let currentCategory = 'all';
let favorites = JSON.parse(localStorage.getItem('aiToolsFavorites') || '[]');
let viewMode = 'grid'; // grid 或 list
let sortBy = 'default'; // default, hot, free, name

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderTools(aiTools);
    setupCategoryFilters();
    setupSearch();
    setupViewToggle();
    setupSort();
    renderFavorites();
    renderStats();
});

// 渲染工具卡片
function renderTools(tools) {
    const grid = document.getElementById('toolsGrid');
    if (!grid) return;
    
    // 更新结果计数
    const countEl = document.getElementById('resultsCount');
    if (countEl) {
        countEl.textContent = `${tools.length} 个工具`;
    }
    
    grid.innerHTML = tools.map(tool => {
        const isFavorite = favorites.includes(tool.id);
        return `
        <div class="tool-card" data-id="${tool.id}" onclick="showToolDetail(${tool.id})">
            <div class="tool-header">
                <div class="tool-logo">
                    <img src="${tool.logo}" alt="${tool.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23f5f5f7%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%2386868b%22>${tool.name.charAt(0)}</text></svg>'">
                </div>
                <div class="tool-info">
                    <h3>${tool.name} ${tool.hot ? '<span class="hot-badge">🔥 热门</span>' : ''} ${tool.chinese ? '<span class="china-badge">🇨🇳 国内</span>' : ''}</h3>
                    <div class="tool-tags-inline">
                        ${tool.tags.slice(0, 3).map(t => `<span class="mini-tag">${t}</span>`).join('')}
                    </div>
                </div>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${tool.id})">
                    ${isFavorite ? '❤️' : '🤍'}
                </button>
            </div>
            <p>${tool.description}</p>
            <div class="tool-footer">
                <span class="tool-price">${tool.price}</span>
                <span class="tool-link">→</span>
            </div>
        </div>
    `}).join('');
}

// 渲染收藏
function renderFavorites() {
    const container = document.getElementById('favoritesList');
    if (!container) return;
    
    const favoriteTools = aiTools.filter(t => favorites.includes(t.id));
    if (favoriteTools.length === 0) {
        container.innerHTML = '<p class="empty-favorites">还没有收藏工具</p>';
    } else {
        container.innerHTML = favoriteTools.map(tool => `
            <div class="favorite-item" onclick="showToolDetail(${tool.id})">
                <span class="favorite-icon">${tool.logo ? `<img src="${tool.logo}" alt="${tool.name}">` : tool.name.charAt(0)}</span>
                <span class="favorite-name">${tool.name}</span>
                <button class="remove-favorite" onclick="event.stopPropagation(); toggleFavorite(${tool.id})">✕</button>
            </div>
        `).join('');
    }
}

// 渲染统计
function renderStats() {
    const statsContainer = document.getElementById('siteStats');
    if (!statsContainer) return;
    
    const totalTools = aiTools.length;
    const hotTools = aiTools.filter(t => t.hot).length;
    const freeTools = aiTools.filter(t => t.price.includes('免费')).length;
    const chineseTools = aiTools.filter(t => t.chinese).length;
    
    statsContainer.innerHTML = `
        <div class="stat-item">
            <span class="stat-number">${totalTools}+</span>
            <span class="stat-label">AI 工具</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">${hotTools}</span>
            <span class="stat-label">热门</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">${freeTools}</span>
            <span class="stat-label">免费</span>
        </div>
        <div class="stat-item">
            <span class="stat-number">${chineseTools}</span>
            <span class="stat-label">国内</span>
        </div>
    `;
}

// 设置分类筛选
function setupCategoryFilters() {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            currentCategory = category;
            
            filterAndSort();
        });
    });
}

// 设置搜索
function setupSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchTools();
    });
    
    input.addEventListener('input', () => {
        debounceSearch();
    });
}

// 设置视图切换
function setupViewToggle() {
    const toggle = document.getElementById('viewToggle');
    if (!toggle) return;
    
    toggle.addEventListener('click', () => {
        viewMode = viewMode === 'grid' ? 'list' : 'grid';
        const grid = document.getElementById('toolsGrid');
        if (grid) {
            grid.className = `tools-grid tools-${viewMode}`;
        }
        toggle.textContent = viewMode === 'grid' ? '⊞' : '☰';
    });
}

// 设置排序
function setupSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;
    
    sortSelect.addEventListener('change', (e) => {
        sortBy = e.target.value;
        filterAndSort();
    });
}

// 筛选和排序
function filterAndSort() {
    let filtered = aiTools;
    
    // 分类筛选
    if (currentCategory !== 'all') {
        filtered = filtered.filter(t => t.category === currentCategory);
    }
    
    // 搜索筛选
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value.trim()) {
        const query = searchInput.value.toLowerCase().trim();
        filtered = filtered.filter(tool => 
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query) ||
            tool.tags.some(tag => tag.toLowerCase().includes(query))
        );
    }
    
    // 排序
    if (sortBy === 'hot') {
        filtered = filtered.sort((a, b) => (b.hot ? 1 : 0) - (a.hot ? 1 : 0));
    } else if (sortBy === 'free') {
        filtered = filtered.sort((a, b) => (a.price.includes('免费') ? -1 : 1));
    } else if (sortBy === 'name') {
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
    }
    
    renderTools(filtered);
}

// 搜索防抖
let searchTimeout;
function debounceSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(filterAndSort, 300);
}

// 搜索工具
function searchTools() {
    filterAndSort();
}

// 显示工具详情
function showToolDetail(toolId) {
    const tool = aiTools.find(t => t.id === toolId);
    if (!tool) return;
    
    const modal = document.getElementById('toolModal');
    const detail = document.getElementById('toolDetail');
    if (!modal || !detail) return;
    
    const isFavorite = favorites.includes(toolId);
    
    detail.innerHTML = `
        <div class="tool-detail-header">
            <div class="tool-detail-logo">
                <img src="${tool.logo}" alt="${tool.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23f5f5f7%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%2386868b%22>${tool.name.charAt(0)}</text></svg>'">
            </div>
            <div class="tool-detail-info">
                <h2>${tool.name} ${tool.hot ? '<span class="hot-badge">🔥 热门</span>' : ''} ${tool.chinese ? '<span class="china-badge">🇨🇳 国内</span>' : ''}</h2>
                <div class="tool-detail-tags">
                    <span class="tag">${getCategoryName(tool.category)}</span>
                    ${tool.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </div>
        </div>
        
        <p class="tool-detail-description">${tool.description}</p>
        
        <div class="tool-detail-features">
            <h3>主要功能</h3>
            <ul>
                ${tool.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        
        <div class="tool-detail-price">
            <h3>价格</h3>
            <p class="price-text">${tool.price}</p>
        </div>
        
        <div class="tool-detail-footer">
            <a href="${tool.url}" target="_blank" rel="noopener" class="visit-btn">🚀 访问官网</a>
            <button class="favorite-btn-large ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${toolId})">
                ${isFavorite ? '❤️ 已收藏' : '🤍 收藏'}
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('toolModal');
    if (modal) modal.classList.remove('active');
}

// 切换收藏
function toggleFavorite(toolId) {
    const index = favorites.indexOf(toolId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(toolId);
    }
    localStorage.setItem('aiToolsFavorites', JSON.stringify(favorites));
    
    // 重新渲染
    filterAndSort();
    renderFavorites();
    
    // 如果模态框打开，更新按钮状态
    const modal = document.getElementById('toolModal');
    if (modal && modal.classList.contains('active')) {
        const btn = document.querySelector('.favorite-btn-large');
        if (btn) {
            const isFavorite = favorites.includes(toolId);
            btn.className = `favorite-btn-large ${isFavorite ? 'active' : ''}`;
            btn.textContent = isFavorite ? '❤️ 已收藏' : '🤍 收藏';
        }
    }
}

// 获取分类名称
function getCategoryName(category) {
    const names = {
        chat: '💬 对话',
        image: '🎨 图像',
        writing: '✍️ 写作',
        video: '🎬 视频',
        code: '💻 编程',
        audio: '🎵 音频',
        productivity: '📊 办公',
        data: '📈 数据'
    };
    return names[category] || category;
}

// 点击模态框外部关闭
document.addEventListener('click', (e) => {
    const modal = document.getElementById('toolModal');
    if (modal && e.target === modal) {
        closeModal();
    }
});

// ESC 键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
