var through = require('through2');
var fs = require('fs');
var sprintf = require('sprintf');
var concat = require('concat-stream');

module.exports = function (file) {
  if (!/\.txt$/.test(file)) return through();

  // var read = fs.createReadStream(file);
  // var write = concate(function (data) {
  //   var splitData = data.split('\n');
  //   var whatever = [];
  //   for (var i = 0; i < splitData.length; i++) {
  //     if (i % 5 === 0) {
  //       whatever.push(sprintf("%3d %s", i, splitData[i]));
  //     } else {
  //       whatever.push(' ' + ' ' + ' ' + ' ' + splitData[i]);
  //     }
  //   }
  // });
  // return whatever;
};