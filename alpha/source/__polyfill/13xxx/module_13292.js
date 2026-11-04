// Module ID: 13292
// Function ID: 13293
// Dependencies: [13275, 13276]
// Exports: getMainCarrier, getSentryCarrier

// Module 13292
import _mod13275 from "module_13275" /* 13275 */;
import _mod13276 from "module_13276" /* 13276 */;


export function getMainCarrier() {
  const GLOBAL_OBJ = _mod13275.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13276.SDK_VERSION;
  tmp3.version || _mod13276.SDK_VERSION;
  const SDK_VERSION = tmp(13276).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod13276.SDK_VERSION] || {};
  tmp3[_mod13276.SDK_VERSION] || {};
  return _mod13275.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod13276.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod13276.SDK_VERSION;
  const tmp4 = tmp[_mod13276.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
}
