import Vue from 'vue'
import App from './App'

require('./assets/nifty.min.css')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
