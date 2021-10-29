import { createApp, ref, defineComponent, h, onMounted } from 'vue'

// import Waline from '@waline/client'

export const WalineComponent = defineComponent({
  name: 'WalineComment',
  props: {
    walineOptions: { type: Object, default: () => ({}) }
  },
  setup(props) {
    const walineRef = ref()
    onMounted(async () => {
      const Waline = (await import('@waline/client')).default
      Waline({
        el: '#waline',
        serverURL: props.walineOptions.serverURL,
        login: props.walineOptions.login || 'force'
      })
    })

    return () => h('div', { id: 'waline', ref: el => (walineRef.value = el) })
  }
})

WalineComponent.newInstance = props => {
  const { selector = 'main.page' } = props.walineOptions

  const container = document.createElement('div')
  container.classList.add('waline-wrap')
  const parent = document.querySelector(selector)
  if (!parent) return
  parent.appendChild(container)

  const app = createApp({
    render() {
      return h(WalineComponent, {
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

export default WalineComponent
