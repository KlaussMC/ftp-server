const db = require('krakendb');
const ftp = require('ftp-srv');

const { spawn } = require('child_process');

db.setDefaultLocation(__dirname);
if (db.dbexists('settings'))
	db.loaddb('settings');
else {
	db.newdb("settings", ['port', 'anon', 'anon-un', 'publicIp'])
	db.exportdb();
}

module.exports.startServer = function (profile) {
	spawn('node ./server.js', [profile])
}

// let server = new ftp()
