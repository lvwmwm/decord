// Module ID: 13078
// Function ID: 13079
// Dependencies: [13055]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 13078
import _mod13055 from "module_13055" /* 13055 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod13055.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod13055.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
