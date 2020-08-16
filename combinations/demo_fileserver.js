var http = require('http'); //require is to use module
var url = require('url');
var fs = require('fs');
let server = http.createServer((req, res) => { //createserver
  var q = url.parse(req.url, true);
  var filename = '.' + q.pathname;;
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      });
      return res.end('404 Not Found');
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.write(data);
    return res.end();
  });
})
server.listen(8080)
