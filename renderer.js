// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Gain access to the node.js file system api
const remote = require('electron').remote
const {BrowserWindow} = require('electron').remote
const path = require('path')
const url = require('url')

$("#login-form").submit(function(e) {
   	e.preventDefault();
    // to be replaced with ajax call.
    var email = $("#email").val();
    var password = $("#password").val();

    if (true) {
        $("#login-form").fadeOut({
            complete: function() {
            	// Create the browser window for the main editing suite.
				AppWindow = new BrowserWindow({
					title: "Meat Fest Admin Editing Suite",
				    width: 800,
				    height: 400,
				    resizable: false,
				    frame: false
				})

  				// and load the main.html of the app.
  				AppWindow.loadURL(url.format({
    				pathname: path.join(__dirname, 'main.html'),
    				protocol: 'file:',
    				slashes: true
  				}))

  				// Open the DevTools.
  				// AppWindow.webContents.openDevTools()

  				// Emitted when the window is closed.
  				AppWindow.on('closed', function () {
    				// Dereference the window object, usually you would store windows
    				// in an array if your app supports multi windows, this is the time
    				// when you should delete the corresponding element.
    				AppWindow = null
  				})

  				remote.getCurrentWindow().close();
            }
        });
    }
});

$("#close-window").click(function() {
	remote.getCurrentWindow().close();
});