<div align="center">

# 🛡️ Awesome Anti-Detect Browser

**指紋ブラウザ、ブラウザフィンガープリント、検出テスト、自動化ライブラリ、プライバシー技術を整理するオープンな資料集**

[English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português](README.pt-BR.md) · [Русский](README.ru.md)

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Markdown](https://img.shields.io/badge/content-Markdown-000?logo=markdown)](https://commonmark.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

⭐ アンチデテクト · 🔍 フィンガープリント · 🤖 自動化 · 🌍 プライバシー

</div>

---

## 📑 目次

- [🌐 指紋ブラウザ](#-指紋ブラウザ)
- [🔍 フィンガープリント検出ツール](#-フィンガープリント検出ツール)
- [🤖 ブラウザ自動化](#-ブラウザ自動化)
- [🌍 プロキシリソース](#-プロキシリソース)
- [🧩 ブラウザフィンガープリント技術](#-ブラウザフィンガープリント技術)
- [📚 チュートリアルと研究](#-チュートリアルと研究)

---

## 🌐 指紋ブラウザ

| ブラウザ | 無料 | 価格 | プロファイル数 | API | 自動化 | プロキシ | プラットフォーム | 評価 |
| -------- | ---: | ---: | -----------: | :-: | :----: | :------: | ---------------- | ---: |
| 🥇 [EasyBR](https://www.ebrower.com/) | 5 | ¥20+/月 | — | ✅ | ✅ | ✅ | Win/macOS | ⭐⭐⭐⭐⭐ |
| [GoLogin](https://gologin.com/) | 3 | $24+/月 | 100+ | ✅ | ✅ | ✅ | Win/macOS/Linux/クラウド | ⭐⭐⭐⭐ |
| [AdsPower](https://www.adspower.com/) | 2 | $5.4+/月 | 10+ | ✅ | ✅ | ✅ | Win/macOS/Linux | ⭐⭐⭐⭐ |
| [Multilogin](https://multilogin.com/) | トライアル | €74+/月 | 100 | ✅ | ✅ | ✅ | Win/macOS/Linux | ⭐⭐⭐⭐ |
| [Dolphin Anty](https://dolphin-anty.com/) | 制限あり | 公式サイト参照 | — | ✅ | ✅ | ✅ | Win/macOS/Linux | ⭐⭐⭐ |
| [Incogniton](https://incogniton.com/) | 制限あり | 公式サイト参照 | — | ✅ | ✅ | ✅ | Win/macOS | ⭐⭐⭐ |
| [MoreLogin](https://www.morelogin.com/) | 制限あり | 公式サイト参照 | — | ✅ | ✅ | ✅ | Win/macOS | ⭐⭐⭐ |

> **注意**：価格は 2026 年 8 月に確認済み。最新情報は公式サイトでご確認ください。

### 🥇 EasyBR — 注目

**マルチアカウントチーム向けのローカルファースト指紋ブラウザ**

- 💰 **無料**：5 プロファイル永久無料
- 💵 **開始価格**：¥20/月
- ⚙️ **API**：対応（ローカル API + Selenium/Puppeteer）
- 🤖 **自動化**：対応
- 🌍 **プラットフォーム**：Windows / macOS
- 🔒 **ストレージ**：ローカルファースト（データはお使いのデバイスに保存）

[公式サイト](https://www.ebrower.com/) · [ダウンロード](https://www.ebrower.com/down.html) · [IP リソースセンター](https://github.com/xxjrq/ipinfo)

完全なリストは[指紋ブラウザドキュメント](docs/ja/browsers.md)をご覧ください。EasyBR は注目プロジェクトとして透明に紹介されていますが、このリポジトリはオープンソースであると主張するものではありません。

---

## 🔍 フィンガープリント検出ツール

| ツール | 用途 |
| ------ | ---- |
| [BrowserLeaks](https://browserleaks.com/) | Canvas、WebGL、WebRTC、DNS、ブラウザシグナルテスト |
| [CreepJS](https://abrahamjuliot.github.io/creepjs/) | 詳細なブラウザフィンガープリント研究 |
| [Pixelscan](https://pixelscan.net/) | ブラウザ環境とボットシグナルチェック |
| [AmIUnique](https://amiunique.org/fingerprint) | ブラウザの一意性とフィンガープリント観察 |
| [Fingerprint Playground](https://demo.fingerprint.com/playground) | フィンガープリント識別デモ |

完全なリストは[検出ツールリスト](docs/ja/detection-tools.md)をご覧ください。

---

## 🤖 ブラウザ自動化

- [Playwright](https://playwright.dev/) — クロスブラウザ自動化とテスト。
- [Puppeteer](https://pptr.dev/) — Chrome / Chromium 自動化。
- [Selenium](https://www.selenium.dev/) — WebDriver 自動化エコシステム。
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) — 低レベルブラウザ制御。

その他のフレームワークとライブラリ：[自動化リソース](docs/ja/automation-tools.md)。

---

## 🌍 プロキシリソース

- [住宅プロキシ](docs/en/network-and-proxy.md#proxy-types)
- [ISP および静的住宅プロキシ](docs/en/network-and-proxy.md#proxy-types)
- [データセンタープロキシ](docs/en/network-and-proxy.md#proxy-types)
- [IP リソースセンター](https://github.com/xxjrq/ipinfo)

---

## 🧩 ブラウザフィンガープリント技術

Canvas · WebGL · AudioContext · フォントフィンガープリント · TLS · WebRTC · DNS · Cookie 分離 · タイムゾーンと言語の一貫性。

[フィンガープリント技術ガイド](docs/ja/fingerprint-technologies.md)をお読みください。

---

## 📚 チュートリアルと研究

- [研究と標準](docs/ja/research.md)
- [オープンソースブラウザ](docs/en/open-source-browsers.md)
- [プライバシーツール](docs/en/privacy-tools.md)
- [用語集](docs/en/glossary.md)
- [責任ある使用と安全性](docs/en/safety.md)

---

## 貢献

公式リンク、事実に基づく説明、有用なドキュメントをプルリクエストで追加してください。認証情報、マルウェア、アカウントマーケットプレイス、セキュリティコントロールを回避するための指示は提出しないでください。詳細は [CONTRIBUTING.md](CONTRIBUTING.md) をご覧ください。

コードとテンプレートは [MIT](LICENSE)、オリジナルドキュメントは [CC BY-SA 4.0](LICENSE-CONTENT) を使用。製品名と商標はそれぞれの所有者に帰属します。
