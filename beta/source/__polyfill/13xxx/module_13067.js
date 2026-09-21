// Module ID: 13067
// Function ID: 13068
// Dependencies: [13050, 13051]
// Exports: getMainCarrier, getSentryCarrier

// Module 13067
import _mod13050 from "module_13050" /* 13050 */;
import _mod13051 from "module_13051" /* 13051 */;

require = arg1;
const dependencyMap = arg6;

export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod13050.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13051.SDK_VERSION;
  const tmp4 = tmp3.version || _mod13051.SDK_VERSION;
  tmp3[_mod13051.SDK_VERSION] = tmp3[_mod13051.SDK_VERSION] || {};
  return _mod13050.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod13051.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod13051.SDK_VERSION] || {};
  tmp[_mod13051.SDK_VERSION] = tmp4;
  return tmp4;
};
