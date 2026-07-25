// Module ID: 6340
// Function ID: 57007
// Name: getCapturedScopesOnSpan
// Dependencies: [6317]

// Module 6340 (getCapturedScopesOnSpan)
const require = arg1;
const dependencyMap = arg6;
arg5.getCapturedScopesOnSpan = function getCapturedScopesOnSpan(_sentryScope) {
  return { scope: _sentryScope._sentryScope, isolationScope: _sentryScope._sentryIsolationScope };
};
arg5.setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = require(6317) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, "_sentryIsolationScope", arg2);
    const obj = require(6317) /* addNonEnumerableProperty */;
    const result1 = require(6317) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, "_sentryScope", arg1);
    const obj2 = require(6317) /* addNonEnumerableProperty */;
  }
};
