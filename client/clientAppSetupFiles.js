import { defineClientAppSetup } from '@vuepress/client'
import {
  createApp,
  computed,
  defineComponent,
  h,
  onMounted,
  onBeforeUnmount,
  watch,
  nextTick
} from 'vue'
import { useRouter, useRoute, onBeforeRouteLeave } from 'vue-router'
import Waline from './components/Waline'

const walineOptions = __WALINE_OPTIONS__

export default defineClientAppSetup(() => {
  let waline
  const route = useRoute()

  onMounted(() => {
    updateWaline()
    // nextTick(updateWaline)
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
