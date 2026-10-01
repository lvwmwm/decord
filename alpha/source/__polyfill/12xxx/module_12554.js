// Module ID: 12554
// Function ID: 12555
// Dependencies: [12531]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12554
import _mod12531 from "module_12531" /* 12531 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod12531.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod12531.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
