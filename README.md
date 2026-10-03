# ZJZJ 学习空间 · 汇总仓库

网站：https://blog.zjzj.work/

| 项目 | 网站入口 | 独立仓库 |
| --- | --- | --- |
| ICS | https://blog.zjzj.work/ics/ | https://github.com/zjzj1206/ics-review |
| 离散数学与结构 (I) | https://blog.zjzj.work/discrete/ | https://github.com/zjzj1206/discrete-review |
| 高党 | https://blog.zjzj.work/gaodang/ | https://github.com/zjzj1206/gaodang-review （私人） |

根目录仅维护总览。ICS 章节 HTML 已从根目录清理，正式版本在 `ics/`。

## 部署

正式网站使用 Cloudflare Pages 项目 `zjzj-study-hub`，支持高党服务端密码验证。GitHub 仓库提交不会自动更新 Cloudflare；由本地整合发布产物后直接上传。域名 blog.zjzj.work 指向 zjzj-study-hub.pages.dev。

公开仓库只保存总览、公开 ICS 与离散数学内容。高党复习内容、题库和原件保留在私人独立仓库；受密码验证保护的完整部署不上传本公开仓库。访问密码不写入仓库。此前撤下的密文仍可能存在于 Git 历史。

更新独立项目后，在私人项目运行 `python3 server/build.py` 生成完整部署包，再上传 Cloudflare。运行设置必须保持 Fail closed；部署前后验证未认证资料请求返回 401。
