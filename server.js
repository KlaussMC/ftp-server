let db = require('krakendb');
let ftp = require('ftp-srv');

let profile = process.argv[2];

db.setDefaultLocation(__dirname);
db.loaddb('settings');

let anonymous = (db.getItem(profile, "anon") == true ? (db.getItem(profile, "anon-un") != "" ? d.getItem(profile, "anon-un") : true) : false);
console.log(anonymous)

let server = new ftp("ftp://" + (db.getItem(profile, "publicIp") ? "0.0.0.0" : "127.0.0.1") + ":" + db.getItem(profile, "port"), { anonymous })
