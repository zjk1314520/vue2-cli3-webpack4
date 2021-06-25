/*
 * @Author: your name
 * @Date: 2021-06-21 10:10:43
 * @LastEditTime: 2021-06-25 11:21:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2.0\src\main.js
 */
import Vue from 'vue'
import App from './Index.vue'
import router from '@/router/router'
import store from '@/store/store'
import '@/assets/font/iconfont.css'
import axios from './http/axios'

Vue.prototype.axios = axios
Vue.config.productionTip = false

// 重定向
router.beforeEach((to, from, next) => {
  if (to.path == '/') {
    next('/index')
  }
  next()
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
