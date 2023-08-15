/*
 * @description: 
 * @Author: Jay
 * @Date: 2022-02-18 17:18:08
 * @LastEditors: Jay
 * @LastEditTime: 2023-08-15 13:46:02
 */
import { createRouter, createWebHistory } from "vue-router";

// 导入 移动 pc 路由
import { moblie } from "./moblie-index";
import { pc } from "./pc-index";

//判断设备 
const isMobile = () => {
  return /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(
    navigator.userAgent
  )
}
const redirectPath = isMobile() ? "/m-home" : "/p-home";

const routes = [
  // 跟目录
  {
    path: "/",
    redirect: redirectPath,
  }
];

//整合路由
let moduleRoute = [].concat(moblie).concat(pc);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...routes, ...moduleRoute],
});

/**
 * 判断当前设备
 * 路由前守卫
 */
router.beforeEach((to, from, next) => {
  // 当移动端试图访问pc端界面时
  if (isMobile() && to.meta.type !== "mobile") {
    const routers = router.options.routes.filter((v) => v.name?.toString().startsWith("m"));
    const path = routers?.filter((v) =>
      v.name?.toString().split("-")[1] === to.name?.toString().split("-")[1]
    )[0];
    if (path) {
      next(path.path);
    } else {
      next("/");
    }
  }
  // 当pc端页面试图访问移动端页面时
  if (!isMobile() && to.meta.type !== "pc") {
    const routers = router.options.routes;
    const path = routers.filter((v) =>
      v.name?.toString().split("-")[1] === to.name?.toString().split("-")[1]
    )[0].path;
    if (path) {
      next(path);
    } else {
      next("/");
    }
  }

  next();
});

/**
 * 后置路由守卫 
 *  */
router.afterEach((to, from) => {
  //更改每个页面的标题
  document.title = to.meta.title
})

export default router;
