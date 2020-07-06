
import Vue from 'vue'

import App from './App.vue'
import VModal from 'vue-js-modal'

import VueScrollactive from 'vue-scrollactive'
Vue.use(VueScrollactive);
Vue.use(VModal, { dialog: true });
Vue.config.productionTip = false

// eslint-disable-next-line
const app = new Vue({
  ...App
}).$mount('#app')

