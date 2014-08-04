var uniq = require('uniq')

module.exports = function (xs) {

  return uniq(xs.split(','))

}