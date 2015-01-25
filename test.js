var test = require('tape')
var exit = require('./')

test('throws errors on invalid parameters', function (t) {
  var msg = /Error message must be string or Error/
  t.throws(function () { exit() }, /Missing callback/)
  t.throws(function () { exit(5) }, /Missing callback/)
  t.throws(function () { exit('foo') }, /Missing callback/)
  t.end()
})

test('does not throw on valid parameters', function (t) {
  t.doesNotThrow(function () { exit('foo', function () {}) })
  exit('bar', function () {
    t.end()
  })
})

test('callback is called with correct parameters', function (t) {
  var msg = 'some error message'
  var cb = function () {
    var _args = [].slice.apply(arguments)
    t.deepEqual(_args, args, 'arguments are identical')
    t.end()
  }
  var args = [ null, msg, cb ]
  exit.apply(null, args)
})
