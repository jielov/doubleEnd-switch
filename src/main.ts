/*
 * @description: 
 * @Author: Jay
 * @Date: 2023-08-07 11:24:01
 * @LastEditors: Jay
 * @LastEditTime: 2023-08-07 11:45:18
 */
import { createApp } from 'vue'
import App from './App.vue'
// main 导入 pc 端路由
import router from './router/pc/index'
import store from './store'
const app = createApp(App)

// 浏览器视口大于900px时，使用pc路由
import '@/utils/convert/autoSwitch'
import '@/utils/convert/rem'

app.use(store).use(router).mount('#app')