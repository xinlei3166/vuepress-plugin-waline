import { path, getDirname } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

/**
 * vuepress waline plugin
 * @param selector 非Waline参数，el挂载的容器，默认.page。
 * @param serverURL Waline 的服务端地址。
 * @param login Waline 登录模式状态，enable/disable/force。
 * @param options Waline 的其他参数。
 * @param app Vue 应用实例。
 * @return {{clientAppEnhanceFiles, name: string, define: {__WALINE_OPTIONS__: (*&{el, serverURL, selector})}}}
 */
export const walinePlugin = ({ selector, serverURL, login, ...options }, app) => {
  return {
    name: 'vuepress-plugin-waline',
    clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    define: {
      __WALINE_OPTIONS__: { selector, serverURL, login, ...options }
    },
    extendsPageOptions: (pageOptions, app) => {
      if (pageOptions.filePath?.startsWith(app.dir.source())) {
        pageOptions.frontmatter = pageOptions.frontmatter ?? {}
        pageOptions.frontmatter.head = pageOptions.frontmatter.head ?? []
        pageOptions.frontmatter.head.push(
          [
            'link',
            { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/@waline/client/dist/waline.css' }
          ],
          ['script', { src: '//cdn.jsdelivr.net/npm/@waline/client/dist/waline.js' }]
        )
      }
    }
  }
}

export default walinePlugin
