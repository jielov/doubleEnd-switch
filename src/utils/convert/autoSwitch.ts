/*
 * @description: 根据页面大小 切换显示端口
 * @Author: Jay
 * @Date: 2023-07-18 14:46:58
 * @LastEditors: Jay
 * @LastEditTime: 2023-07-18 16:41:11
 */
import { debounce } from './functions'
window.addEventListener('resize', debounce(() => {
  if (document.documentElement.clientWidth < 900) {
    if (window.location.href === '/mobile.html#/') return
    window.location.href = './mobile.html#/'
  } else {
    if (window.location.href === '/index.html#/') return
    window.location.href = './index.html#/'
  }
}, 100))
