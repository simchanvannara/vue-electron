import Vue from 'vue'
// import axios from 'axios'
import VueResource from 'vue-resource'

import App from './App'
import router from './router'
import store from './store'
import VueSocketio from 'vue-socket.io'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// Vue.use(axios)
Vue.use(VueResource)

Vue.use(VueSocketio, 'http://localhost:3001')
var vm = new Vue({
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    customEmit: function (val) {
      console.log('this method fired by socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods: {
    clickButton: function (val) {
      this.$socket.emit('emit_method', val)
    }
  }
})
console.log(vm)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
