// Module ID: 13303
// Function ID: 13304
// Dependencies: [13280]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 13303
import _mod13280 from "module_13280" /* 13280 */;

const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
}
export function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  const tmp = arg0;
  if (tmp) {
    const obj = _mod13280;
    const result = obj.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const obj2 = _mod13280;
    const result1 = obj2.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
}
