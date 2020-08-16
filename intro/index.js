var http = require('http');
var dt = require('./myFirstModule')

http.createServer((req,res) => {res.writeHead(200,{'Content-Type' : 'text/html'});
res.write('Date and time :' + dt.myDateTime());
res.end();
}).listen(8080)
