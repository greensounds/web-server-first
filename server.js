var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAthentication: function (req, res, next) {
		console.log('Private');
		next();
	},
	logger: function (req, res, next) {
		console.log( new Date().toString() + req.method + ' ' + req.originalUrl );
		next();
	}
} 

app.use(middleware.logger);

app.use(express.static(__dirname + '/public'));

app.get('/about', function (req, res) {
	res.send('Hola acerca');
})



app.listen(PORT, function() {
	console.log('El servidor esta corriendo, puerto ' + PORT);
});

