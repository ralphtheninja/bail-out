var test = require('tape')
var exit = require('./')

test('throws errors on invalid parameters', function (t) {
  var msg = /Error message must be string or Error/
  t.throws(function () { exit() }, /Error message must be string or Error/)
  t.throws(function () { exit(5) }, /Error message must be string or Error/)
  t.throws(function () { exit('foo') }, /Missing callback/)
  t.end()
})

test('does not throw on valid parameters', function (t) {
  t.doesNotThrow(function () { exit('foo', function () {}) })
  exit('bar', function () {
    t.end()
  })
})

test('string parameter converts to Error in callback', function (t) {
  var msg = 'some error message'
  exit(msg, function (err) {
    t.ok(err && err instanceof Error, 'There is an error')
    t.equal(err.message, msg)
    t.end()
  })
})

test('Error parameter is used in callback', function (t) {
  var msg = new Error('some error message')
  exit(msg, function (err) {
    t.ok(err && err instanceof Error, 'There is an error')
    t.deepEqual(err, msg)
    t.end()
  })
})

