// Module ID: 689
// Function ID: 690
// Name: unwrapScopeFromWeakRef
// Dependencies: [690, 691]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 689 (unwrapScopeFromWeakRef)
import _mod690 from "module_690" /* 690 */;
import _mod691 from "module_691" /* 691 */;

require = arg1;
const dependencyMap = arg6;
function unwrapScopeFromWeakRef(deref) {
  if (deref) {
    if (typeof deref === "object") {
      if ("deref" in deref) {
        if (typeof deref.deref === "function") {
          try {
            return deref.deref();
          } catch (err) {
          }
        }
      }
    }
    return deref;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: unwrapScopeFromWeakRef(scope[_sentryIsolationScope]) };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod691.addNonEnumerableProperty(arg0, _sentryIsolationScope, (function wrapScopeWithWeakRef(arg0) {
      try {
        const _WeakRef = _mod690.GLOBAL_OBJ.WeakRef;
        if (typeof _WeakRef === "function") {
          const _WeakRef1 = new _WeakRef(arg0);
          return _WeakRef1;
        } else {
          return arg0;
        }
      } catch (err) {
      }
    })(arg2));
    const result1 = _mod691.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
