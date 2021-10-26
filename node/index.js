const { path } = require('@vuepress/utils')

/**
 * vuepress waline plugin
 * @param selector 非Waline参数，el挂载的容器，默认.page。
 * @param serverURL Waline 的服务端地址。
 * @param login Waline 登录模式状态，enable/disable/force。
 * @param options Waline 的其他参数。
 * @param app Vue 应用实例。
 * @return {{clientAppEnhanceFiles, name: string, define: {__WALINE_OPTIONS__: (*&{el, serverURL, selector})}}}
 */
const walinePlugin = ({ selector, serverURL, login, ...options }, app) => {
  return {
    name: 'vuepress-plugin-waline',
    clientAppEnhanceFiles: path.resolve(
      __dirname,
      '../client/clientAppEnhance.js'
    ),
    clientAppSetupFiles: path.resolve(
      __dirname,
      '../client/clientAppSetupFiles.js'
    ),
    define: {
      __WALINE_OPTIONS__: { selector, serverURL, login, ...options }
    }
  }
}

module.exports = walinePlugin
