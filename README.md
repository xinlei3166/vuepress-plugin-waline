# vuepress-plugin-waline

## 简介

vuepress-plugin-waline 是一个基于 Vuepress 2.x 的插件，它可以帮助你更快的接入 [Waline](https://waline.js.org) 评论系统。

[查看Demo](https://xinlei3166.github.io/about.html)



## 安装

```bash
npm install -D vuepress-plugin-waline
yarn add -D vuepress-plugin-waline
```



## 用法

.vuepress/config.js文件中使用插件

```js
plugins: [
  ['vuepress-plugin-waline', {
    serverURL: 'https://waline.vercel.app'
  }]
]
```

