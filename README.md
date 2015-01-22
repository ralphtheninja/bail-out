# bail-out

Wraps `process.nextTick` and its callback around a call to a callback with an error. Can be useful if you want to exit out many times with an error e.g. during validation.

It will not save your ass like [`dezalgo`](https://github.com/npm/dezalgo) does.

## Install

```
$ npm install bail-out
```

## Usage

```js
var bail = require('bail-out')
var fs = require('fs')
var path = require('path')
var home = require('home-dir')

function checkThisOut(opts, cb) {
  if (typeof opts.foo != 'string') return bail('no foo string yo!', cb)
  if (typeof opts.bar != 'number') return bail('getting closer', cb)
  if (typeof opts.baz != 'string') return bail('one last check..', cb)
  fs.readFile(path.join(home(), opts.foo, opts.bar, opts.baz), cb)
}
```

## License
WTFPL


