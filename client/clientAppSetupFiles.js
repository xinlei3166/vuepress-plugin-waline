import { defineClientAppSetup } from '@vuepress/client'
import { onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import Waline from './components/Waline'

const walineOptions = __WALINE_OPTIONS__

export default defineClientAppSetup(() => {
  let waline
  const route = useRoute()

  onMounted(() => {
    updateWaline()
  })

  onBeforeUnmount(() => waline?.destroy())

  function updateWaline() {
    setTimeout(() => {
      if (!document) return
      waline = Waline.newInstance({ walineOptions })
    }, 500)
  }

  watch(() => route.path, updateWaline)
})
