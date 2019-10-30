# JWS Template

## Usage

### Command

#### Install

```
npm install
```

#### Develop

```
npm run dev
```

#### Build

```
npm run build
```

## 機能一覧

### 開発環境

- gulp
- pug
- webpack
- babel
- sass
- eslint
- prettier

### ライブラリ

- jQuery
- modaal
- GSAP(TweenMax/TimelineMax)
- ScrollMagic
- Swiper

### metaの一括生成

- `<meta>`は`_src/_data/meta.json`にて管理
- `pug`の`pageId`で`ID`を指定して、`meta.json`で編集

```
block var
  - pageId = "index"
```

## Memo

- [modaal](http://humaan.com/modaal/)
- [TweenMax](https://greensock.com/docs/v2/TweenMax)
- [TimelineMax](https://greensock.com/docs/v2/TimelineMax)
- [ScrollMagic](https://scrollmagic.io/docs/index.html)
- [Swiper](https://swiperjs.com/api/)
- [OGP](https://digitalidentity.co.jp/blog/seo/ogp-share-setting.html)
