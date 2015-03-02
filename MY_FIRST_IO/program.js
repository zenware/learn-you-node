// Read a file and print the number of newlines to the console
var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var string = buffer.toString();
var lines = string.split('\n').length - 1;

console.log(lines);
