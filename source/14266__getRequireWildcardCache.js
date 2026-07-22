// Module ID: 14266
// Function ID: 107830
// Name: _getRequireWildcardCache
// Dependencies: []

// Module 14266 (_getRequireWildcardCache)
function _getRequireWildcardCache(arg0) {
  if ("function" !== typeof WeakMap) {
    return null;
  } else {
    const _WeakMap = WeakMap;
    const weakMap = new WeakMap();
    const require = weakMap;
    const _WeakMap2 = WeakMap;
    const weakMap1 = new WeakMap();
    const dependencyMap = weakMap1;
    function _getRequireWildcardCache(arg0) {
      return arg0 ? weakMap1 : weakMap;
    }
    return _getRequireWildcardCache(arg0);
  }
}
