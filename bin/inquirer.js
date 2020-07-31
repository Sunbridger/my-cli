const { prompt } = require('inquirer')

const promptList = [
  {
    type: 'input',
    name: 'name',
    message: '请输入文件夹名称',
    validate: function(val) {
      return !!val.trim() ? true : '请输入文件夹名称'
    }
  },
  {
    type: 'list',
    name: 'version',
    message: '请选择vue版本',
    choices: [
      '2.x',
      '3.x'
    ]
  }
]

module.exports = prompt(promptList);
