#! /usr/bin/env node

// 通过process可以访问到命令执行时的参数
// 我们可以自定义编码来实现对命令帮助信息的格式化处理  工具有 commander 或 yargs
const { program } = require('commander')

// 利用commander自定义动作命令
// 01 多条命令 自定义一个数据结构来存放多条命令的信息
const actionsMap = {
  'create': {
    alias: 'crt',
    des: '创建项目',
    examples: [
      'dykcli create <projectName>'
    ]
  },
  'config': {
    alias: 'cfg',
    des: '定义项目配置',
    examples: [
      'dykcli config set <k> <v>',
      'dykcli config get <k>'
    ]
  }
}
// 02 利用遍历操作配合 program 来将多个命令的信息渲染出来
Reflect.ownKeys(actionsMap).forEach((action) => {
  program
    .command(action)
    .alias(actionsMap[action].alias)
    .description(actionsMap[action].des)
    .action(() => {
      console.log(action, '执行了........')
    })
})

// 03 演示
program.on('--help', () => {
  console.log('Examples: ')
  Reflect.ownKeys(actionsMap).forEach(action => {
    actionsMap[action].examples.forEach(item => {
      console.log('  ' + item)
    })
  })
})

program.parse(process.argv)