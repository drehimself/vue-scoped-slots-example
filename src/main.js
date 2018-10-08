import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
axios.defaults.headers.common['user-key'] = 'GET_YOUR_OWN_KEY'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
