	var path = require('path');
	var express = require('express');
	var fs = require('fs');
	var app = express();

	var port = process.env.PORT || 3000;
	
	app.use(express.static('public'));

	app.get('*', function (req, res) { //if its anything else than a specified URL (*)...
	  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
	});

	app.listen(port, function () {
	  console.log("Server is listening on port ", port);
	});
