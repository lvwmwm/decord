// Module ID: 981
// Function ID: 10625
// Name: getSentryCarrier
// Dependencies: [794]

// Module 981 (getSentryCarrier)
const require = arg1;
const dependencyMap = arg6;
arg5.getSentryCarrier = function getSentryCarrier() {
  const mainCarrier = require(794) /* registerSpanErrorInstrumentation */.getMainCarrier();
  const tmp2 = mainCarrier.__SENTRY__ || {};
  mainCarrier.__SENTRY__ = tmp2;
  const tmp3 = tmp2[require(undefined, 794) /* registerSpanErrorInstrumentation */.SDK_VERSION] || {};
  tmp2[require(794) /* registerSpanErrorInstrumentation */.SDK_VERSION] = tmp3;
  return tmp3;
};
