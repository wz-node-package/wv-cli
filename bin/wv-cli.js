#!/usr/bin/env node
const init = require('../lib/init.js')
const program = require("commander");//命令模块
program.version(require("../package.json").version); //声明版本
program
  .command("init <projectName> <templateName>") //声明命令
  .description("init a project") //命令描述
  .action(init);//回调函数

program.parse(process.argv); //命令行参数解析
