import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage')
    },
    {
      path: '/chat',
      name: 'chat-page',
      component: require('@/components/ChatPage')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
