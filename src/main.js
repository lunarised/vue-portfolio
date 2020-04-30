
import Vue from 'vue'

import App from './App.vue'

import VueScrollactive from 'vue-scrollactive'
Vue.use(VueScrollactive);

Vue.config.productionTip = false

// eslint-disable-next-line
const app = new Vue({
  ...App
}).$mount('#app')

