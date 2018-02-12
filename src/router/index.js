import Vue from 'vue'
import Router from 'vue-router'
import mainFrame from '@/components/mainFrame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainFrame',
      component: mainFrame
    }
  ]
})
