'use strict'

import axios from 'axios'
import { Message } from 'element-ui'

/**
 * 封装axios
 * @param options
 * @returns {Promise}
 */
export default function fetch(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: process.env.BASE_API,
      timeout: 15000 // 请求超时时间
    })
    instance.interceptors.request.use(
      config => {
        return config
      },
      err => {
        return Promise.reject(err)
      })

    instance.interceptors.response.use(
      response => {
        return response
      },
      error => {
        return Promise.reject(error) // 返回接口返回的错误信息
      })

    // 请求处理
    instance(options)
      .then((res) => {
        var result = res.data
        // 统一处理错误
        if (result === null || result === undefined) {
          console.log(res)
          Message({
            message: '系统错误',
            type: 'error',
            duration: 5 * 1000
          })
          return false
        }
        if (result.code !== 0) {
          console.log(result.msg)
          Message({
            message: result.msg,
            type: 'error',
            duration: 5 * 1000
          })
          return false
        }
        resolve(res.data)
        return false
      })
      .catch((error) => {
        reject(error)
      })
  })
}
