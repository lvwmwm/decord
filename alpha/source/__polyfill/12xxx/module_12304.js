// Module ID: 12304
// Function ID: 12305
// Dependencies: [12281]
// Exports: getCapturedScopesOnSpan, setCapturedScopesOnSpan

// Module 12304
import _mod12281 from "module_12281" /* 12281 */;

const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";

export const getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
export const setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  const tmp = arg0;
  if (tmp) {
    const obj = _mod12281;
    const result = obj.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const obj2 = _mod12281;
    const result1 = obj2.addNonEnumerableProperty(arg0, _sentryScope, arg1);
  }
};
