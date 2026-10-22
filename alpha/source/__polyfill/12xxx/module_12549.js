// Module ID: 12549
// Function ID: 12550
// Dependencies: [12526]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12549
import _mod12526 from "module_12526" /* 12526 */;

const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  const tmp = arg0;
  if (tmp) {
    const obj = _mod12526;
    const result = obj.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const obj2 = _mod12526;
    const result1 = obj2.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
