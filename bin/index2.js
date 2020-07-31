#! /usr/bin/env node
const chalk = require('chalk');
const { program } = require('commander');
const download = require('./downloadcode');

program.version('2.1.0');

program
    .command('init <project>')
    .description(chalk.blue('初始化项目模板'))
    .action((env) => {
        download(env);
    });

program
    .command('info')
    .description(chalk.blue('created by Sunbridger'));


program
    .command('use')
    .description('Sunbridger OR sun init <projectName>')
    .action((env) => {
        const name = env.args[0] || 'projectName';
        console.log(`please use: \n ${chalk.green('Sunbridger')} ${name} \n ${chalk.green('sun init')} ${name} \n  one of to create new project,thanks.`);
    });

program.parse(process.argv);
