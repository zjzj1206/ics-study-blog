# ICS 2026 复习博客

网站： https://blog.zjzj.work

GitHub： https://github.com/zjzj1206/ics-study-blog

15 个章节，课程主线、旧期中扩展、往年题导航、勘误、小班补充及逐页覆盖索引。当前课件到第 7 讲，第 8 讲采用教材与 2025 阶段卷补充。边界在首页和来源章节明确说明。

## 本地编辑与构建

```sh
python3 -m pip install -r requirements.txt
python3 build.py
python3 checks/verify.py
python3 -m http.server 8765 --directory dist
```

修改 `content/*.md` 后运行构建。`dist/` 是唯一网站发布产物；`复习资料汇总.md` 可离线阅读；`all.html` 可浏览器打印。CSS 和 JS 为本地文件，没有第三方 CDN、分析追踪或后端服务。

## 发布方式

GitHub Pages 使用 main 分支根目录，上传 dist 的内容（不是 dist 目录本身）。仓库内 source.zip 包含 Markdown、生成器和检查脚本，方便下载维护；不包含原教材/课件/试卷。

自定义域名：blog.zjzj.work。权威 DNS 实际为 Cloudflare；CNAME 主机 blog 指向 zjzj1206.github.io。阿里云 DNS 面板不是当前生效的区域。GitHub Pages 设置中配置自定义域名后再添加 DNS，并在证书就绪后开启 Enforce HTTPS。

原始参考资料仅保留在本地项目研究目录，不上传。历史题细读程度与未覆盖项见网站第 12、14 章。
