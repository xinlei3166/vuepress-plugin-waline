import {
  createApp,
  ref,
  computed,
  defineComponent,
  h,
  onMounted,
  watch,
  nextTick
} from 'vue'

import _Waline from '@waline/client'

export const Waline = defineComponent({
  name: 'Waline',
  props: {
    walineOptions: { type: Object, default: () => ({}) }
  },
  setup(props) {
    const walineRef = ref()
    onMounted(() => {
      _Waline({
        el: '#waline',
        serverURL: props.walineOptions.serverURL,
        login: props.walineOptions.login || 'force'
      })
    })

    return () =>
      h('div', { id: 'waline', ref: el => (walineRef.value = el) }, [1])
  }
})

Waline.newInstance = props => {
  const { selector = 'main.page' } = props.walineOptions

  const container = document.createElement('div')
  container.classList.add('waline-wrap')
  const parent = document.querySelector(selector)
  if (!parent) return
  parent.appendChild(container)

  const app = createApp({
    render() {
      return h(Waline, {
        ...props
      })
    }
  })

  app.mount(container)

  return {
    destroy() {
      app.unmount(container)
      if (container.parentNode) {
        container.parentNode.removeChild(container)
      }
    }
  }
}

export default Waline
