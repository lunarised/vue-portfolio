
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './routes/Home.vue'
import LiamMag from './routes/LiamMag.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

const Post = {
  render(h) { return h('div', '404POST. Not Found.') }
}
const routes = [

  { path: '/', component: Home },
  { path: '/Maggot', component: LiamMag }
  ,
  {
    path: '*',
    component: {
      render(h) { return h('div', '404. Not Found.') }
    }
  }
]


const router = new VueRouter({

  routes,
  mode: 'history'
})
// eslint-disable-next-line
const app = new Vue({
  router,
  ...App
}).$mount('#app')

