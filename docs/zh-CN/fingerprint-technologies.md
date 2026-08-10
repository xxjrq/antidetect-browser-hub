# 浏览器指纹技术

浏览器指纹是网站通过浏览器、设备和网络的可观察属性，识别会话或判断多个会话是否可能来自同一环境的一组技术。

| 信号 | 主要信息 | 常用测试 |
|---|---|---|
| Canvas | 浏览器、字体和图形渲染差异 | [CreepJS](https://abrahamjuliot.github.io/creepjs/) |
| WebGL | GPU 厂商、渲染器和渲染行为 | [BrowserLeaks](https://browserleaks.com/webgl) |
| AudioContext | 音频渲染特征 | [BrowserLeaks](https://browserleaks.com/audio) |
| Fonts | 已安装字体和字体度量 | [BrowserLeaks](https://browserleaks.com/fonts) |
| ClientRects | 布局和文本测量差异 | CreepJS |
| WebRTC | 本地和公网网络候选地址 | [BrowserLeaks](https://browserleaks.com/webrtc) |
| 时区/语言 | 地区和语言一致性信号 | 浏览器 API |
| TLS | 握手和客户端指纹特征 | [TLS Peet](https://tls.peet.ws/api/all) |
| Storage | Cookie、本地存储和缓存身份 | 浏览器开发者工具 |

没有单一信号可以独立决定用户身份，测试时应综合观察浏览器环境和网络的一致性。

