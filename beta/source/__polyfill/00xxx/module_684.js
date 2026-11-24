// Module ID: 684
// Function ID: 685
// Dependencies: [685, 686]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 684
import _mod685 from "module_685" /* 685 */;
import _mod686 from "module_686" /* 686 */;

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

export function getCapturedScopesOnSpan(self) {
  const obj = { scope: self[_sentryScope], isolationScope: unwrapScopeFromWeakRef(self[_sentryIsolationScope]) };
  return obj;
}
export function setCapturedScopesOnSpan(sentrySpan, scope, isolationScope) {
  function wrapScopeWithWeakRef(isolationScope) {
    try {
      const _WeakRef = _mod685.GLOBAL_OBJ.WeakRef;
      if (typeof _WeakRef === "function") {
        const self = this;
        const self2 = this;
        const _WeakRef1 = new _WeakRef(isolationScope);
        return _WeakRef1;
      } else {
        return isolationScope;
      }
    } catch (err) {
    }
  }
  const tmp = sentrySpan;
  if (tmp) {
    const obj = _mod686;
    const result = obj.addNonEnumerableProperty(sentrySpan, _sentryIsolationScope, wrapScopeWithWeakRef(isolationScope));
    const obj2 = _mod686;
    const result1 = obj2.addNonEnumerableProperty(sentrySpan, _sentryScope, scope);
  }
}
