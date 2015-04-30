var semi = require('semi')
var util = require('util')
var transform = require('browserify-transform-tools').makeStringTransform
var options = {includeExtensions: ['.js']}

semi.on('error', function (error) {
  throw new Error(util.format('%s at %d:%d', error.message, error.line, error.column))
})

module.exports = transform("semify", options, function (content, _, done) {
  done(null, semi.add(content))
})
