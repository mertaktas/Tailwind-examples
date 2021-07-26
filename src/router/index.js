import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import("../views/Home.vue"),
    },
    {
      path: '/pinterest',
      name: 'Pinterest',
      component: () => import("../views/Pinterest.vue"),
    },
    {
      path: '/designdaily',
      name: 'UiDesignDaily',
      component: () => import("../views/UiDesignDaily.vue"),
    },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
