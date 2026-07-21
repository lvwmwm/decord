// Module ID: 7259
// Function ID: 58469
// Name: getCapturedScopesOnSpan
// Dependencies: []

// Module 7259 (getCapturedScopesOnSpan)
arg5.getCapturedScopesOnSpan = function getCapturedScopesOnSpan(_sentryScope) {
  return { scope: _sentryScope._sentryScope, isolationScope: _sentryScope._sentryIsolationScope };
};
arg5.setCapturedScopesOnSpan = function setCapturedScopesOnSpan(arg0, arg1, arg2) {
  if (arg0) {
    const result = arg1(arg6[0]).addNonEnumerableProperty(arg0, "_sentryIsolationScope", arg2);
    const obj = arg1(arg6[0]);
    const result1 = arg1(arg6[0]).addNonEnumerableProperty(arg0, "_sentryScope", arg1);
    const obj2 = arg1(arg6[0]);
  }
};
