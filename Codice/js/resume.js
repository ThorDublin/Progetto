
function createFile(
	var fs = require('fs');
	var dir = 'Registrazioni';
	if (!fs.existsSync(dir)){
		fs.mkdirSync(dir);
	}
)
createFile();