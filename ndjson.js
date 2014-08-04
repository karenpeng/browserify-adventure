// module.exports = function () {

// }

// module.exports.prorotype.parse = function (str) {
//   var objs = [];
//   for (var i = 0; i < str.length; i++) {
//     objs.push(JSON.parse(str[i]))
//   }
//   return objs;
// }

// module.exports.prorotype.stringify = function (row) {
//   var string;
//   for (var i = 0; i < row.length; i++) {
//     string += JSON.stringify(row[i])
//   }
//   return string;
// }

/*
exports.parse = function (str) {
  var objs = [];
  var breakStr = str.split('\n')
  for (var i = 0; i < breakStr.lenght; i++) {
    var item = JSON.parse(breakStr[i])
      //console.log(item)
    objs.push(item)
  }
  return objs;
}

exports.stringify = function (row) {
  var string;
  for (var i = 0; i < row.length; i++) {
    var item = JSON.stringify(row[i])
      //console.log(item)
    string += item
  }
  return string;
}
*/

exports.parse = function (str) {
  return str.split('\n').map(JSON.parse);
};

exports.stringify = function (rows) {
  return rows.map(JSON.stringify).join('\n');
};