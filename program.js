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
var domify = require('domify')
var html = '<div>Hello <span class="name"></span>!</div>'

module.exports = widget;

function widget() {
  this.element = domify(html)
  if (!(this instanceof widget)) return new widget;
}
widget.prototype.setName = function (str) {
  var span = this.element.querySelector('.name')
  span.textContent(str)
}
widget.prototype.appendTo = function (target) {
  target.appendChild(this.element)
}
*/

var fs = require('fs');
var txt = fs.readFileSync(__dirname +
  '/../../problems/using_transforms/wake.txt', 'utf8');
var sprintf = require('sprintf');

var lines = txt.split('\n');
lines.forEach(function (line, index) {
  if (index % 5 === 0) {
    console.log(printf('%3d %s', index, line));
  } else {
    console.log('    ' + line);
  }
});