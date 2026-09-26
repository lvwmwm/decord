// Module ID: 13108
// Function ID: 13109
// Dependencies: [13085]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 13108
import _mod13085 from "module_13085" /* 13085 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod13085.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod13085.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
