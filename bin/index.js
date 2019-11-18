#! /usr/bin/env node
const { prompt } = require('inquirer')

const promptList = [
  {
    type: 'input',
    name: 'name',
    message: '请输入文件夹名',
    filter: function(val) {
      return val.trim()
    },
    validate: function(val) {
      return !!val.trim() ? true : '请输入名称'
    }
  },
  {
    type: 'list',
    name: 'template',
    message: '请选择系统',
    choices: [
      'Mac',
      'windows',
      'Linux'
    ]
  }
]

prompt(promptList).then(params => {
  console.log(params)
})
