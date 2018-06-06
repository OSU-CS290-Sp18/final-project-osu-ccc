
	var path = require('path');
	var express = require('express');
	var exphbs = require('express-handlebars');
	var fs = require('fs');
	var app = express();
	var coinDataArray = require('./coinData');
	app.engine('handlebars', exphbs({defaultLayout: 'main'}));
	app.set('view engine', 'handlebars');

	var port = process.env.PORT || 3000;
	var info = [];
	app.get('/', function (req, res) {
	  res.status(200).render('index', {data: info}); //index: should you render create twit button
	});

	app.use(express.static('public'));

	app.get('/test',function(req,res,next){
		console.log("in test");

		res.status(200).render('coincaller', {
			 coin_array: coinDataArray
			// coinFullName: "Icon",
			// coinName: "icx",
			// currentPrice: 2.56,
			// priceChange: -9.51,
			// marketCap:990015027,
			// twentyFourHrVolume:33665500,
			// dataset:[2.79,2.75,2.70,2.74,2.71,2.66,2.81,2.67,2.55,2.44,2.75,2.74,2.69,2.78,2.65,2.56,2.45,2.54,2.76,2.96,2.45,2.46,2.55,2.56]

		});

	});

	app.get('*', function (req, res) {
	  res.status(404).render('error');
	});

	app.listen(port, function () {
	  console.log("Server is listening on port ", port);
	});
