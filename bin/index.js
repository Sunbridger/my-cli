#! /usr/bin/env node
const inq = require('./inquirer');
const download = require('./downloadcode');
const command = require('./commander');

inq.then((params) => {
    download(params.name);
});
