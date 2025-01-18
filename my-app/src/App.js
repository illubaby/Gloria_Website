const fs = require('fs');
const path = require('path');

const currentDir = __dirname;
console.log('Current Directory:', currentDir);

const files = fs.readdirSync(currentDir);
console.log('Files:', files);
