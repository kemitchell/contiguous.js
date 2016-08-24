module.exports = function (array, predicate) {
  var lastResult = true
  return array.some(function (element, index) {
    var currentResult = predicate(element)
    if (index === 0) {
      lastResult = currentResult
      return false
    } else {
      if (lastResult && currentResult) {
        return true
      } else {
        lastResult = currentResult
      }
    }
  })
}
