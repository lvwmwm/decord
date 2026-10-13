// Module ID: 12035
// Function ID: 12036
// Dependencies: [12012]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12035
import _mod12012 from "module_12012" /* 12012 */;

const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  const tmp = arg0;
  if (tmp) {
    const obj = _mod12012;
    const result = obj.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const obj2 = _mod12012;
    const result1 = obj2.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
