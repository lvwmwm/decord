// Module ID: 12594
// Function ID: 12595
// Dependencies: [12571]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12594
import _mod12571 from "module_12571" /* 12571 */;

const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  const tmp = arg0;
  if (tmp) {
    const obj = _mod12571;
    const result = obj.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const obj2 = _mod12571;
    const result1 = obj2.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
