const { prompt } = require('inquirer');
const chalk = require('chalk');

const promptList = [
  {
    type: 'input',
    name: 'name',
    message: chalk.blue('请输入文件夹名称'),
    validate: function(val) {
      return !!val.trim() ? true : chalk.red('请输入文件夹名称')
    }
  },
  {
    type: 'list',
    name: 'version',
    message: chalk.blue('请选择vue版本'),
    choices: [
      '2.x',
      '3.x'
    ]
  }
]

module.exports = prompt(promptList);
