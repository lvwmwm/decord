// Module ID: 12747
// Function ID: 12748
// Name: getMainCarrier
// Dependencies: [12730, 12731]

// Module 12747 (getMainCarrier)
import getGlobalSingleton from "getGlobalSingleton" /* 12730 */;
import _mod12731 from "module_12731" /* 12731 */;

require = arg1;
const dependencyMap = arg6;
arg5.getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = getGlobalSingleton.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12731.SDK_VERSION;
  const tmp4 = tmp3.version || _mod12731.SDK_VERSION;
  tmp3[_mod12731.SDK_VERSION] = tmp3[_mod12731.SDK_VERSION] || {};
  return getGlobalSingleton.GLOBAL_OBJ;
};
arg5.getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod12731.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod12731.SDK_VERSION] || {};
  tmp[_mod12731.SDK_VERSION] = tmp4;
  return tmp4;
};
