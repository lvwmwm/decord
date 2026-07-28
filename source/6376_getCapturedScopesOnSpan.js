// Module ID: 6376
// Function ID: 57097
// Name: getCapturedScopesOnSpan
// Dependencies: [6353]

// Module 6376 (getCapturedScopesOnSpan)
const require = arg1;
const dependencyMap = arg6;
arg5.getCapturedScopesOnSpan = function getCapturedScopesOnSpan(_sentryScope) {
  return { scope: _sentryScope._sentryScope, isolationScope: _sentryScope._sentryIsolationScope };
};
arg5.setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = require(6353) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, "_sentryIsolationScope", arg2);
    const obj = require(6353) /* addNonEnumerableProperty */;
    const result1 = require(6353) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, "_sentryScope", arg1);
    const obj2 = require(6353) /* addNonEnumerableProperty */;
  }
};
