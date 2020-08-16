var fs = require('fs');

fs.open('someOtherText.txt', 'w', (err,file) => {
  if (err) throw err;
  console.log('Saved!')
});
