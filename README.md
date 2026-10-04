# SHUtoECNU 的个人主页

浅紫色单页个人主页，参考 ukashi0.github.io 的结构与视觉方向重新实现。页面内容目前使用方括号字段占位，不代表真实个人履历。

## 本地查看

直接打开 `index.html` 即可查看，也可在这个文件夹启动静态服务器：

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

然后打开 http://127.0.0.1:4173。

## 补充资料

所有个人内容都在 `index.html` 中。搜索方括号中的字段名，替换为真实内容即可。同一字段在首屏、个人信息卡和正文中可能出现多次，补充时请同步修改。

| 栏目 | 待补充内容 |
| --- | --- |
| 首屏 | 展示名称、一句话介绍、个人简介、身份、技术方向、学校、城市 |
| 关于我 | 个人介绍、研究兴趣、职业方向、爱好、当前状态 |
| 能力栈 | 编程语言、框架、研究应用方向、开发工具 |
| 项目 | 名称、简介、职责、成果、技术栈、项目链接 |
| 经历 | 学校、专业、学位、公司、岗位、起止时间、职责与成果 |
| 联系方式 | 公开邮箱、所在城市 |

`[项目链接]` 目前是普通文字。获得真实链接后将该处的 `<span class="placeholder-link">[项目链接]</span>` 改为 `<a href="真实链接" target="_blank" rel="noopener noreferrer">查看项目</a>`。邮箱也应在填入真实地址后添加 `mailto:` 链接。GitHub 链接已经可用。

头像现在是字母 S 的占位图形。若替换为照片，将图片放入网站目录并用 `<img>` 替换 `.avatar-placeholder`，设置合适尺寸及 `alt` 文本。

## 发布到 GitHub Pages

1. 登录 SHUtoECNU，在 GitHub 新建公开仓库 `SHUtoECNU.github.io`；若该仓库已存在，先检查其原有内容。
2. 将本文件夹中的文件提交到仓库 `main` 分支。`index.html` 必须位于仓库根目录。
3. 可以选择以下任意一种发布方式：
   - **网页上传最简单：** 上传 `index.html`、`style.css`、`script.js`、`favicon.svg`，进入仓库 Settings → Pages，选择 Deploy from a branch，选择 `main` 和 `/ (root)` 并保存。
   - **自动发布：** 保留 `.github/workflows/pages.yml`，在 Settings → Pages 中将 Source 设置为 GitHub Actions。后续每次推送到 `main` 都会自动发布。
4. 发布成功后访问 https://shutoecnu.github.io/。

不需要额外购买域名或安装依赖。首次发布可能需要几分钟。

## 文件

- `index.html`：页面结构和个人内容。
- `style.css`：浅紫主题、布局、手机适配。
- `script.js`：手机导航、滚动显示、导航高亮、页脚年份。
- `favicon.svg`：网站图标。
- `.github/workflows/pages.yml`：可选的 GitHub Pages 自动发布配置。

页面可离线浏览，没有外部字体、追踪脚本或后端服务。未知的项目链接和邮箱均保留为普通文字。
