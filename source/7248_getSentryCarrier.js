// Module ID: 7248
// Function ID: 58349
// Name: getSentryCarrier
// Dependencies: []

// Module 7248 (getSentryCarrier)
function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = arg1(arg6[1]).SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[closure_0(undefined, closure_1[1]).SDK_VERSION] || {};
  tmp[arg1(arg6[1]).SDK_VERSION] = tmp4;
  return tmp4;
}
arg5.getMainCarrier = function getMainCarrier() {
  getSentryCarrier(arg1(arg6[0]).GLOBAL_OBJ);
  return arg1(arg6[0]).GLOBAL_OBJ;
};
arg5.getSentryCarrier = getSentryCarrier;
