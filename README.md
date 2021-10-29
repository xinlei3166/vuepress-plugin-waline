# vuepress-plugin-waline

## 简介

vuepress-plugin-waline 是一个基于 Vuepress 2.x 的插件，它可以帮助你更快的接入 [Waline](https://waline.js.org) 评论系统。

[查看Demo](https://xinlei3166.github.io/vuepress-demo/)



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


## vuepress-vite

如果出现 `@waline/client/dist/Waline.min.js does not provide an export named default` 的错误，这是因为 `@waline/client` 包是umd格式的，对vite支持不友好，需要在vite打包配置中手动预加载此包。

在 .vuepress/config.js 文件中添加以下内容：
```js
bundlerConfig: {
  viteOptions: {
    optimizeDeps: {
      include: ['@waline/client']
    }
  }
}
```

