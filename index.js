const electron = require('electron'),
 	  dialog = require('electron-dialogbox'),
 	  url = require('url'),
 	  path = require('path'),
	  backend = require('./backend');

// const IPC = require('./ipc')

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow, optionsWindow

let profile = 1;

app.on("ready", () => {
	mainWindow = new BrowserWindow({});
	mainWindow.loadURL(url.format({
		pathname: path.join(path.join(__dirname, 'usr'), 'index.html'),
		protocol: 'file:',
		slashes: true }
	))
	const mainMenu = Menu.buildFromTemplate(mmt);
	Menu.setApplicationMenu(mainMenu);

	mainWindow.on('closed', app.quit)

	ipcMain.on('options', (e, options) => {
		console.log(options);
		backend.saveSettings(options, profile);
	})
	ipcMain.on("startServer", () => {
		backend.startServer(profile);
	})
})

let mmt = [
	{
		label: 'File',
		submenu: [
			{
				label: 'Options',
				accelerator: process.platform == "darwin" ? "Command+P" : "Ctrl+P",
				async click() {
					optionsWindow = new BrowserWindow({ width: 620, height: 360, frame: true, minimizable: false,  maximizable: false, resizable: false });
					optionsWindow.setMenu(null)
					optionsWindow.loadURL(url.format({
						pathname: path.join(path.join(__dirname, 'usr'), 'options.html'),
						protocol: 'file:',
						slashes: true }
					))
					optionsWindow.openDevTools()
				} // it's async because we want the server to keep running while this window is open.
			}
		]
	},
	{
		label: 'FTP',
		// submenu:
	}
]
