// Module ID: 12629
// Function ID: 12630
// Dependencies: [12612, 12613]
// Exports: getMainCarrier, getSentryCarrier

// Module 12629
import _mod12612 from "module_12612" /* 12612 */;
import _mod12613 from "module_12613" /* 12613 */;


export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod12612.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12613.SDK_VERSION;
  tmp3.version || _mod12613.SDK_VERSION;
  const SDK_VERSION = tmp(12613).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod12613.SDK_VERSION] || {};
  tmp3[_mod12613.SDK_VERSION] || {};
  return _mod12612.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod12613.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod12613.SDK_VERSION;
  const tmp4 = tmp[_mod12613.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};
