import Vue from 'vue'
import Router from 'vue-router'
import Timeline from './views/timeline.vue'
import Profile from './views/profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile
    }
  ]
})
