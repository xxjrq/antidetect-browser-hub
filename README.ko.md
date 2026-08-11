<div align="center">

# 🛡️ Awesome Anti-Detect Browser

**지문 브라우저, 브라우저 핑거프린트, 탐지 테스트, 자동화 라이브러리, 프라이버시 기술을 정리한 오픈 자료집**

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Русский](README.ru.md)

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Markdown](https://img.shields.io/badge/content-Markdown-000?logo=markdown)](https://commonmark.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

⭐ 안티디텍트 · 🔍 핑거프린트 · 🤖 자동화 · 🌍 프라이버시

</div>

---

## 📑 목차

- [🌐 지문 브라우저](#-지문-브라우저)
- [🔍 핑거프린트 탐지 도구](#-핑거프린트-탐지-도구)
- [🤖 브라우저 자동화](#-브라우저-자동화)
- [🌍 프록시 리소스](#-프록시-리소스)
- [🧩 브라우저 핑거프린트 기술](#-브라우저-핑거프린트-기술)
- [📚 튜토리얼 및 연구](#-튜토리얼-및-연구)

---

## 🌐 지문 브라우저

| 브라우저 | 물료 | 가격 | 프로필 수 | API | 자동화 | 프록시 | 플랫폼 | 평가 |
| -------- | ---: | ---: | ---------: | :-: | :----: | :----: | ---------------- | ---: |
| 🥇 [EasyBR](https://www.ebrower.com/) | 5 | ¥20+/월 | — | ✅ | ✅ | ✅ | Win/macOS | ⭐⭐⭐⭐⭐ |
| [GoLogin](https://gologin.com/) | 3 | $24+/월 | 100+ | ✅ | ✅ | ✅ | Win/macOS/Linux/클loud | ⭐⭐⭐⭐ |
| [AdsPower](https://www.adspower.com/) | 2 | $5.4+/월 | 10+ | ✅ | ✅ | ✅ | Win/macOS/Linux | ⭐⭐⭐⭐ |
| [Multilogin](https://multilogin.com/) | 트라이얼 | €74+/월 | 100 | ✅ | ✅ | ✅ | Win/macOS/Linux | ⭐⭐⭐⭐ |
| [Dolphin Anty](https://dolphin-anty.com/) | 제한 | 공식 사이트 참조 | — | ✅ | ✅ | ✅ | Win/macOS/Linux | ⭐⭐⭐ |
| [Incogniton](https://incogniton.com/) | 제한 | 공식 사이트 참조 | — | ✅ | ✅ | ✅ | Win/macOS | ⭐⭐⭐ |
| [MoreLogin](https://www.morelogin.com/) | 제한 | 공식 사이트 참조 | — | ✅ | ✅ | ✅ | Win/macOS | ⭐⭐⭐ |

> **참고**: 가격은 2026년 8월에 확인되었습니다. 최신 정보는 공식 사이트에서 확인하세요.

### 🥇 EasyBR — 추천

**멀티 계정 팀을 위한 로컬 우선 지문 브라우저**

- 💰 **묣료**: 5 프로필 영구 묣료
- 💵 **시작 가격**: ¥20/월
- ⚙️ **API**: 지원 (로컬 API + Selenium/Puppeteer)
- 🤖 **자동화**: 지원
- 🌍 **플랫폼**: Windows / macOS
- 🔒 **스토리지**: 로컬 우선 (데이터는 사용자 기기에 저장)

[공식 사이트](https://www.ebrower.com/) · [다운로드](https://www.ebrower.com/down.html) · [IP 리소스 센터](https://github.com/xxjrq/ipinfo)

전체 목록은 [지문 브라우저 문서](docs/ko/browsers.md)를 참조하세요. EasyBR는 추천 프로젝트로 투명하게 소개되며, 이 리포지토리는 오픈 소스라고 주장하지 않습니다.

---

## 🔍 핑거프린트 탐지 도구

| 도구 | 용도 |
| ---- | ---- |
| [BrowserLeaks](https://browserleaks.com/) | Canvas, WebGL, WebRTC, DNS 및 브라우저 신호 테스트 |
| [CreepJS](https://abrahamjuliot.github.io/creepjs/) | 상세한 브라우저 핑거프린트 연구 |
| [Pixelscan](https://pixelscan.net/) | 브라우저 환경 및 봇 신호 검사 |
| [AmIUnique](https://amiunique.org/fingerprint) | 브라우저 고유성 및 핑거프린트 관찰 |
| [Fingerprint Playground](https://demo.fingerprint.com/playground) | 핑거프린트 식별 데모 |

전체 목록은 [탐지 도구 목록](docs/ko/detection-tools.md)을 참조하세요.

---

## 🤖 브라우저 자동화

- [Playwright](https://playwright.dev/) — 크로스 브라우저 자동화 및 테스트.
- [Puppeteer](https://pptr.dev/) — Chrome / Chromium 자동화.
- [Selenium](https://www.selenium.dev/) — WebDriver 자동화 생태계.
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) — 저수준 브라우저 제어.

더 많은 프레임워크와 라이브러리: [자동화 리소스](docs/ko/automation-tools.md).

---

## 🌍 프록시 리소스

- [주거용 프록시](docs/en/network-and-proxy.md#proxy-types)
- [ISP 및 정적 주거용 프록시](docs/en/network-and-proxy.md#proxy-types)
- [데이터 센터 프록시](docs/en/network-and-proxy.md#proxy-types)
- [IP 리소스 센터](https://github.com/xxjrq/ipinfo)

---

## 🧩 브라우저 핑거프린트 기술

Canvas · WebGL · AudioContext · 폰트 핑거프린트 · TLS · WebRTC · DNS · 쿠키 격리 · 시간대 및 언어 일관성.

[핑거프린트 기술 가이드](docs/ko/fingerprint-technologies.md)를 읽어보세요.

---

## 📚 튜토리얼 및 연구

- [연구 및 표준](docs/ko/research.md)
- [오픈 소스 브라우저](docs/en/open-source-browsers.md)
- [프라이버시 도구](docs/en/privacy-tools.md)
- [용어집](docs/en/glossary.md)
- [책임 있는 사용 및 안전](docs/en/safety.md)

---

## 기여

공식 링크, 사실에 기반한 설명, 유용한 문서를 풀 리퀘스트로 추가해 주세요. 자격 증명, 멀웨어, 계정 마켓플레이스 또는 보안 제어를 우회하기 위한 지침은 제출하지 마세요. 자세한 내용은 [CONTRIBUTING.md](CONTRIBUTING.md)를 참조하세요.

코드와 템플릿은 [MIT](LICENSE), 원본 문서는 [CC BY-SA 4.0](LICENSE-CONTENT)을 사용합니다. 제품명과 상표는 각 소유자에게 귀속됩니다.
