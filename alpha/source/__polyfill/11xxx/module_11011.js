// Module ID: 11011
// Function ID: 11012
// Dependencies: [10994, 10995]
// Exports: getMainCarrier, getSentryCarrier

// Module 11011
import _mod10994 from "module_10994" /* 10994 */;
import _mod10995 from "module_10995" /* 10995 */;


export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod10994.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod10995.SDK_VERSION;
  tmp3.version || _mod10995.SDK_VERSION;
  const SDK_VERSION = tmp(10995).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod10995.SDK_VERSION] || {};
  tmp3[_mod10995.SDK_VERSION] || {};
  return _mod10994.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod10995.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod10995.SDK_VERSION;
  const tmp4 = tmp[_mod10995.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};
