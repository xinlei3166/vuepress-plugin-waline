const { path } = require('@vuepress/utils')

/**
 * vuepress waline plugin
 * @param el Waline 的初始化挂载器。
 * @param serverURL Waline 的服务端地址。
 * @param selector 非Waline参数，el挂载的容器，默认.page。
 * @param options Waline 的其他参数。
 * @param app Vue 应用实例。
 * @return {{clientAppEnhanceFiles, name: string, define: {__WALINE_OPTIONS__: (*&{el, serverURL, selector})}}}
 */
const walinePlugin = ({ el, serverURL, selector, ...options }, app) => {
  return {
    name: 'vuepress-plugin-waline',
    clientAppEnhanceFiles: path.resolve(__dirname, '../client/clientAppEnhance.js'),
    define: {
      __WALINE_OPTIONS__: { el, serverURL, selector, ...options }
    }
  }
}

module.exports = walinePlugin
