(function () {
	const electron = require('electron');
	const { ipcRenderer } = electron;

	window.addEventListener('load', () => {
		document.querySelector('#button-save').addEventListener('click', e => {
			ipcRenderer.send('options', getOptions());
			window.close();
		})
		document.querySelector('#button-cancel').addEventListener('click', window.close)

	})

	var getOptions = () => {
		return {
			profile:Math.round(document.querySelector("#profile").value) || 1,
			port:Math.round(document.querySelector("#ftp-port").value) || 21,
			isPublic:document.querySelector("#public").checked || true,
			anonLogin:document.querySelector("#ftp-anonymous").checked || true,
			anonLoginUN:document.querySelector("#ftp-anonymous-username").value || ''
		} || { port: 21, isPublic: true, anonLogin: true, anonLoginUN: '' };
	}
})();

function setProfile(obj) {
	if (obj.value == "New Profile") {
		// console.log(obj.value);

		const dialog = require('electron-dialogbox'),

		console.log("new profile")
	}
}
