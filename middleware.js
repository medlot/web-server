// Use module exports to expose middleware; 

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

module.exports = middleware;