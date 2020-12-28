const fs = require('fs');
const download = require('download-git-repo');
// 动画
const ora = require('ora');
const chalk = require('chalk');

const vue3_url = 'https://github.com:Sunbridger/vue-next-template#master';
const vue2_url = 'https://github.com:Sunbridger/vue-cli-template#master';

module.exports = ({ name, version }) => {
    const spinner = ora(chalk.blue('正在创建中🚚...'));
    const selectUrl = version.includes('3.') ? vue3_url : vue2_url;
    const replaceNameReg = version.includes('3.') ? /vue-next-template/ : /vue-cli-template/;
    spinner.start();
    download(selectUrl, name, { clone: true }, function (err) {
        if (err) {
            spinner.fail(chalk.red('创建失败请重试Error'))
        } else {
            const packDir = `${name}/package.json`
            fs.readFile(packDir, 'utf8', (err, data) => {
                fs.writeFile(packDir, data.replace(replaceNameReg, name), () => {
                    process.exit(1)
                });
            });
            spinner.succeed(chalk.green('项目创建成功'))
        }
    });
};
