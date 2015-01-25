[![Build Status](https://travis-ci.org/ralphtheninja/bail-out.svg?branch=master)](https://travis-ci.org/ralphtheninja/bail-out)

# bail-out

Takes all parameters but the last (the callback) and calls the callback with the first parameters on `process.nextTick`. Use case is where you need to bail out early many times e.g. during validation.

It will not save your ass like [`dezalgo`](https://github.com/npm/dezalgo) does.

## Install

```
$ npm install bail-out --save
```

## Usage

With `bail-out`.

```js
var bail = require('bail-out')
var fs = require('fs')
var path = require('path')
var home = require('home-dir')

function checkThisOut(opts, cb) {
  if (typeof opts.foo != 'string') return bail(new Error('foo not string'), cb)
  fs.readFile(path.join(home(), opts.foo), cb)
}

function checkThatOut(opts, cb) {
  if (typeof opts.bar != 'number') return bail(new Error('bar not number'), cb)
  fs.readFile(path.join(home(), opts.bar), cb)
}
```

Without `bail-out`.

```js
var fs = require('fs')
var path = require('path')
var home = require('home-dir')

function checkThisOut(opts, cb) {
  if (typeof opts.foo != 'string') {
     return process.nextTick(function () {
       cb(new Error('foo not string'))
     })
  }
  fs.readFile(path.join(home(), opts.foo), cb)
}

function checkThatOut(opts, cb) {
  if (typeof opts.bar != 'number') {
     return process.nextTick(function () {
       cb(new Error('bar not number'))
     })
  }
  fs.readFile(path.join(home(), opts.bar, cb)
}
```

## License
All code, unless stated otherwise, is licensed under the [`WTFPL`](http://www.wtfpl.net/txt/copying/).


