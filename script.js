// AI 工具数据库
const aiTools = [
    // 💬 对话聊天
    {
        id: 1,
        name: "ChatGPT",
        icon: "💬",
        category: "chat",
        tags: ["对话", "问答", "写作"],
        price: "免费 / $20/月",
        description: "OpenAI 开发的 AI 对话助手，能回答问题、写作、编程等",
        features: ["自然对话", "多语言支持", "代码生成", "文案写作"],
        url: "https://chat.openai.com"
    },
    {
        id: 2,
        name: "Claude",
        icon: "🤖",
        category: "chat",
        tags: ["对话", "长文本", "分析"],
        price: "免费 / $20/月",
        description: "Anthropic 开发的 AI 助手，擅长长文本处理和分析",
        features: ["200K 上下文", "文档分析", "代码能力", "安全性高"],
        url: "https://claude.ai"
    },
    {
        id: 3,
        name: "文心一言",
        icon: "🇨🇳",
        category: "chat",
        tags: ["对话", "中文", "百度"],
        price: "免费",
        description: "百度开发的大语言模型，中文理解能力强",
        features: ["中文优化", "知识问答", "文案创作", "图片理解"],
        url: "https://yiyan.baidu.com"
    },
    {
        id: 4,
        name: "通义千问",
        icon: "👆",
        category: "chat",
        tags: ["对话", "阿里", "多模态"],
        price: "免费",
        description: "阿里巴巴开发的 AI 大模型，支持多模态理解",
        features: ["对话理解", "代码生成", "图片分析", "文档处理"],
        url: "https://tongyi.aliyun.com"
    },
    {
        id: 5,
        name: "Kimi",
        icon: "🌙",
        category: "chat",
        tags: ["对话", "长文本", "月之暗面"],
        price: "免费",
        description: "月之暗面开发的 AI 助手，支持超长上下文",
        features: ["200 万上下文", "文件上传", "联网搜索", "多轮对话"],
        url: "https://kimi.moonshot.cn"
    },

    // 🎨 图像绘画
    {
        id: 10,
        name: "Midjourney",
        icon: "🎨",
        category: "image",
        tags: ["绘画", "艺术", "高质量"],
        price: "$10/月起",
        description: "最流行的 AI 绘画工具，艺术风格独特",
        features: ["高质量图像", "艺术风格", "Discord 使用", "社区活跃"],
        url: "https://midjourney.com"
    },
    {
        id: 11,
        name: "Stable Diffusion",
        icon: "🖼️",
        category: "image",
        tags: ["绘画", "开源", "本地部署"],
        price: "免费",
        description: "开源 AI 绘画模型，可本地部署",
        features: ["完全免费", "可本地运行", "插件丰富", "可控性强"],
        url: "https://stability.ai"
    },
    {
        id: 12,
        name: "DALL-E 3",
        icon: "🎭",
        category: "image",
        tags: ["绘画", "OpenAI", "精准"],
        price: "通过 ChatGPT Plus",
        description: "OpenAI 的图像生成模型，理解能力强",
        features: ["精准理解", "文字渲染", "集成 ChatGPT", "安全性高"],
        url: "https://openai.com/dall-e-3"
    },
    {
        id: 13,
        name: "Leonardo AI",
        icon: "🦎",
        category: "image",
        tags: ["绘画", "游戏", "设计"],
        price: "免费 / $10/月",
        description: "专注于游戏资产和设计的 AI 绘画工具",
        features: ["游戏素材", "3D 模型", "纹理生成", "免费额度"],
        url: "https://leonardo.ai"
    },
    {
        id: 14,
        name: "Canva AI",
        icon: "🎨",
        category: "image",
        tags: ["设计", "模板", "易用"],
        price: "免费 / $12/月",
        description: "在线设计工具的 AI 功能，模板丰富",
        features: ["AI 绘图", "模板库", "一键设计", "团队协作"],
        url: "https://canva.com"
    },

    // ✍️ 写作创作
    {
        id: 20,
        name: "Jasper",
        icon: "✍️",
        category: "writing",
        tags: ["写作", "营销", "专业"],
        price: "$49/月",
        description: "专业 AI 写作助手，适合营销内容创作",
        features: ["营销文案", "品牌声音", "SEO 优化", "团队协作"],
        url: "https://jasper.ai"
    },
    {
        id: 21,
        name: "Notion AI",
        icon: "📝",
        category: "writing",
        tags: ["写作", "笔记", "整理"],
        price: "$10/月",
        description: "Notion 内置的 AI 写作助手",
        features: ["笔记整理", "文章润色", "摘要生成", "任务管理"],
        url: "https://notion.so"
    },
    {
        id: 22,
        name: "Grammarly",
        icon: "✅",
        category: "writing",
        tags: ["写作", "校对", "英语"],
        price: "免费 / $12/月",
        description: "AI 语法检查和写作改进工具",
        features: ["语法检查", "拼写纠正", "风格建议", "抄袭检测"],
        url: "https://grammarly.com"
    },
    {
        id: 23,
        name: "Copy.ai",
        icon: "📋",
        category: "writing",
        tags: ["写作", "营销", "社交媒体"],
        price: "免费 / $36/月",
        description: "专注于营销文案的 AI 写作工具",
        features: ["社交媒体", "广告文案", "产品描述", "邮件营销"],
        url: "https://copy.ai"
    },

    // 🎬 视频处理
    {
        id: 30,
        name: "Runway",
        icon: "🎬",
        category: "video",
        tags: ["视频", "编辑", "生成"],
        price: "免费 / $15/月",
        description: "AI 视频编辑和生成工具",
        features: ["视频生成", "智能剪辑", "绿幕抠图", "运动追踪"],
        url: "https://runwayml.com"
    },
    {
        id: 31,
        name: "Sora",
        icon: "🎥",
        category: "video",
        tags: ["视频", "生成", "OpenAI"],
        price: "未公开",
        description: "OpenAI 的视频生成模型，文字生成视频",
        features: ["文字转视频", "高质量", "长视频", "物理模拟"],
        url: "https://openai.com/sora"
    },
    {
        id: 32,
        name: "Descript",
        icon: "📹",
        category: "video",
        tags: ["视频", "编辑", "转录"],
        price: "免费 / $15/月",
        description: "像编辑文档一样编辑视频",
        features: ["文字编辑视频", "自动转录", "配音克隆", "屏幕录制"],
        url: "https://descript.com"
    },
    {
        id: 33,
        name: "HeyGen",
        icon: "👤",
        category: "video",
        tags: ["视频", "数字人", "口播"],
        price: "免费 / $29/月",
        description: "AI 数字人视频生成工具",
        features: ["数字人播报", "多语言", "口型同步", "模板丰富"],
        url: "https://heygen.com"
    },

    // 💻 编程开发
    {
        id: 40,
        name: "GitHub Copilot",
        icon: "🤖",
        category: "code",
        tags: ["编程", "代码", "GitHub"],
        price: "$10/月",
        description: "GitHub 的 AI 编程助手，自动补全代码",
        features: ["代码补全", "多语言支持", "IDE 集成", "测试生成"],
        url: "https://github.com/features/copilot"
    },
    {
        id: 41,
        name: "Cursor",
        icon: "💻",
        category: "code",
        tags: ["编程", "IDE", "AI"],
        price: "免费 / $20/月",
        description: "AI 优先的代码编辑器",
        features: ["AI 对话编程", "代码生成", "智能重构", "Bug 修复"],
        url: "https://cursor.sh"
    },
    {
        id: 42,
        name: "Replit AI",
        icon: "🔧",
        category: "code",
        tags: ["编程", "在线 IDE", "学习"],
        price: "免费 / $20/月",
        description: "在线 IDE 的 AI 编程助手",
        features: ["在线编程", "AI 助手", "项目托管", "协作开发"],
        url: "https://replit.com"
    },
    {
        id: 43,
        name: "Codeium",
        icon: "⚡",
        category: "code",
        tags: ["编程", "免费", "补全"],
        price: "免费",
        description: "免费的 AI 代码补全工具",
        features: ["免费使用", "快速补全", "多 IDE 支持", "聊天功能"],
        url: "https://codeium.com"
    },

    // 🎵 音频音乐
    {
        id: 50,
        name: "Suno AI",
        icon: "🎵",
        category: "audio",
        tags: ["音乐", "生成", "歌曲"],
        price: "免费 / $10/月",
        description: "AI 音乐生成工具，文字生成完整歌曲",
        features: ["完整歌曲", "人声生成", "多种风格", "歌词创作"],
        url: "https://suno.ai"
    },
    {
        id: 51,
        name: "ElevenLabs",
        icon: "🗣️",
        category: "audio",
        tags: ["语音", "TTS", "克隆"],
        price: "免费 / $5/月",
        description: "AI 语音合成和声音克隆工具",
        features: ["逼真语音", "声音克隆", "多语言", "情感表达"],
        url: "https://elevenlabs.io"
    },
    {
        id: 52,
        name: "Udio",
        icon: "🎶",
        category: "audio",
        tags: ["音乐", "生成", "高质量"],
        price: "免费",
        description: "高质量 AI 音乐生成工具",
        features: ["高音质", "多种风格", "快速生成", "免费使用"],
        url: "https://udio.com"
    },

    // 📊 办公效率
    {
        id: 60,
        name: "Microsoft 365 Copilot",
        icon: "📎",
        category: "productivity",
        tags: ["办公", "Office", "微软"],
        price: "$30/月",
        description: "微软 Office 的 AI 助手",
        features: ["Word 写作", "PPT 生成", "Excel 分析", "Outlook 邮件"],
        url: "https://microsoft.com/copilot"
    },
    {
        id: 61,
        name: "Gamma",
        icon: "📊",
        category: "productivity",
        tags: ["PPT", "演示", "生成"],
        price: "免费 / $10/月",
        description: "AI 生成演示文稿和文档",
        features: ["PPT 生成", "文档创建", "网页制作", "模板丰富"],
        url: "https://gamma.app"
    },
    {
        id: 62,
        name: "Beautiful.ai",
        icon: "✨",
        category: "productivity",
        tags: ["PPT", "设计", "自动化"],
        price: "$12/月",
        description: "智能 PPT 设计工具",
        features: ["自动排版", "智能模板", "品牌一致性", "团队协作"],
        url: "https://beautiful.ai"
    },
    {
        id: 63,
        name: "Otter.ai",
        icon: "🎤",
        category: "productivity",
        tags: ["转录", "会议", "笔记"],
        price: "免费 / $10/月",
        description: "AI 会议转录和笔记工具",
        features: ["实时转录", "说话人识别", "关键词提取", "会议摘要"],
        url: "https://otter.ai"
    },

    // 📈 数据分析
    {
        id: 70,
        name: "Julius AI",
        icon: "📊",
        category: "data",
        tags: ["数据", "分析", "可视化"],
        price: "免费 / $20/月",
        description: "AI 数据分析助手",
        features: ["数据上传", "自动分析", "图表生成", "自然语言查询"],
        url: "https://julius.ai"
    },
    {
        id: 71,
        name: "Consensus",
        icon: "🔬",
        category: "data",
        tags: ["研究", "论文", "搜索"],
        price: "免费 / $20/月",
        description: "AI 学术研究搜索引擎",
        features: ["论文搜索", "结论提取", "引用分析", "研究总结"],
        url: "https://consensus.app"
    },
    {
        id: 72,
        name: "Perplexity",
        icon: "🔍",
        category: "data",
        tags: ["搜索", "研究", "引用"],
        price: "免费 / $20/月",
        description: "AI 搜索引擎，提供带引用的答案",
        features: ["实时搜索", "引用来源", "多模型选择", "专业搜索"],
        url: "https://perplexity.ai"
    }
];

// 当前筛选类别
let currentCategory = 'all';

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderTools(aiTools);
    setupCategoryFilters();
    setupSearch();
});

// 渲染工具卡片
function renderTools(tools) {
    const grid = document.getElementById('toolsGrid');
    grid.innerHTML = tools.map(tool => `
        <div class="tool-card" onclick="showToolDetail(${tool.id})">
            <div class="tool-header">
                <div class="tool-icon">${tool.icon}</div>
                <div class="tool-info">
                    <h3>${tool.name}</h3>
                    <span class="tag">${getCategoryName(tool.category)}</span>
                </div>
            </div>
            <p>${tool.description}</p>
            <div class="tool-footer">
                <span class="tool-price">${tool.price}</span>
                <span class="tool-link">查看详情 →</span>
            </div>
        </div>
    `).join('');
}

// 获取分类名称
function getCategoryName(category) {
    const names = {
        chat: '💬 对话聊天',
        image: '🎨 图像绘画',
        writing: '✍️ 写作创作',
        video: '🎬 视频处理',
        code: '💻 编程开发',
        audio: '🎵 音频音乐',
        productivity: '📊 办公效率',
        data: '📈 数据分析'
    };
    return names[category] || category;
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
            
            if (category === 'all') {
                renderTools(aiTools);
            } else {
                const filtered = aiTools.filter(t => t.category === category);
                renderTools(filtered);
            }
        });
    });
}

// 设置搜索
function setupSearch() {
    const input = document.getElementById('searchInput');
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchTools();
    });
}

// 搜索工具
function searchTools() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!query) {
        renderTools(currentCategory === 'all' ? aiTools : aiTools.filter(t => t.category === currentCategory));
        return;
    }
    
    const filtered = aiTools.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query)) ||
        getCategoryName(tool.category).toLowerCase().includes(query)
    );
    
    renderTools(filtered);
    
    // 切换到全部类别
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
    currentCategory = 'all';
}

// 显示工具详情
function showToolDetail(toolId) {
    const tool = aiTools.find(t => t.id === toolId);
    if (!tool) return;
    
    const modal = document.getElementById('toolModal');
    const detail = document.getElementById('toolDetail');
    
    detail.innerHTML = `
        <div class="tool-detail-header">
            <div class="tool-detail-icon">${tool.icon}</div>
            <div class="tool-detail-info">
                <h2>${tool.name}</h2>
                <div class="tool-detail-tags">
                    <span class="tag">${getCategoryName(tool.category)}</span>
                    ${tool.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </div>
        </div>
        
        <p class="tool-detail-description">${tool.description}</p>
        
        <div class="tool-detail-features">
            <h3>✨ 主要功能</h3>
            <ul>
                ${tool.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        
        <div class="tool-detail-features">
            <h3>💰 价格</h3>
            <p style="color: var(--accent-color); font-size: 1.2rem; font-weight: 600;">${tool.price}</p>
        </div>
        
        <div class="tool-detail-footer">
            <a href="${tool.url}" target="_blank" class="visit-btn">🚀 访问官网</a>
        </div>
    `;
    
    modal.classList.add('active');
}

// 关闭模态框
function closeModal() {
    document.getElementById('toolModal').classList.remove('active');
}

// 点击模态框外部关闭
document.getElementById('toolModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'toolModal') closeModal();
});

// ESC 键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
