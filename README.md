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
