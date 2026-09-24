// Module ID: 13174
// Function ID: 13175
// Dependencies: [13151]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 13174
import _mod13151 from "module_13151" /* 13151 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod13151.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod13151.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
