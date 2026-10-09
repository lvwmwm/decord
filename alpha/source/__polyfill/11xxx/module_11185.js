// Module ID: 11185
// Function ID: 11186
// Dependencies: [11168, 11169]
// Exports: getMainCarrier, getSentryCarrier

// Module 11185
import _mod11168 from "module_11168" /* 11168 */;
import _mod11169 from "module_11169" /* 11169 */;


export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod11168.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod11169.SDK_VERSION;
  tmp3.version || _mod11169.SDK_VERSION;
  const SDK_VERSION = tmp(11169).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod11169.SDK_VERSION] || {};
  tmp3[_mod11169.SDK_VERSION] || {};
  return _mod11168.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod11169.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod11169.SDK_VERSION;
  const tmp4 = tmp[_mod11169.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};
