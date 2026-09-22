// Module ID: 13083
// Function ID: 13084
// Dependencies: [13060]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 13083
import _mod13060 from "module_13060" /* 13060 */;

require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = _mod13060.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const result1 = _mod13060.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
