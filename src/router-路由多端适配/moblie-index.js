/*
 * @description: 移动端路由
 * @Author: Jay
 * @Date: 2022-02-19 14:29:35
 * @LastEditors: Jay
 * @LastEditTime: 2022-02-22 15:31:08
 */
export const moblie = [
    {
        path: "/m-home",
        name: "mHome",
        component: () => import("../views/moblie/home/home.vue"),
        meta: {
            type: 'mobile',
            title: '移动首页'
        }
    },
    {
        path: "/m-my",
        name: "mMy",
        component: () => import("../views/moblie/my/my.vue"),
        meta: {
            type: 'mobile',
            title: '我的'
        }
    }
]