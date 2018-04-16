'use strict'

const reshape = require('reshape')
const sugarml = require('sugarml')
const extend = require('extend-shallow')

exports.name = 'sugarml'
exports.inputFormats = ['sml', 'sugarml']
exports.outputFormat = 'html'

exports.renderAsync = function (str, options, locals) {
  extend(options, locals)
  options.parser = sugarml
  return reshape(options)
    .process(str)
    .then(result => result.output())
}
