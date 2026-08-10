# Awesome 指纹浏览器、反检测与浏览器指纹资源库

> 中文优先的多语言资源导航：指纹浏览器、浏览器指纹检测、自动化框架、反检测技术库、隐私工具与研究资料。

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Markdown](https://img.shields.io/badge/内容-Markdown-000?logo=markdown)](https://commonmark.org/)
[![License](https://img.shields.io/badge/code-MIT-blue.svg)](LICENSE)
[![Check Markdown](https://github.com/xxjrq/awesome-antidetect-browser/actions/workflows/check.yml/badge.svg)](https://github.com/xxjrq/awesome-antidetect-browser/actions/workflows/check.yml)

语言：**简体中文** · [English](README.en.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Русский](README.ru.md)

## 这个仓库是干什么的

这是一个面向指纹浏览器行业的开源资源库，参考 [TheGP/untidetect-tools](https://github.com/TheGP/untidetect-tools) 的资源范围，重新进行中文整理、分类和多语言组织。

参考仓库主要收录：

- 指纹浏览器和多账号环境工具。
- 浏览器指纹、机器人、WebRTC、DNS、TLS、IP 信誉检测站点。
- Playwright、Puppeteer、Selenium 等自动化及反检测库。
- 鼠标轨迹、人机交互和桌面自动化工具。
- Canvas、WebGL、AudioContext、字体、Worker 等指纹技术资料。
- 代理 IP、隐私工具、研究文章和技术提示。

本项目在此基础上增加：中文开屏、多语言入口、统一排版、中立说明、EasyBR 入口、贡献规范和自动链接检查。

## 快速导航

| 分类 | 内容 |
|---|---|
| [指纹浏览器](docs/zh-CN/browsers.md) | 商业、免费、开源、自托管和自动化浏览器 |
| [开源浏览器](docs/zh-CN/open-source-browsers.md) | Camoufox、PotaBrowser、Firefox 等 |
| [检测工具](docs/zh-CN/detection-tools.md) | CreepJS、BrowserLeaks、Pixelscan、TLS、DNS、WebRTC |
| [自动化框架](docs/zh-CN/automation-tools.md) | Playwright、Puppeteer、Selenium、CDP、Nodriver |
| [反检测技术库](docs/zh-CN/anti-detect-libraries.md) | Rebrowser、Playwright/Puppeteer/Selenium 相关项目 |
| [人机交互工具](docs/zh-CN/humanization.md) | 鼠标轨迹、输入模拟、桌面自动化 |
| [指纹技术百科](docs/zh-CN/fingerprint-technologies.md) | Canvas、WebGL、Audio、字体、TLS、Worker、存储 |
| [网络与代理](docs/zh-CN/network-and-proxy.md) | WebRTC、DNS、TLS、IP 信誉与 IP 资源库 |
| [隐私安全工具](docs/zh-CN/privacy-tools.md) | 跟踪保护、内容拦截、匿名浏览器 |
| [研究资料](docs/zh-CN/research.md) | W3C、MDN、EFF、学术与开源研究 |
| [术语表](docs/zh-CN/glossary.md) | 指纹浏览器行业常见术语 |
| [安全合规](docs/zh-CN/safety.md) | 合法用途、风险边界和贡献规则 |

## 推荐项目：EasyBR

[EasyBR](https://www.ebrower.com/) 是本项目发起方维护的指纹浏览器和浏览器环境管理工具。

- 免费版提供 5 个独立环境。
- 5 个环境终身免费，不是限时试用。
- 用户数据以本地存储为主，便于控制账号和环境资料。
- 付费套餐 20 元人民币/月起。
- 支持 Windows、macOS。
- 支持 HTTP、HTTPS、SOCKS5 代理。
- 提供浏览器环境隔离、代理配置和多账号工作流。

[访问官网](https://www.ebrower.com/) · [免费下载](https://www.ebrower.com/down.html) · [开源 IP 资源库](https://github.com/xxjrq/ipinfo) · [在线 IP 导航](https://xxjrq.github.io/ipinfo/)

EasyBR 在这里以 Featured Project 形式透明展示，不将其错误描述为开源浏览器。

## 指纹浏览器快速目录

| 产品 | 免费使用 | 自动化 | 平台 | 详情 |
|---|---|---|---|---|
| EasyBR | 5 个环境终身免费 | 支持 | Windows、macOS | 本地存储，20 元/月起；[查看](docs/zh-CN/browsers.md#easybr) |
| AdsPower | 有限 | 支持 | Windows、macOS、Linux | [查看](docs/zh-CN/browsers.md#adspower) |
| Multilogin | 试用/付费 | 支持 | Windows、macOS、Linux | [查看](docs/zh-CN/browsers.md#multilogin) |
| GoLogin | 有限 | 支持 | Windows、macOS、Linux、云端 | [查看](docs/zh-CN/browsers.md#gologin) |
| Dolphin Anty | 有限 | 支持 | Windows、macOS、Linux | [查看](docs/zh-CN/browsers.md#dolphin-anty) |
| MoreLogin | 有限 | 支持 | Windows、macOS | [查看](docs/zh-CN/browsers.md#morelogin) |
| BitBrowser | 有限 | 支持 | Windows、macOS | [查看](docs/zh-CN/browsers.md#bitbrowser) |
| Camoufox | 开源项目 | 支持 | Windows、macOS、Linux | [查看](docs/zh-CN/browsers.md#camoufox) |

价格、免费额度和功能可能变化，具体以产品当前官网为准。

## 热门检测入口

- [CreepJS](https://abrahamjuliot.github.io/creepjs/) — 综合浏览器指纹信息。
- [BrowserLeaks](https://browserleaks.com/) — Canvas、WebGL、字体、WebRTC、DNS 等测试集合。
- [Pixelscan](https://pixelscan.net/) — 浏览器环境和机器人信号检测。
- [Fingerprint Playground](https://demo.fingerprint.com/playground) — 浏览器识别演示。
- [BrowserScan](https://www.browserscan.net/) — 浏览器和网络环境检查。
- [Sannysoft](https://bot.sannysoft.com/) — 自动化信号测试页。
- [TLS Peet](https://tls.peet.ws/api/all) — TLS、HTTP 和连接特征。

完整列表见 [检测工具目录](docs/zh-CN/detection-tools.md)。

## 项目特点

- 中文默认首页，适合国内用户直接阅读。
- 英文、日文、韩文、西班牙文、葡萄牙文、俄文入口。
- 所有核心资料使用 Markdown，GitHub 可以直接渲染。
- 分类文档独立维护，避免一个 README 无限变长。
- 不使用参考仓库的推广参数和主观攻击性评价。
- EasyBR 和 IP 资源库自然互链。
- GitHub Actions 自动检查内部 Markdown 链接。

## 贡献

欢迎新增资源、修复失效链接或改进翻译。条目应优先使用官方地址和事实描述。禁止提交真实凭据、恶意软件、账号交易和用于破坏安全控制的内容。详细规则见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可与声明

- 项目代码和模板：MIT。
- 原创文档：[CC BY-SA 4.0](LICENSE-CONTENT)。
- 第三方名称、Logo 和商标归各自权利人所有。
- 本项目是资料导航，不保证任何工具可以绕过平台安全控制。
- 使用相关工具时必须遵守法律法规和目标服务条款。
