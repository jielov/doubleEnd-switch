/*
 * @description: 
 * @Author: Jay
 * @Date: 2023-07-18 14:49:45
 * @LastEditors: Jay
 * @LastEditTime: 2023-08-07 11:03:04
 */
// 防抖函数
type CallbackFn = (item?: any) => void
export function debounce(fn: CallbackFn, delay: number) {
  let timer: number | null = null;
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  }
}

// 节流函数
export function throttle(fn: CallbackFn, delay: number) {
  let timer: number | null = null;
  return (...args: any[]) => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = null
    }, delay);
  }
}

/* 
js 原始版本
// 防抖函数
export function debounce(fn, delay) {
  let timer = null
  return function () {
    const _this = this
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      fn.apply(_this, args)
    }, delay)
  }
}

// 节流函数
export function throttle(fn, delay) {
  let timer = null
  return function () {
    const _this = this
    const args = arguments
    if (timer) {
      return
    }
    timer = setTimeout(function () {
      fn.apply(_this, args)
      timer = null
    }, delay)
  }
}
*/