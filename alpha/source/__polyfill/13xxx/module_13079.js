// Module ID: 13079
// Function ID: 13080
// Dependencies: [13056]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 13079
import _mod13056 from "module_13056" /* 13056 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod13056.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod13056.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
