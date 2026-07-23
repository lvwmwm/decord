// Module ID: 7254
// Function ID: 58406
// Name: getSentryCarrier
// Dependencies: [7237, 7238]

// Module 7254 (getSentryCarrier)
const require = arg1;
const dependencyMap = arg6;
function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = require(7238).SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[require(undefined, 7238).SDK_VERSION] || {};
  tmp[require(7238).SDK_VERSION] = tmp4;
  return tmp4;
}
arg5.getMainCarrier = function getMainCarrier() {
  getSentryCarrier(require(7237) /* getGlobalSingleton */.GLOBAL_OBJ);
  return require(7237) /* getGlobalSingleton */.GLOBAL_OBJ;
};
arg5.getSentryCarrier = getSentryCarrier;
