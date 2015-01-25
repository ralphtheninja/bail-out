function bail() {

  var args = [].slice.apply(arguments)
  if (!args.length) throw new TypeError('Missing callback')

  var cb = args[args.length - 1]
  if (typeof cb != 'function') throw new TypeError('Missing callback')

  process.nextTick(function () {
    cb.apply(null, args)
  })

}

module.exports = bail
