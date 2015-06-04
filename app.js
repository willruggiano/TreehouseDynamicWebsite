var router = require("./router.js");

var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(1337);
console.log('Server running at http://localhost:1337/');
