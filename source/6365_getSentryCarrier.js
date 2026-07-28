// Module ID: 6365
// Function ID: 56977
// Name: getSentryCarrier
// Dependencies: [6348, 6349]

// Module 6365 (getSentryCarrier)
const require = arg1;
const dependencyMap = arg6;
function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = require(6349).SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[require(undefined, 6349).SDK_VERSION] || {};
  tmp[require(6349).SDK_VERSION] = tmp4;
  return tmp4;
}
arg5.getMainCarrier = function getMainCarrier() {
  getSentryCarrier(require(6348) /* getGlobalSingleton */.GLOBAL_OBJ);
  return require(6348) /* getGlobalSingleton */.GLOBAL_OBJ;
};
arg5.getSentryCarrier = getSentryCarrier;
