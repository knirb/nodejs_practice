var fs = require('fs');

fs.appendFile('someText.txt', 'Some content', (err) => {
  if (err) throw err;
  console.log('saved!')
})
