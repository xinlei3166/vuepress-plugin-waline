// 参考 https://github.com/shuaijs/vuepress-plugin-gitalk/blob/master/enhanceApp.js

const WalineOptions = __WALINE_OPTIONS__

export function initWaline(router) {
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/@waline/client'
  document.body.appendChild(script)

  router.afterEach((to, from) => {
    // 页面滚动，hash值变化，也会触发afterEach钩子，避免重新渲染
    if (to.path === from.path) return
    // 已被初始化则根据页面重新渲染 评论区
    if (script.onload) {
      renderWaline()
    } else {
      script.onload = () => {
        const { el = '#waline', selector = '.page' } = WalineOptions
        const walineContainer = document.createElement('div')
        if (el.includes('#')) {
          walineContainer.id = el.replace('#', '')
        }
        if (el.includes('.')) {
          walineContainer.classList.add(el.replace('.', ''))
        }
        const $page = document.querySelector(selector)
        if ($page) {
          $page.appendChild(walineContainer)
          renderWaline()
        }
      }
    }
  })

  function renderWaline() {
    console.log(WalineOptions)
    console.log(location.pathname)
    // let id = location.pathname
    // if (location.pathname.length > 50) {
    //   id = location.pathname
    //     .replace(/\/\d+\/\d+\/\d+\//, '')
    //     .replace('/', '')
    //     .substring(0, 50)
    // }
    // const { clientID, clientSecret, repo, owner, admin } = WalineOptions
    // const gitalk = new Gitalk({
    //   clientID,
    //   clientSecret,
    //   repo,
    //   owner,
    //   admin: admin ? admin : [owner],
    //   // Ensure uniqueness and length less than 50
    //   id,
    //   title: document.title.split('|')[0],
    //   distractionFreeMode: false
    // })
    // gitalk.render('comments-container')
  }
}
