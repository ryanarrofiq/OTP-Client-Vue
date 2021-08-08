import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'
import LoggedInArea from '@/components/LoggedInArea'
import user from '@/library/user'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HelloWorld},
  { path: '/login', name: 'about', component: Login},
  { path: '/member-area', name: 'member-area', component: LoggedInArea, beforeEnter: (to, from, next) => {
    if (!user.isLoggedIn()) {
      next('/')
    }
  }},
  { path: '/logout', beforeEnter: (to, from, next) => {
    user.logout()
      .then(() => {
        console.log('logout')
        next('/')
      })
  }}
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

export default router
