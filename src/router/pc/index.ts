/*
 * @description: 
 * @Author: Jay
 * @Date: 2023-08-07 11:42:18
 * @LastEditors: Jay
 * @LastEditTime: 2023-08-07 11:42:50
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        //pc 路径
        component: () => import('@/views/PC/HomeView/HomeView.vue'),
        meta: {
            title: "首页",
            //是否需要登录
            requireAuth: false
        }
    },
    {
        path: "/aboutView",
        name: "aboutView",
        //pc 路径
        component: () => import('@/views/PC/AboutView/AboutView.vue'),
        meta: {
            title: "二级分页",
            //是否需要登录
            requireAuth: false
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    //整合路由
    routes: routes,
})

/*
  前置 路由守卫
*/
/* eslint-disable */
router.beforeEach((to, from, next) => {
    /* -----通过本地缓存进行判断,获取指定key本地存储的值进行判断----- */
    if (to.meta.requireAuth) {
        // 获取指定key本地存储的值
        const token = localStorage.getItem('Authorization')
        if (token === null || token === '') {
            //登录弹窗
            console.log("去登录")
        } else {
            next()
        }
    } else {
        next()
    }
})
/* eslint-disable no-new */

/*
  后置 路由守卫
*/
router.afterEach((to: any) => {
    // console.log("后置 路由守卫", to, from)
    //更改每个页面的标题
    document.title = to.meta.title;
})

export default router