/*
 * @description: 
 * @Author: Jay
 * @Date: 2023-08-07 11:24:01
 * @LastEditors: Jay
 * @LastEditTime: 2023-08-07 11:49:34
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //多页面配置
  pages: {
    // 多个页面
    mobile: {
      // 模板来源
      template: 'public/mobile.html',
      // page 的入口
      entry: 'src/mobile.main.ts',
      // 在 dist/index.html 的输出
      filename: 'mobile.html',
      // 页面标题
      title: '移动适配',
    },
    index: {
      template: 'public/index.html',
      entry: 'src/main.ts',
      filename: 'index.html',
      title: 'pc适配',
    }
  },
})
