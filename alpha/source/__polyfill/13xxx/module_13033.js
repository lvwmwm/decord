// Module ID: 13033
// Function ID: 13034
// Dependencies: [13010]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 13033
import _mod13010 from "module_13010" /* 13010 */;

const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
}
export function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  const tmp = arg0;
  if (tmp) {
    const obj = _mod13010;
    const result = obj.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const obj2 = _mod13010;
    const result1 = obj2.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
}
