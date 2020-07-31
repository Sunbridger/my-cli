const download = require('download-git-repo');
// 动画
const ora = require('ora');
const chalk = require('chalk');

module.exports = (name) => {
    const spinner = ora('正在创建中🚚...');
    spinner.start();
    download('https://github.com:Sunbridger/vue-cli-template#master', name, { clone: true }, function (err) {
        spinner.stop();
        console.log(err ? chalk.red('创建失败请重试Error') : chalk.green('创建成功'))
        process.exit(1);
    });
};
