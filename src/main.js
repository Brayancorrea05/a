import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/tailwind.css"
import {dollarFilter,percentFilter}  from '@/filters'

//import {chart} from 'chart.js'
//import chartick from 'vue-chartkick'
//import { vueSpinners } from '@saeris/vue-spinners'


import VueSpinners from 'vue-spinners'
 
Vue.use(VueSpinners)


//Vue.use(chartick.use(chart))

Vue.filter('dollar',dollarFilter)
Vue.filter('percent',percentFilter)
Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
