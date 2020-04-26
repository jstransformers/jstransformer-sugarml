# jstransformer-sugarml

[SugarML](https://github.com/reshape/sugarml) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-sugarml/master.svg)](https://travis-ci.org/jstransformers/jstransformer-sugarml)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-sugarml/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-sugarml)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-sugarml/master.svg)](http://david-dm.org/jstransformers/jstransformer-sugarml)

[![NPM version](https://img.shields.io/npm/v/jstransformer-sugarml.svg)](https://www.npmjs.org/package/jstransformer-sugarml)

## Installation

    npm install jstransformer-sugarml

## API

```js
var sugarml = require('jstransformer')(require('jstransformer-sugarml'))

sugarml.render('h1 hi').body
//=> '<h1>hi</h1>'
```

## License

MIT
