// Module ID: 13114
// Function ID: 13115
// Dependencies: [13091]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 13114
import _mod13091 from "module_13091" /* 13091 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod13091.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod13091.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
