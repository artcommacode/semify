var semi = require('semi')
var util = require('util')
var transformTools = require('browserify-transform-tools')
var options = {includeExtensions: ['.js']}

semi.on('error', function (error) {
  throw new Error(util.format('%s at %d:%d', error.message, error.line, error.column))
})

module.exports = transformTools.makeStringTransform("semify", options, function (content, transformOptions, done) {
  done(null, semi.add(content))
})
