// Module ID: 7265
// Function ID: 58526
// Name: getCapturedScopesOnSpan
// Dependencies: [7242]

// Module 7265 (getCapturedScopesOnSpan)
const require = arg1;
const dependencyMap = arg6;
arg5.getCapturedScopesOnSpan = function getCapturedScopesOnSpan(_sentryScope) {
  return { scope: _sentryScope._sentryScope, isolationScope: _sentryScope._sentryIsolationScope };
};
arg5.setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = require(7242) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, "_sentryIsolationScope", arg2);
    const obj = require(7242) /* addNonEnumerableProperty */;
    const result1 = require(7242) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, "_sentryScope", arg1);
    const obj2 = require(7242) /* addNonEnumerableProperty */;
  }
};
