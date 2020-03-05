import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import index from '@/components/index/index'
import cars from '@/components/cars/cars'
import order from '@/components/order/order'

Vue.use(Router)
Vue.use(ElementUI)

// 重写路由的push和replace方法，解决在路由中添加相同的路由报错问题
const [routerPush, routerReplace] = [Router.prototype.push, Router.prototype.replace]
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
Router.prototype.replace = function replace (location) {
  return routerReplace.call(this, location).catch(error => error)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {path: '/cars', name: 'cars', component: cars},
        {path: '/orders', name: 'orders', component: order}
      ]
    }
  ]
})
