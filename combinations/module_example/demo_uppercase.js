var http = require('http');
var uc = require('upper-case');
let server = http.createServer((req,res) =>{
  res.writeHead(200, {'Content-Type' : 'text/html'})
  res.write(uc.upperCase('Hello World!'))
  res.end()
})
server.listen(8080)
