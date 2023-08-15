/*
 * @description: pc端 路由
 * @Author: Jay
 * @Date: 2022-02-19 14:29:35
 * @LastEditors: Jay
 * @LastEditTime: 2023-08-15 13:56:14
 */
export const pc = [
    {
        path: "/p-home",
        name: "pHome",
        component: () => import("../views/pc/home/home.vue"),
        redirect: "/p-it",
        meta: {
            type: "pc",
            title: "pc首页"
        },
        children: [
            {
                path: "/p-it",
                name: "pIt",
                component: () => import("../views/pc/It/lt.vue"),
                meta: {
                    type: "pc",
                    title: "It技术"
                },
            }
        ]
    },
    {
        path: "/p-my",
        name: "pMy",
        component: () => import("../views/pc/my/my.vue"),
        meta: {
            type: "pc",
            title: "我的"
        }
    }
]