// Module ID: 981
// Function ID: 10619
// Name: getSentryCarrier
// Dependencies: []

// Module 981 (getSentryCarrier)
arg5.getSentryCarrier = function getSentryCarrier() {
  const mainCarrier = arg1(arg6[0]).getMainCarrier();
  const tmp2 = mainCarrier.__SENTRY__ || {};
  mainCarrier.__SENTRY__ = tmp2;
  const tmp3 = tmp2[closure_0(undefined, closure_1[0]).SDK_VERSION] || {};
  tmp2[arg1(arg6[0]).SDK_VERSION] = tmp3;
  return tmp3;
};
