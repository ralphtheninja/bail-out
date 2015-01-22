module.exports = function (err, cb) {
  if (typeof err == 'string' || err instanceof Error) {
    if (typeof cb != 'function') throw new TypeError('Missing callback')
    process.nextTick(function () {
      cb(err instanceof Error ? err : new Error(err))
    })
  }
  else {
    throw new TypeError('Error message must be string or Error')
  }
}
