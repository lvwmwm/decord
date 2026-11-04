// Module ID: 13083
// Function ID: 13084
// Dependencies: [13060]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 13083
import _mod13060 from "module_13060" /* 13060 */;

const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
}
export function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  const tmp = arg0;
  if (tmp) {
    const obj = _mod13060;
    const result = obj.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const obj2 = _mod13060;
    const result1 = obj2.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
}
