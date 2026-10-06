// Module ID: 697
// Function ID: 698
// Dependencies: [698, 699]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 697
import _mod698 from "module_698" /* 698 */;
import _mod699 from "module_699" /* 699 */;

function unwrapScopeFromWeakRef(deref) {
  const tmp = deref;
  if (tmp) {
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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  const obj = { scope: scope[_sentryScope], isolationScope: unwrapScopeFromWeakRef(scope[_sentryIsolationScope]) };
  return obj;
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  function wrapScopeWithWeakRef(arg0) {
    try {
      const _WeakRef = _mod698.GLOBAL_OBJ.WeakRef;
      if (typeof _WeakRef === "function") {
        const self = this;
        const self2 = this;
        const _WeakRef1 = new _WeakRef(arg0);
        return _WeakRef1;
      } else {
        return arg0;
      }
    } catch (err) {
    }
  }
  const tmp = arg0;
  if (tmp) {
    const obj = _mod699;
    const result = obj.addNonEnumerableProperty(arg0, _sentryIsolationScope, wrapScopeWithWeakRef(arg2));
    const obj2 = _mod699;
    const result1 = obj2.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
