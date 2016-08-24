```javascript
var contiguous = require('contiguous')
var assert = require('assert')

var isX = function(value) {
  return value === 'x'
}

assert(contiguous(['x', 'x'], isX) === true)

assert(contiguous(['x', 'y'], isX) === false)

assert(contiguous(['y', 'x'], isX) === false)

assert(contiguous([], isX) === false)

assert(contiguous(['x'], isX) === false)

assert(contiguous(['y'], isX) === false)
```
