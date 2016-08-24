contiguous.js
=============

[![NPM version](https://img.shields.io/npm/v/contiguous.svg)](https://www.npmjs.com/package/contiguous)
[![build status](https://img.shields.io/travis/kemitchell/contiguous.js.svg)](http://travis-ci.org/kemitchell/contiguous.js)

Check an Array for contiguous elements matching a predicate.

```javascript
var contiguous = require('contiguous')

var isX = function(value) { return value === 'x'; }

contiguous(['x', 'x'], isX) // === true

contiguous(['x', 'y'], isX) // === false

contiguous(['y', 'x'], isX) // === false

contiguous([], isX) // === false

contiguous(['x'], isX) // === false

contiguous(['y'], isX) // === false
```
