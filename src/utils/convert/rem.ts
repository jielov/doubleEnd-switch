/*
 * @description: 
 * @Author: Jay
 * @Date: 2023-07-18 14:46:58
 * @LastEditors: Jay
 * @LastEditTime: 2023-07-18 16:33:51
 */
import { debounce } from './functions'
function setRem() {
  // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  // 得到html的Dom元素
  const htmlDom = document.getElementsByTagName('html')[0]
  // 设置根元素字体大小
  const clientWidth = document.documentElement.clientWidth
  // 1920设计稿一套样式，750设计稿一套样式
  htmlDom.style.fontSize = clientWidth < 900 ? htmlWidth / 46.875 + 'px' : htmlWidth / 120 + 'px'
}
// 初始化
setRem()
window.addEventListener('resize', debounce(setRem, 100))
