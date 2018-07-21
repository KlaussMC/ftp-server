const db = require('krakendb');
const ftp = require('ftp-srv');

db.setDefaultLocation(__dirname);
if (db.dbexists('settings'))
	db.loaddb('settings');
else {
	db.newdb("settings", ['port', 'anon', 'anon-un', 'publicIp'])
	db.exportdb();
}

// let server = new ftp()
