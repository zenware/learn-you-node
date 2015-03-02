// This module exports a single function that outputs a list
// of files in a given directory that have a particular extension.
var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, cb) {
  var dot_ext = '.' + ext;

  fs.readdir(dir, function(err, list) {
    if (!err) {
      var data = Array();
      list.forEach(function (file) {
        if (path.extname(file) === dot_ext)
          { data.push(file); }
      });
      cb(null, data);
    } else {
      return cb(err);
    }
  });
}
