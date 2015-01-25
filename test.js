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
  var param1 = null
  var param2 = 'some string here'
  var param3 = Date.now()
  exit(param1, param2, param3, function () {
    var args = [].slice.apply(arguments)
    t.equal(args[0], param1, 'arguments are identical')
    t.equal(args[1], param2, 'arguments are identical')
    t.equal(args[2], param3, 'arguments are identical')
    t.end()
  })
})
