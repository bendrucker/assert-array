'use strict'

var assert = require('assert-ok')

module.exports = function assertArray (value) {
  assert(Array.isArray(value), 'Expected array, got ' + typeof value)
}
