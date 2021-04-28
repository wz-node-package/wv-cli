/*
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-04-28 10:15:36
 * @LastEditors: Weize
 * @LastEditTime: 2021-04-28 11:12:17
 */
const {promisify} = require('util')
module.exports.clone = async function (projectName,tamplateName){
  const download = promisify(require('download-git-repo'))
  const ora = require('ora')
  const process = ora(`downloading...${projectName}`)
  process.start()
  console.log('projectName',projectName);
  console.log('tamplateName',`github:framework-templates/${tamplateName}`);
  await download(`github:framework-templates/${tamplateName}`,projectName)
  process.success()
}