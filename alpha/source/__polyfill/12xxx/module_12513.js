// Module ID: 12513
// Function ID: 12514
// Dependencies: [12490]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12513
import _mod12490 from "module_12490" /* 12490 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod12490.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod12490.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
