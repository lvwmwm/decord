// Module ID: 708
// Function ID: 8723
// Name: memoize
// Dependencies: [709]

// Module 708 (memoize)
function memoize(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  if ("function" === typeof arg0) {
    function memoized() {
      const self = this;
      if (callback2) {
        let applyResult = callback2(...arguments);
      } else {
        applyResult = arguments[0];
      }
      const cache = memoized.cache;
      if (cache.has(applyResult)) {
        return cache.get(applyResult);
      } else {
        const applyResult1 = callback(...arguments);
        memoized.cache = cache.set(applyResult, applyResult1) || cache;
        return applyResult1;
      }
    }
    let Cache = memoized.Cache;
    if (!Cache) {
      Cache = _require(709);
    }
    const prototype = Cache.prototype;
    let cache = new Cache();
    memoized.cache = cache;
    return memoized;
  }
  const typeError = new TypeError("Expected a function");
  throw typeError;
}
memoize.Cache = require("MapCache");

export default memoize;
