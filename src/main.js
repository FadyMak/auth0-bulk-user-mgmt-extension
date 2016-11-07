import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/index.js'

new Vue({
  el: '#app',
  store,
  components: { App },
  render: h => h(App)
})
