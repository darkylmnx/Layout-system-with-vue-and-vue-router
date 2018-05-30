import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/Layout-system-with-vue-and-vue-router/",

  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "no-sidebar" },
      component: require("@/pages/Home.vue").default // load sync home
    },
    {
      path: "/photos",
      name: "photos",
      component: () => import("@/pages/Photos.vue")
    },
    {
      path: "/about-us",
      name: "about",
      meta: { layout: "no-sidebar" },
      component: () => import("@/pages/About.vue")
    },
    {
      path: "/story/:id",
      name: "post",
      component: () => import("@/pages/Post.vue")
    },
    {
      path: "*",
      name: "404*",
      component: require("@/pages/404.vue").default // load sync home
    }
  ]
});
