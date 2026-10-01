# ZJZJ 学习空间 · 汇总仓库

网站：https://blog.zjzj.work/

| 项目 | 网站入口 | 独立仓库 |
| --- | --- | --- |
| ICS | https://blog.zjzj.work/ics/ | https://github.com/zjzj1206/ics-review |
| 高党 | https://blog.zjzj.work/gaodang/ | https://github.com/zjzj1206/gaodang-review （私人） |

本仓库维护总览首页和各项目的发布快照。项目正文和构建代码分别在独立仓库维护。`ics/`、`gaodang/` 使用相对资源路径，挂在同一个域名下。GitHub Pages 发布 main 分支根目录，CNAME 仅保留在本仓库根目录。

## 更新方式

1. 在项目独立仓库更新并验证。
2. 把该项目的发布产物同步到本仓库对应子目录，再更新 projects.json 的来源版本。
3. 提交汇总仓库，GitHub Pages 自动重新发布。

高党内容目前保留在私人独立仓库，网站只显示访问配置状态页。正式访问方案确认后再上线。此前加密快照已从当前分支撤下，Git 历史仍可能保留密文；口令从未上传。

历史 ICS 根目录页面保留兼容；新的项目主页统一从 /ics/ 进入。
