import ArticleDetail from "@/views/ArticleDetail.vue";
import Layout from "@/views/Layout.vue";

import Vue from "vue";
import VueRouter from "vue-router";

import Article from "@/views/Article.vue";
import Collect from "@/views/Collect.vue";
import Like from "@/views/Like.vue";
import User from "@/views/User.vue";
import NotFind from "@/views/NotFind.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: history,
  routes: [
    {
      path: '/',
      redirect: '/layout',
    },
    {
      path: '/layout',
      component: Layout,
      children: [
        {
          path: '/article',
          component: Article
        },
        {
          path: '/collect',
          component: Collect
        },
        {
          path: 'like',
          component: Like
        },
        {
          path: 'user',
          component: User
        }
      ],
    },
    {
      path: '/detail/:id?',
      component: ArticleDetail,
    },
    {
      path: '*',
      component: NotFind,
    }
  ],
  linkActiveClass: 'active',
})

export default router