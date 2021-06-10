const inquirer = require('inquirer')
const chalk = require('chalk')

const questList = [
  {
    type: 'input', // 指明当前问题式输入性
    name: 'userName', // 这里的name 将来会用于从结果数据中解构我们当前的输入值
    message: '请输入您的姓名',
    // default: chalk.blue('dyk'),
    validate(val) {
      if (!val) {
        return '当前内容为必填项'
      } else {
        return true
      }
    }
  },
  {
    type: 'confirm',
    name: 'isInstall',
    message: '是否安装依赖'
  },
  {
    type: 'list', // 单选
    name: 'method',
    message: '请选择您的下载工具',
    choices: ['npm', 'cnpm', 'yarn'],
    when(a) {
      if (a.isInstall) {
        return true
      }
      return false
    }
  },
  {
    type: 'checkbox',  // 确认框
    name: 'feature',
    pageSize: 2,  // 一页放几个选项
    message: '选择默认安装',
    choices: ['webpack', 'vue', 'vueRouter', 'vuex', 'zce', 'NBA', 'CBA']
  }
]

// 所有问题都处理完的结果
inquirer.prompt(questList).then(answer => {
  console.log(answer)
})

/**
 * 01
*/