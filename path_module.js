const path = require('path');

console.log(path.sep);//get the separator specific to your system, i.e. the delimiter used in filepaths, in window's case, the forward slash /

const filePath = path.join('/content', 'subfolder', 'test.txt');//take parts of a file path and combines them into a full filepath using the system delimiter
console.log(filePath);

const base = path.basename(filePath);//gets the last part of a filepath. I dunno why this is useful

const absolute = path.resolve(__dirname,'content', 'subfolder', 'test.txt');//get absolute path, meaning the absolute full filepath
console.log(absolute);