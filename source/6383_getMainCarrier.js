// Module ID: 6383
// Function ID: 6384
// Name: getMainCarrier
// Dependencies: [6366, 6367]

// Module 6383 (getMainCarrier)
const require = arg1;
const dependencyMap = arg6;
arg5.getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = require(6366) /* getGlobalSingleton */.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || require(6367).SDK_VERSION;
  const tmp4 = tmp3.version || require(6367).SDK_VERSION;
  tmp3[require(6367).SDK_VERSION] = tmp3[require(undefined, 6367).SDK_VERSION] || {};
  return require(6366) /* getGlobalSingleton */.GLOBAL_OBJ;
};
arg5.getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = require(6367).SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[require(undefined, 6367).SDK_VERSION] || {};
  tmp[require(6367).SDK_VERSION] = tmp4;
  return tmp4;
};
