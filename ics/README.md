# ICS 计算机系统复习资料

网站：https://blog.zjzj.work/ics/
独立仓库：https://github.com/zjzj1206/ics-review
汇总仓库：https://github.com/zjzj1206/study-hub

12 个阅读单元：范围说明、第 1～8 讲标准内容、范围内真题、小班补充和课件覆盖索引。不包含处理器、优化、缓存等旧期中扩展。现有课件到第 7 讲，第 8 讲按教材与 2025 阶段卷补充。

## 编辑与构建

仓库根目录是发布产物；source.zip 包含完整 Markdown、构建器、样式和检查脚本。解压 source.zip 到独立工作目录，再运行：

```sh
python3 -m pip install -r requirements.txt
python3 build.py
python3 checks/verify.py
python3 -m http.server 8765 --directory dist
```

修改 content/*.md 后重新构建。build.py 会重建 dist 并生成 source.zip 和复习资料汇总.md。表格必须包含表头分隔行；单元格中的 C 声明与表达式使用反引号，竖线即使在行内代码中也必须写成 \|。旧的 12/13/14 页面文件名保留以兼容已有链接，显示编号为 09/10/11。

## 发布与同步

将 dist 内容同步到独立仓库根目录、study-hub 的 ics/。删除旧 09-architecture.html、10-optimization.html、11-memory.html，不上传 ICS 独立 CNAME，不把章节放回学习空间根目录。

正式托管是 Cloudflare Pages 的 zjzj-study-hub；GitHub 提交不会自动更新网站。完整部署由高党项目整合，其受保护内容及服务端鉴权文件必须保留，只替换 /ics/。具体流程见该项目 gaodang-site/DEPLOYMENT.md。完整部署包只上传 Cloudflare，公开 GitHub 仅接收总览及 ICS 文件。
