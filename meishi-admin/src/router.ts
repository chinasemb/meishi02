import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Main from '@/views/main.vue'
import Recommend from '@/views/recommend.vue'
import Category from '@/views/category.vue'
import Comment from '@/views/comment.vue'
import Favorite from '@/views/favorite.vue'
import Food from '@/views/food.vue'
import User from '@/views/user.vue'
import Catemenu from '@/views/catemenu.vue'
import store from './store';

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
      path: '/recommend',
      component: Recommend,
      name:'/recommend'
   },
   {
     path: '/category',
     component: Category,
     name:'/category'
   },
   {
     path: '/comment',
     component: Comment,
     name:'/comment'
   },
   {
     path: '/favorite',
     component: Favorite,
     name:'/favorite'
   },
   {
     path: '/food',
     component: Food,
     name:'/food'
   },
   {
     path: '/',
     component: Main,
     name:'/'
   },
   {
     path: '/user',
     component: User,
     name:'/user'
   },
   {
     path: '/catemenu',
     component: Catemenu,
     name:'/catemenu'
   },
  ]
})

router.beforeEach( (to, from , next) => {
  // console.log(to)
  store.commit('setRouterName',to.name)
  next()
} )

export default router
