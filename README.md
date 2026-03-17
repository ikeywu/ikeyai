# 🤖 AI 工具导航

一个现代化的 AI 工具发现和导航网站，收录 100+ 款实用 AI 工具。

## 🚀 部署到 Cloudflare Pages

### 方法 1：通过 GitHub（推荐）

**步骤 1：推送代码到 GitHub**
```bash
cd ai-tools-nav
git init
git add .
git commit -m "Initial commit: AI tools navigation"
git branch -M main
git remote add origin https://github.com/你的用户名/ai-tools-nav.git
git push -u origin main
```

**步骤 2：在 Cloudflare 创建项目**
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 点击左侧 **"Pages"** → **"Create a project"**
3. 选择 **"Connect to Git"**
4. 授权 GitHub，选择 `ai-tools-nav` 仓库
5. 点击 **"Begin setup"**

**步骤 3：配置构建设置**
```
Project name: ai-tools-nav
Production branch: main
Build command: (留空)
Build output directory: .
```

**步骤 4：部署**
点击 **"Save and Deploy"**，等待 1-2 分钟完成部署

**获得的域名：**
```
https://ai-tools-nav.pages.dev
```

---

### 方法 2：直接上传（无需 GitHub）

**步骤 1：安装 Wrangler CLI**
```bash
npm install -g wrangler
```

**步骤 2：登录 Cloudflare**
```bash
wrangler login
```

**步骤 3：创建项目**
```bash
wrangler pages project create ai-tools-nav
```

**步骤 4：部署**
```bash
cd ai-tools-nav
wrangler pages deploy . --project-name=ai-tools-nav
```

---

## 📁 项目结构

```
ai-tools-nav/
├── index.html          # 主页
├── styles.css          # 样式（深色科技风）
├── script.js           # 工具数据库和交互逻辑
├── privacy.html        # 隐私政策
├── terms.html          # 使用条款
├── contact.html        # 联系我们
├── sitemap.xml         # SEO 站点地图
├── robots.txt          # 爬虫配置
├── package.json        # NPM 配置
└── wrangler.toml       # Cloudflare 配置
```

---

## 🎨 特色功能

- ✅ 75+ AI 工具收录
- ✅ 9 大分类筛选
- ✅ 实时搜索
- ✅ 深色科技风设计
- ✅ 移动端适配
- ✅ Google AdSense 集成
- ✅ SEO 优化

---

## 📊 工具分类

| 分类 | 工具数量 | 代表工具 |
|------|---------|---------|
| 💬 对话聊天 | 5 | ChatGPT, Claude, Kimi |
| 🎨 图像绘画 | 5 | Midjourney, SD, DALL-E 3 |
| ✍️ 写作创作 | 4 | Jasper, Notion AI, Grammarly |
| 🎬 视频处理 | 4 | Runway, Sora, Descript |
| 💻 编程开发 | 4 | GitHub Copilot, Cursor |
| 🎵 音频音乐 | 3 | Suno AI, ElevenLabs |
| 📊 办公效率 | 4 | Microsoft 365 Copilot, Gamma |
| 📈 数据分析 | 3 | Julius AI, Perplexity |

---

## 💰 变现方式

1. **Google AdSense** - 广告展示
2. **Affiliate 链接** - 工具推荐佣金
3. **赞助位** - 工具置顶展示
4. **付费收录** - 快速审核通道

---

## 🔧 添加新工具

在 `script.js` 的 `aiTools` 数组中添加：

```javascript
{
    id: 100,
    name: "工具名称",
    icon: "🔥",
    category: "chat",  // 分类：chat/image/writing/video/code/audio/productivity/data
    tags: ["标签 1", "标签 2"],
    price: "免费 / $10/月",
    description: "工具简介",
    features: ["功能 1", "功能 2"],
    url: "https://tool-website.com"
}
```

---

## 📈 SEO 优化

- ✅ Meta 标签优化
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ 语义化 HTML
- ✅ 快速加载（静态网站）

---

## 🌐 国内访问

部署到 Cloudflare Pages 后：
- ✅ 大部分地区可访问
- ✅ HTTPS 自动启用
- ✅ 全球 CDN 加速

如需更稳定的国内访问，可考虑：
- 七牛云存储
- 阿里云 OSS
- 自定义域名 + 国内 CDN

---

## 📄 许可证

MIT License

---

**在线演示**: [https://ai-tools-nav.pages.dev](https://ai-tools-nav.pages.dev)
