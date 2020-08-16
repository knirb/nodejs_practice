var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');

rs.on('open', () => { //rs.on waits until the readStream is available before doing something
  console.log('The file is open')
});
