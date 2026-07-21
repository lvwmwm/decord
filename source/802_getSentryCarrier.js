// Module ID: 802
// Function ID: 9017
// Name: getSentryCarrier
// Dependencies: []

// Module 802 (getSentryCarrier)
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
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getGlobalSingleton = function getGlobalSingleton(arg0, arg1) {
  if (arguments.length > 2) {
    if (undefined !== arguments[2]) {
      let GLOBAL_OBJ = arguments[2];
    }
    const tmp = GLOBAL_OBJ.__SENTRY__ || {};
    GLOBAL_OBJ.__SENTRY__ = tmp;
    const tmp4 = tmp[closure_0(undefined, closure_1[1]).SDK_VERSION] || {};
    tmp[arg1(arg6[1]).SDK_VERSION] = tmp4;
    let tmp5 = tmp4[arg0];
    if (!tmp5) {
      const tmp7 = arg1();
      tmp4[arg0] = tmp7;
      tmp5 = tmp7;
    }
    return tmp5;
  }
  GLOBAL_OBJ = arg1(arg6[0]).GLOBAL_OBJ;
};
arg5.getMainCarrier = function getMainCarrier() {
  getSentryCarrier(arg1(arg6[0]).GLOBAL_OBJ);
  return arg1(arg6[0]).GLOBAL_OBJ;
};
arg5.getSentryCarrier = getSentryCarrier;
