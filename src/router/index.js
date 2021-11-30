import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Redirect2Url from '../views/Redirect2Url'

Vue.use(VueRouter)

const routes = [
  
  {
     path: '/',
     redirect: '/app'
   },
  {
    path: '/app',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:kurl',
    name: 'Redirect2Url',
    component: Redirect2Url,
  },


]

console.log(routes.path)

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
