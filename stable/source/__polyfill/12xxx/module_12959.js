// Module ID: 12959
// Function ID: 12960
// Dependencies: [12936]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12959
import _mod12936 from "module_12936" /* 12936 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod12936.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod12936.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
