// Module ID: 9760
// Function ID: 9761
// Dependencies: [9737]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 9760
import _mod9737 from "module_9737" /* 9737 */;

const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
}
export function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  const tmp = arg0;
  if (tmp) {
    const obj = _mod9737;
    const result = obj.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const obj2 = _mod9737;
    const result1 = obj2.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
}
