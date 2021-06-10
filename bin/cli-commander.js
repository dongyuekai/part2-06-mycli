#! /usr/bin/env node

// console.log('running----')

// 通过process可以访问到命令执行时的参数
// 我们可以自定义编码来实现对命令帮助信息的格式化处理  工具有 commander 或 yargs
const { program } = require('commander')

// 利用commander自定义动作命令
program
  .command('create')
  .alias('crt')
  .description('创建一个项目')
  .action(() => {
    console.log('crt命令执行了--')
  })

program.parse(process.argv)