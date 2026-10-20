# 字民 · 浮游檔案

澳門街頭文字的互動檔案。從 228 筆共同收集的記錄，進入 INDEX 檢索與 ReDesign 粒子構圖。

- **互動網站**：https://leddzh.github.io/zimaan-type-residents/
- **原始檔案**：https://www.are.na/chen-wenqi/group5-1vk3ydy1fq4
- **資料快照**：2026-10-20；228 筆記錄，其中 28 筆描述空白。

## 體驗

1. **浮游**：移動撥散粒子、按住聚攏、拖曳旋轉、滾輪或雙指縮放。
2. **INDEX**：搜尋標題、街道、上傳者帳號、來源 ID；按原描述地區篩選，查看原圖與資料。
3. **ReDesign**：把原檔案的文字提取圖轉為粒子；切換字形、星環、街巷，下載當前畫面 PNG。
4. **手勢**：主動授權攝像頭後，張掌撥散、握拳聚攏、捏合選取、雙手縮放。辨識在本機進行，不錄影、不上傳影像。若不支援攝像頭，鼠標與觸屏功能仍可完整使用。

## 字體

標題使用本地載入的 Noto Serif CJK TC Black 子集，搭配錯位排版與 SVG 字民標誌；粒子標題也使用同一字體。子集約 40KB，不依賴裝置預裝字體或第三方字體 CDN。授權位於 `docs/assets/fonts/OFL.txt`。

## 本地預覽

```sh
python -m http.server 8765 --directory docs
```

開啟 http://localhost:8765 。攝像頭需 HTTPS 或 localhost。

## 驗證

```sh
node check.mjs
```

檢查記錄數量、素材與來源、描述缺失、街道查詢，以及手勢判定。曾在瀏覽器驗證桌面／窄屏、檢索到詳情與字形粒子化的路徑，以及 MediaPipe 雙手各 21 點推論。實機手勢效果受攝像頭、光線與遮擋影響。

## 部署

這是無需建置的靜態網站，網站檔案位於 `docs/`。GitHub Settings → Pages 選擇從 `main` 分支的 `/docs` 發布。所有路徑均相對於專案根目錄，可部署於 GitHub Pages 的專案子路徑。

## 授權與來源

專案自行編寫的 HTML／CSS／JavaScript 採 MIT 授權。**MIT 不涵蓋原照片、文字提取圖、原描述與原始檔案中的第三方素材**，這些內容的權利歸原收集者或原權利人。素材僅作本課程檔案展示與設計研究；第三方套件、字體與預訓練模型沿用各自授權，詳見 `docs/assets/THIRD_PARTY.txt`。
