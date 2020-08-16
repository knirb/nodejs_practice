var fs = require('fs');

fs.unlink('someOtherText.txt', err => {
  if (err) throw err;
  console.log('deleted a file!!!');
});
