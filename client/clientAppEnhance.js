import { defineClientAppEnhance } from '@vuepress/client'
import { initWaline } from './waline'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  try {
    // 生成静态页时在node中执行，没有document对象
    document && initWaline(router)
  } catch (e) {
    console.error(e.message)
  }
})
