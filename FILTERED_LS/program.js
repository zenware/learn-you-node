// Print a list of files in a directory, filtered by extension.
var fs = require('fs');
var path = require('path');

// Store arguments as variables.
var directory = process.argv[2];
var extension = '.' + process.argv[3];

fs.readdir(directory, function (err, list) {
  if (!err) {
    list.forEach(function (file) {
      if (path.extname(file) === extension)
        { console.log(file); }
    });
  } else {
    console.log('Error: ' + err);
  }
});
