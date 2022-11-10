const fs = require('fs')
const path = require('path')

//本地和线上地址
const mockBaseURL = 'http://localhost:3000'
const realBaseURL = 'http://note-server.hunger-valley.com'

//配置字符串成开发环境
exports.config = function({ isDev = true } = {isDev: true}) {
  let fileTxt = `
  module.exports = {
    baseURL: '${isDev ? mockBaseURL : realBaseURL}'
  }
  `
  fs.writeFileSync(path.join(__dirname, '../src/helpers/config-baseURL.js'), fileTxt)
}