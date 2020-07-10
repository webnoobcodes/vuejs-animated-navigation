import Vue from 'vue'
import VueRouter from 'vue-router'

import Article from './views/Article'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
 
  routes: [
    { path: '', component: Article },
    { path: '/about', component: Article },
    { path: '/uses', component: Article },
    { path: '/blog', component: Article },
    { path: '/policy', component: Article },
  ]
})