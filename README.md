## 該專案是使用 Gulp 任務自動化管理工具。

開啟該專案操作步驟：
- 需先安裝node.js，- 查看自己版本指令：node -v
- 第一次使用，須先在cmd輸入npm install -g gulp，之後即可不須輸入這個指令，完成下載後，查看自己版本指令：gulp -v
- 第二次以後使用，請務必確保已經在本機上輸入過 `npm install -g gulp`，否則電腦會不認識 `gulp` 指令。
- GitHub Repositories下載Sutron_web資料夾，完成下載後，cmd需先cd移動到Sutron_web資料夾，再輸入npm install下載所需要的模組。
- 以上皆完成後即可輸入gulp，執行開發模式(會開啟模擬瀏覽器並監聽相關檔案)。


## gulp指令列表

- `gulp` - 執行開發模式(會開啟模擬瀏覽器並監聽相關檔案)
  - 若沒有自動開啟瀏覽器則可手動在瀏覽器上輸入 `http://localhost:8080/` 即可。
  - 假使監聽功能無效的話，可以檢查一下是否修改到資料夾的名稱等。
- `gulp build` - 執行編譯模式(不會開啟瀏覽器)
- `gulp clean` - 清除 dist 資料夾
- `gulp deploy` - 將 dist 資料夾部署至 GitHub Pages
  - 若無法部署到 GitHub Pages 的話，可以確定一下是否已經初始化專案等。


## 說明

該專案預設載入 Bootstrap5 與 jQuery 等。

若有需要調整相關路徑參數可在 `envOptions.js` 中調整，但建議不要隨意調整導致 Gulp 無法正常運行。

假使對於 Gulp 不熟悉會建議不要任意調整 `gulpfile.js` 底下的資料任一檔案，避免出現無法正常運作之問題。


## 資料夾結構

- App # 原始碼
  - assets # 靜態資源放置處
    - images # 圖片放置處
    - js # JavaScript 放置處
    - style # 樣式放置處
  - index.html # 首頁 HTML
  - layout.ejs # Layout ejs
- gulpfile.js # Gulp 原始碼
  - envOptions.js # Gulp 路徑變數
  - index.js # Gulp 核心原始碼

### 注意事項

`assets` 底下的資料夾名稱建議不要任意修改，例如：`stlye` 改成 `styles` 又或者是 `scss` 等非原始資料夾名稱。

最主要原因是 Gulp 預設是監聽 `style`、`js`、 `images` 這幾個資料夾路徑底下的檔案，因此若任意修改名稱將可能導致 Gulp 的監聽功能失效或其他不可預期之問題發生。

若對於 Gulp 有一定掌握度則可進入 `gulpfile.js/envOptions.js` 修改相關路徑即可。

Gulp 的自動更新行為是必須持續開著終端機的，因此若關閉終端機則會失去監聽與自動更新效果，因此在開專案時，請不要關閉運行中的終端機。


## 支援的監聽

目前支援 HTML、ejs、JavaScript、Images、SCSS 監聽並自動重新刷新。

圖片新增時也會自動刷新。

因此是不用使用 `Live Sass Compiler` 的 `Watch SCSS` 功能或是 `Prepros` 等工具來編譯 SCSS。

除此之外 Gulp 本身有支援模擬伺服器，因此不用再次使用一些模擬伺服器的套件，例如：`Preview on Web Server` 套件等。


## 部署 gh-pagse 流程說明

Gulp 原始碼上傳到 GitHub Repositories 初始化 GitHub，相關指令：
(僅限第一次輸入，若已經初始化過就可以不用輸入)

```cmd
git init 
git add .
git commit -m 'init'
git branch -M main
git remote add origin [GitHub Repositories Url]
git push -u origin main
```


### 修改程式碼後，要重新佈署gh-pagse的相關指令：

```cmd
git checkout 自己的分支
git fetch origin 自己的分支
git fetch origin main
git add .
git commit -m 'update'
git push origin 自己的分支
<!-- 若有衝突，則須先解決衝突 -->
git checkout main
git merge 自己的分支
git push origin main

```

以上操作均完成部署到 GitHub 之後就可以輸入 gulp build 進入生產模式，當生產完畢之後接下來只需要輸入 gulp deploy 即可完成 GitHub Pages 部署。