#! /usr/bin/env node
const inq = require('./inquirer');
const download = require('./downloadcode');

inq.then((params) => {
    download(params);
});
