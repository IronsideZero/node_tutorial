//using the Sync versions of these means that the code runs synchronously. If a task for a user takes a long time, nothing else can happen while that is executing
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/result-sync.txt',`The combined result of first and second files: ${first}, ${second}`,{flag: 'a'});//third parameter is optional, and is an object. If flag property is set to 'a', then it will append rather than overwrite the file

console.log('Task complete');
console.log('Starting next task');