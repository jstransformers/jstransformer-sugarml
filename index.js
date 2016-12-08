'use strict';

var reshape = require('reshape');
var sugarml = require('sugarml');

exports.name = 'sugarml';
exports.inputFormats = ['sml'];
exports.outputFormat = 'html';

exports.renderAsync = function (str, options, locals) {
  options.parser = sugarml;
  if (locals) {console.error('jstransformer-sugarml does not support locals. Use jstransformer-reshape with sugarml as an input instead')}
  return reshape(options)
    .process(str)
    .then(result => result.output());
};
