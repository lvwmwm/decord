// Module ID: 13208
// Function ID: 13209
// Dependencies: [13191, 13192]
// Exports: getMainCarrier, getSentryCarrier

// Module 13208
import _mod13191 from "module_13191" /* 13191 */;
import _mod13192 from "module_13192" /* 13192 */;


export function getMainCarrier() {
  const GLOBAL_OBJ = _mod13191.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13192.SDK_VERSION;
  tmp3.version || _mod13192.SDK_VERSION;
  const SDK_VERSION = tmp(13192).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod13192.SDK_VERSION] || {};
  tmp3[_mod13192.SDK_VERSION] || {};
  return _mod13191.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod13192.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod13192.SDK_VERSION;
  const tmp4 = tmp[_mod13192.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
}
