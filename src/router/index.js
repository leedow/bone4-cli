import Vue from 'vue'
import VueRouter from 'vue-router'
import demo from './demo'
import demoHome from './demo-home'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    demoHome,
    demo
  ]
})
