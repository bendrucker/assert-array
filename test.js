'use strict'

var test = require('tape')
var assertArray = require('./')

test(function (t) {
  t.doesNotThrow(assertArray.bind(null, []))
  t.throws(assertArray.bind(null, 'foo'), 'Expected array, got string')
  t.end()
})
