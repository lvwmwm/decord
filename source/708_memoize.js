// Module ID: 708
// Function ID: 8721
// Name: memoize
// Dependencies: [591]

// Module 708 (memoize)
function memoize(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  if ("function" === typeof arg0) {
    function memoized() {
      const self = this;
      if (arg1) {
        let applyResult = arg1(...arguments);
      } else {
        applyResult = arguments[0];
      }
      const cache = memoized.cache;
      if (cache.has(applyResult)) {
        return cache.get(applyResult);
      } else {
        const applyResult1 = arg0(...arguments);
        memoized.cache = cache.set(applyResult, applyResult1) || cache;
        return applyResult1;
      }
    }
    const memoize = memoized;
    let Cache = memoize.Cache;
    if (!Cache) {
      Cache = require(dependencyMap[0]);
    }
    const prototype = Cache.prototype;
    const cache = new Cache();
    memoized.cache = cache;
    return memoized;
  }
  const typeError = new TypeError("Expected a function");
  throw typeError;
}
memoize.Cache = require("module_591");

export default memoize;
