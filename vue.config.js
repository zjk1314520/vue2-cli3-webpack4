/*
 * @Author: your name
 * @Date: 2021-06-21 10:57:38
 * @LastEditTime: 2021-06-24 10:58:17
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue2.0\vue.config.js
 */
const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname,dir)
}

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "@/commen/scss/reset.scss";`
            }
        }
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.scss','.json'],
            alias: {
                '@': resolve('src'),
                'util': resolve('src/utils'),
                'page': resolve('src/pages'),
                'commen': resolve('src/commen')
            }
        }
    }
}