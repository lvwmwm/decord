// Module ID: 11022
// Function ID: 11023
// Dependencies: [10999]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 11022
import _mod10999 from "module_10999" /* 10999 */;

const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  const tmp = arg0;
  if (tmp) {
    const obj = _mod10999;
    const result = obj.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const obj2 = _mod10999;
    const result1 = obj2.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
