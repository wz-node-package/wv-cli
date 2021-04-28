/*
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-28 09:21:12
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-28 10:47:09
 */
console.clear()
const {promisify} =require('util')
const figlet = promisify(require('figlet'))//figlet特殊字符
const chalk = require('chalk')//颜色变化
const log = content=>console.log(chalk.green(content))//打印方法
const {clone} = require('./download')
module.exports =async (projectName,tamplateName)=>{
  const data = await figlet("wv-cli Welcome")
  log(data)
  log(`创建项目:  ${projectName}`)
  await clone(projectName,tamplateName)
}