const fs = require('fs');

module.exports = function cat(cmd, arg) {
	if (cmd === 'cat') {
		fs.readFile(arg, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				process.stdout.write(`${data.toString()} \n`);
				process.stdout.write('prompt > ');
			}
		})
	}
}