import axios from 'axios'
import baseURLConfig from './config-baseURL'

console.log(baseURLConfig)

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//axios.defaults.baseURL = 'https://note-server.hunger-valley.com/'
//开发环境测试
axios.defaults.baseURL = baseURLConfig.baseURL
//使用跨域请求，并带上cookie
axios.defaults.withCredentials = true

export default function request(url, type= 'GET', data = {} ) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type,
      //验证状态码成功的执行，失败的catch
      validateStatus(status) {
        return (status >= 200 && status < 300) || status === 400
      }
    }
    if(type.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }
    axios(option).then(res => {
      if(res.status === 200) {
        resolve(res.data)
      }else {
        reject(res.data)
      }
    }).catch(err => {
      reject({msg: '网络异常'})
    })
  })
}
//export导出后供组件使用axios
// request('/auth/login', 'POST', {username: 'hunger', password: '123456'})
//   .then(data => {
//     console.log(data)
//   })