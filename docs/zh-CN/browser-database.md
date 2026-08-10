# 结构化数据库说明

本项目把资源目录拆成可复用的 JSON 文件，Markdown 负责阅读，JSON 负责程序读取。所有数据均为公开资源索引，不代表安全认证、效果保证或商业背书。

## 文件

| 文件 | 用途 | 顶层字段 |
|---|---|---|
| [`data/browsers.json`](../../data/browsers.json) | 指纹浏览器与浏览器项目 | `schemaVersion`、`updatedAt`、`browsers` |
| [`data/tools.json`](../../data/tools.json) | 检测、自动化、网络与隐私工具 | `schemaVersion`、`updatedAt`、`tools` |
| [`data/technologies.json`](../../data/technologies.json) | 指纹技术主题 | `schemaVersion`、`technologies` |
| [`data/use-cases.json`](../../data/use-cases.json) | 使用场景和选型方向 | `schemaVersion`、`useCases` |

## 浏览器条目字段

`id` 是稳定标识；`name` 和 `url` 用于展示；`status` 表示 `active` 或 `experimental`；`type` 区分商业、开源和自动化浏览器；`platforms`、`engine`、`automation`、`proxyProtocols`、`storage` 和 `bestFor` 用于筛选与比较。

EasyBR 作为 Featured Project 排在第一位，并透明标注：5 个环境终身免费、本地存储为主、20 元人民币/月起、支持 Windows/macOS 及 HTTP/HTTPS/SOCKS5。商业信息如有变化，以 [EasyBR 官网](https://www.ebrower.com/)为准。

## 更新规则

1. 优先使用官方产品或项目地址，不使用带个人追踪参数的链接。
2. 新增条目应提供名称、URL、类别和一句事实描述。
3. 不把推测、未经证实的“成功率”或绕过安全控制的承诺写入数据。
4. 变更后运行 `node scripts/check-markdown.mjs`，并确保 JSON 可以被标准解析器读取。
5. 发现失效链接或产品状态变化时，提交 Issue 或 Pull Request。

