const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const Schedule = require('node-schedule');

const upVersion = (version) => {
    let arr = version.split('.');
    let t = Number(arr[0]);
    let m = Number(arr[1]);
    let s = Number(arr[2]);
    return `${t}.${m}.${s + 1}`;
};

// 启动任务
let job = Schedule.scheduleJob('12 13 23 * * *', () => {
    const handGIT = (newversion) => {
        exec('git add .', (err) => {
            if (!err) {
                exec(`git commit -m "update: version:${newversion}"`, (err) => {
                    exec('git push', (error) => {
                        if (error) {
                            console.log(error, '---git push err');
                        } else {
			    exec('npm publish');
			}
                    })
                })
            }
        });
    }

    fs.readFile(path.join(__dirname, './package.json'), 'utf8', (err, data) => {
        if (err) {
            console.log(err, '读取package失败');
        } else {
            let obj = JSON.parse(data);
            
            obj.version = upVersion(obj.version);
            fs.writeFile(path.resolve(__dirname, './package.json'), JSON.stringify(obj), 'utf8', (error, data) => {
                if (error) {
                    console.log(err, '修改package失败');
                } else {
                    handGIT(obj.version);
                }
            });
        }
    })
});
