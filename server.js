
	var path = require('path');
	var express = require('express');
	var exphbs = require('express-handlebars');
	var fs = require('fs');
	var app = express();

	app.engine('handlebars', exphbs({defaultLayout: 'main'}));
	app.set('view engine', 'handlebars');

	var port = process.env.PORT || 3000;
	var info = [];
	app.get('/', function (req, res) {
	  res.status(200).render('index', {data: info}); //index: should you render create twit button 
	});

	app.use(express.static('public'));

	app.get('*', function (req, res) {
	  res.status(404).render('error');
	});

	app.listen(port, function () {
	  console.log("Server is listening on port ", port);
	});
