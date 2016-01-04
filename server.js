var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

//app.use(middleware.requireAuthentification);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentification, function (req, res) {
    res.send('About US');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('Express server started on port :' + PORT);
});