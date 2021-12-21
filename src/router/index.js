import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import error from '../views/error.vue'
import CoinDetail from '@/views/coinDetail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',//url que no exista
    name: 'error',
    component: error
  },
  {
    path: '/coin/:id',
    name:'coin-detail',
    component: CoinDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
