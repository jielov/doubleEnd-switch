import { createApp } from 'vue'
import App from './App.vue'
// mobile.main 导入 mobile 端路由
import router from './router/mobile/index'
import store from './store'
const app = createApp(App)

// 浏览器视口大于900px时，使用pc路由
import '@/utils/convert/autoSwitch'
import '@/utils/convert/rem'

app.use(store).use(router).mount('#app')