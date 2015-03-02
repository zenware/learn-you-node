// Print a list of files in a directory, filtered by extension.
// Use a modular program architecture.
var fls = require('./filtered_ls');

// Store arguments as variables.
var directory = process.argv[2];
var extension = process.argv[3];

fls(directory, extension, function (err, data) {
  if (!err) {
    data.forEach(function (file) {
      console.log(file);
    });
  } else {
    console.error('Error: ' + err);
  }
});
