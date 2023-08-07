/*
 * @description: 
 * @Author: Jay
 * @Date: 2023-08-07 11:24:01
 * @LastEditors: Jay
 * @LastEditTime: 2023-08-07 11:46:05
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 新增这句话，关闭any报错
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-this-alias": ["off"]
  }
}
