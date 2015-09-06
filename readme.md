# assert-array [![Build Status](https://travis-ci.org/bendrucker/assert-array.svg?branch=master)](https://travis-ci.org/bendrucker/assert-array)

> Assert that a value is an array


## Install

```
$ npm install --save assert-array
```


## Usage

```js
var assertArray = require('assert-array')

assertArray([])
//=> noop

assertArray('foo')
//=> throw new Error('Expected array, got string')
```


## License

MIT © [Ben Drucker](http://bendrucker.me)
