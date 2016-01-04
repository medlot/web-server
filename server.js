var express = require('express');
var app = express();
var port = 3000;

var middleware = {
    requireAuthentification: function (req, res, next) {
        console.log('private route hit!');
        next();
    },
    logger: function (req, res, next) {
        console.log(req.method);
        next();
    }
};

//app.use(middleware.requireAuthentification);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentification, function (req, res) {
    res.send('About US');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log('Express server started on port :' + port);
});