import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  router: [
    {
      path: '/',
      component: User
    },
    {
      patch: '/test',
      component: Test
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
