// Module ID: 11226
// Function ID: 11227
// Dependencies: [11209, 11210]
// Exports: getMainCarrier, getSentryCarrier

// Module 11226
import _mod11209 from "module_11209" /* 11209 */;
import _mod11210 from "module_11210" /* 11210 */;


export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod11209.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod11210.SDK_VERSION;
  tmp3.version || _mod11210.SDK_VERSION;
  const SDK_VERSION = tmp(11210).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod11210.SDK_VERSION] || {};
  tmp3[_mod11210.SDK_VERSION] || {};
  return _mod11209.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod11210.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod11210.SDK_VERSION;
  const tmp4 = tmp[_mod11210.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};
