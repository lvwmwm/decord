// Module ID: 13291
// Function ID: 13292
// Dependencies: [13274, 13275]
// Exports: getMainCarrier, getSentryCarrier

// Module 13291
import _mod13274 from "module_13274" /* 13274 */;
import _mod13275 from "module_13275" /* 13275 */;


export function getMainCarrier() {
  const GLOBAL_OBJ = _mod13274.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13275.SDK_VERSION;
  tmp3.version || _mod13275.SDK_VERSION;
  const SDK_VERSION = tmp(13275).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod13275.SDK_VERSION] || {};
  tmp3[_mod13275.SDK_VERSION] || {};
  return _mod13274.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod13275.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod13275.SDK_VERSION;
  const tmp4 = tmp[_mod13275.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
}
