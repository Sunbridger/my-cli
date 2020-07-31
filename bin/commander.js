const { program } = require('commander');

program.version('2.1.0');

program
 .option('-d, --debug', 'output extra debugging')
 .option('-s, --small', 'small pizza size')
 .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);

module.exports = program;
