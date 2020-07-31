const download = require('download-git-repo');
// 动画
const ora = require('ora');

module.exports = (name) => {
    const spinner = ora('正在创建中🚚...');
    spinner.start();
    download('https://github.com:Sunbridger/vue-cli-template#master', name, { clone: true }, function (err) {
        spinner.stop();
        console.log(err ? '创建失败请重试Error' : '创建成功')
        process.exit(1);
    });
};
