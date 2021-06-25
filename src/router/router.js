import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Index from 'page/VIndex/index'
import Discover from 'page/VDiscover/discover'
import Order from 'page/VOrder/order'
import My from 'page/VMy/my'

const routes = [
  {
    path: '/index',
    component: Index
  },
  {
    path: '/discover',
    component: Discover
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/my',
    component: My
  }
]
export default new VueRouter({
  routes,
  mode: 'history'
})