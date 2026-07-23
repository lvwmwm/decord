// Module ID: 797
// Function ID: 8983
// Name: unwrapScopeFromWeakRef
// Dependencies: [798, 799]

// Module 797 (unwrapScopeFromWeakRef)
const require = arg1;
const dependencyMap = arg6;
function unwrapScopeFromWeakRef(_sentryIsolationScope) {
  if (_sentryIsolationScope) {
    if ("object" === typeof obj) {
      if ("deref" in obj) {
        if ("function" === typeof obj.deref) {
          return obj.deref();
        }
      }
    }
    return obj;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getCapturedScopesOnSpan = function getCapturedScopesOnSpan(_sentryScope) {
  return { scope: _sentryScope._sentryScope, isolationScope: unwrapScopeFromWeakRef(_sentryScope._sentryIsolationScope) };
};
arg5.setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    let addNonEnumerableProperty = require;
    let result1 = dependencyMap;
    let num = 1;
    let result = arg2;
    const _WeakRef = require(798).GLOBAL_OBJ.WeakRef;
    let tmp5 = _WeakRef;
    if ("function" === typeof _WeakRef) {
      const prototype = tmp5.prototype;
      tmp5 = new tmp5(result);
      result = obj.addNonEnumerableProperty(arg0, "_sentryIsolationScope", tmp5);
      result1 = addNonEnumerableProperty(result1[num]);
      addNonEnumerableProperty = result1.addNonEnumerableProperty;
      num = addNonEnumerableProperty(arg0, "_sentryScope", arg1);
    }
    tmp5 = result;
    obj = require(799) /* addNonEnumerableProperty */;
  }
};
