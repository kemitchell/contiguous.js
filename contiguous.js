module.exports = function(array, predicate) {
  var lastResult = true;
  return array.some(function(element, index, list) {
    if (index === 0) {
      return false;
    } else {
      var currentResult = predicate(element);
      if (lastResult && currentResult) {
        return true;
      } else {
        lastResult = currentResult;
      }
    }
  });
}
