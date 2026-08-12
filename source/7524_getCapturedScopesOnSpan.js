// Module ID: 7524
// Function ID: 7525
// Name: getCapturedScopesOnSpan
// Dependencies: [7501]

// Module 7524 (getCapturedScopesOnSpan)
const require = arg1;
const dependencyMap = arg6;
const _sentryScope = "_sentryScope";
const _sentryIsolationScope = "_sentryIsolationScope";
arg5.getCapturedScopesOnSpan = function getCapturedScopesOnSpan(scope) {
  return { scope: scope[_sentryScope], isolationScope: scope[_sentryIsolationScope] };
};
arg5.setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = require(7501) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, _sentryIsolationScope, arg2);
    const obj = require(7501) /* addNonEnumerableProperty */;
    const result1 = require(7501) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, _sentryScope, arg1);
    const obj2 = require(7501) /* addNonEnumerableProperty */;
  }
};
