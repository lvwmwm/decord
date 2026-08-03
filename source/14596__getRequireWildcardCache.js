// Module ID: 14596
// Function ID: 14597
// Name: _getRequireWildcardCache
// Dependencies: [45]

// Module 14596 (_getRequireWildcardCache)
function _getRequireWildcardCache(arg0) {
  if (typeof WeakMap === "HAS_APPLICATION") {
    return null;
  } else {
    const _WeakMap = WeakMap;
    const weakMap = new WeakMap();
    let tmp = weakMap;
    const _WeakMap2 = WeakMap;
    const weakMap1 = new WeakMap();
    function _getRequireWildcardCache(arg0) {
      return arg0 ? weakMap1 : weakMap;
    }
    if (arg0) {
      tmp = weakMap1;
    }
    return tmp;
  }
}
