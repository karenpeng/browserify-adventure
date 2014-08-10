/*
console.log('BEEP BOOP')
*/

/*
var uniq = require('uniq')
console.log(uniq(prompt().split(',')))
*/

/*
var uniquely = require('./uniquely.js')
console.log(uniquely(prompt()))
*/

/*
var ndjson = require('./ndjson.js')
var value1 = prompt()
var value2 = prompt()
console.log(ndjson.parse(value1))
console.log(ndjson.stringify(value2))
*/

/*
var url = require('url')
var queryString = require('querystring')

var add = prompt()
var urlObj = url.parse(add)
var queryPorperty = urlObj.query
var queryObj = queryString.parse(queryPorperty)
var fileAdd = url.resolve(add, queryObj.file)
console.log(fileAdd)
*/

/*
var domify = require('domify');
var html = '<div>Hello <span class="name"></span>!</div>';

module.exports = Widget;

function Widget() {
  if (!(this instanceof Widget)) return new Widget;
  this.element = domify(html);
}

Widget.prototype.setName = function (name) {
  this.element.querySelector('.name').textContent = name;
};

Widget.prototype.appendTo = function (target) {
  target.appendChild(this.element);
};
*/

/*
var fs = require('fs');
var src = fs.readFileSync(
  '/usr/local/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt',
  'utf8');
//console.log(src)
var splitSrc = src.split('\n');
//console.log(splitSrc)
var sprintf = require('sprintf');
for (var i = 0; i < splitSrc.length; i++) {
  if (i % 5 === 0) {
    console.log(sprintf("%3d %s", i, splitSrc[i]));
  } else {
    console.log(' ' + ' ' + ' ' + ' ' + splitSrc[i]);
  }
}
*/

// var txt =
//   '/usr/local/lib/node_modules/browserify-adventure/problems/writing_transforms/wake.txt'
// var tr = require('./tr')
// console.log(tr(txt));

var txt = require(
  '/usr/local/lib/node_modules/browserify-adventure/problems/writing_transforms/wake.txt'
);
console.log(txt);