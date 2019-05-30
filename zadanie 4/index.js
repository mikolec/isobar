/**
 * Korzystając z node.js zmień nazwę pliku z example.json na sample.json
 */

const fs = require('fs');

const srcFileName = 'example.json';
const dstFileName = 'sample.json';

// const srcFileName = 'sample.json';
// const dstFileName = 'example.json';

fs.rename(srcFileName, dstFileName, err => {
  if (err) return console.log(err);
  console.log(`file name changed from: ${srcFileName} to: ${dstFileName}`);
});
