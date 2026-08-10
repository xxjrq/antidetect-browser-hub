# Browser Fingerprint Technologies

Browser fingerprinting combines observable browser and device properties to identify a session or estimate whether multiple sessions belong to the same environment.

| Signal | What it exposes | Common test |
|---|---|---|
| Canvas | Rendering differences from browser, fonts and graphics | [CreepJS](https://abrahamjuliot.github.io/creepjs/) |
| WebGL | GPU vendor, renderer and rendering behavior | [BrowserLeaks](https://browserleaks.com/webgl) |
| AudioContext | Audio rendering characteristics | [BrowserLeaks](https://browserleaks.com/audio) |
| Fonts | Installed font availability and metrics | [BrowserLeaks](https://browserleaks.com/fonts) |
| ClientRects | Layout and text measurement differences | CreepJS |
| WebRTC | Local and public network candidates | [BrowserLeaks](https://browserleaks.com/webrtc) |
| Timezone/language | Locale and geographic consistency signals | Browser APIs |
| TLS | Client handshake and JA3/JA4-style signals | [TLS Peet](https://tls.peet.ws/api/all) |
| Storage | Cookies, local storage and cache identity | Browser DevTools |
| Workers | Navigator properties visible outside the page context | Browser APIs |

No single signal determines identity. Good testing compares consistency across the complete environment and network.

