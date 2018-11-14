# assert-array [![Build Status](https://travis-ci.org/bendrucker/assert-array.svg?branch=master)](https://travis-ci.org/bendrucker/assert-array) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/assert-array.svg)](https://greenkeeper.io/)

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
