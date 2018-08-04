const db = require('krakendb');
const ftp = require('ftp-srv');

const { spawn } = require('child_process');

let server;

db.setDefaultLocation(__dirname);
if (db.dbexists('settings'))
	db.loaddb('settings');
else {
	db.newdb("settings", ['port', 'anon', 'anon-un', 'publicIp'])
	db.exportdb();
}

module.exports.saveSettings = options => {
	// db.setItem()
}
module.exports.startServer = function (profile) {
	// server = spawn('node ./server.js', [profile]);
}
