// Module ID: 12591
// Function ID: 12592
// Dependencies: [12574, 12575]
// Exports: getMainCarrier, getSentryCarrier

// Module 12591
import _mod12574 from "module_12574" /* 12574 */;
import _mod12575 from "module_12575" /* 12575 */;


export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod12574.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12575.SDK_VERSION;
  tmp3.version || _mod12575.SDK_VERSION;
  const SDK_VERSION = tmp(12575).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod12575.SDK_VERSION] || {};
  tmp3[_mod12575.SDK_VERSION] || {};
  return _mod12574.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod12575.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod12575.SDK_VERSION;
  const tmp4 = tmp[_mod12575.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};
