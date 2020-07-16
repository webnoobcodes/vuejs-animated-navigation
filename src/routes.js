import Vue from 'vue'
import VueRouter from 'vue-router'

import Article from './views/Article'
import Test from './views/Test'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
 
  routes: [
    { path: '', component: Article },
    { path: '/about', component: Test },
    { path: '/uses', component: Article },
    { path: '/blog', component: Article },
    { path: '/policy', component: Article },
  ]
})