const cat = require('./cat');
const ls = require('./ls');
const pwd = require('./pwd');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
	const cmd = data.toString().trim().split(' ')[0];
	const args = data.toString().trim().split(' ').slice(1);
	pwd(cmd);
	ls(cmd);
	cat(cmd, args[0]);
	process.stdout.write('\nprompt > \n');
});