/*
 * @Author: your name
 * @Date: 2021-06-24 16:15:01
 * @LastEditTime: 2021-06-25 13:16:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2.0\src\http\axios.js
 */
import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
Vue.axios = Vue.prototype.$axios = axios

Vue.use(Qs)

export default { 
  /*
  * get方法,对应get请求
  * @param {String} url [请求的地址]
  * @param {Object} params [请求时携带的参数]
  */
  get (url, params) { 
    return new Promise((resolve,reject) => { 
      axios.get(url, {params: params})
      .then(res => {
        resolve(res.data)
      }).catch(err => { 
        reject(err.data)
      })
    })
  },
  /*
  * post方法,对应get请求
  * @param {String} url [请求的地址]
  * @param {Object} params [请求时传递的参数]
  */
  post (url, params) { 
    return new Promise((resolve,reject) => { 
      axios.post(url, QS.stringify(params))
      .then(res => { 
        resolve(res.data)
      }).catch(err => { 
        reject(err.data)
      })
    })
  }
}



