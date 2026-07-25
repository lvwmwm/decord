// Module ID: 6329
// Function ID: 56887
// Name: getSentryCarrier
// Dependencies: [6312, 6313]

// Module 6329 (getSentryCarrier)
const require = arg1;
const dependencyMap = arg6;
function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = require(6313).SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[require(undefined, 6313).SDK_VERSION] || {};
  tmp[require(6313).SDK_VERSION] = tmp4;
  return tmp4;
}
arg5.getMainCarrier = function getMainCarrier() {
  getSentryCarrier(require(6312) /* getGlobalSingleton */.GLOBAL_OBJ);
  return require(6312) /* getGlobalSingleton */.GLOBAL_OBJ;
};
arg5.getSentryCarrier = getSentryCarrier;
