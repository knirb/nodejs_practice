var fs = require('fs');

fs.writeFile('someAdditionalText.txt', 'Content!', (err) =>{
  if (err) throw err
  console.log('Saved!')
});
