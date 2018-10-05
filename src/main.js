import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
axios.defaults.headers.common['user-key'] = '475473671063848d66cec342fe9d48b2'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
