const axios = require('axios')
const ora = require('ora')
const inquirer = require('inquirer')

// 工具方法 添加耗时等待
const addLoading = async (fn) => {
  let spinner = ora('正在拉取......')
  spinner.start()
  try {
    let ret = await fn()
    spinner.succeed('拉取成功')
    return ret
  } catch (error) {
    spinner.fail('拉取失败')
  }
}
// 工具方法 获取仓库列表
const fetchRepoList = async () => {
  // let headers = { "Authorization": "token " + "9e91aa54a6749920ba47e784208f5ec32c16bbe3" }
  // let { data } = await axios({
  //   method: 'get',
  //   url: 'https://github.com/dongyuekai?tab=repositories',
  //   headers: headers
  // })
  let { data } = await axios.get('https://xxx')
  let repos = data.map(item => item.name)
  return repos
}
// 工具方法 获取tags列表
const fetchTagList = async () => {
  let { data } = await axios.get('https://xxxx/tags')
  let repoTags = data.map(item => item.name)
  return repoTags
}

module.exports = async function (proName) {
  // console.log('create执行了')
  // 查询：
  // 我们使用 vue-cli 创建一个项目，其实就是下载一个模板回来，请思考我们是从哪个地方下载内容
  // 此时我们自己造了一轮子，可以用于新项目创建，就是把我们常用的项目结构从远端下载回来
  // 所以这里的远端应该是一个共有平台，常见的就是 github 
  // 当前我在远端仓库放置了二个项目模板，一个叫 create-vue create-nm 

  // 01 利用工具来查询信息(axios ,当前是 github )
  // 默认情况下 api 访问有一个次数限制，每小时 60 次

  // 01：查询仓库名称

  // let repos = await addLoading(fetchRepoList)
  let repos = ['ts-vue', 'umi-hooks', 'cra-base-template']
  spinner.succeed('拉取成功')
  // 02 设置选项
  let question = {
    type: 'list',
    name: 'repoName',
    message: '请选择您要下载的模板',
    choices: repos
  }
  let { repoName } = await inquirer.prompt(question)
  console.log(repoName)
}