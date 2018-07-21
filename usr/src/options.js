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
			port:document.querySelector("#ftp-port").value,
			isPublic:document.querySelector("#public").checked,
			anonLogin:document.querySelector("#ftp-anonymous").checked,
			anonLoginUN:document.querySelector("#ftp-anonymous-username").value
		} || { port: 21, isPublic: true, anonLogin: true, anonLoginUN: '' };
	}
})();
