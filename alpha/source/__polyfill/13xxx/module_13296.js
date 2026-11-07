// Module ID: 13296
// Function ID: 13297
// Dependencies: [13279, 13280]
// Exports: getMainCarrier, getSentryCarrier

// Module 13296
import _mod13279 from "module_13279" /* 13279 */;
import _mod13280 from "module_13280" /* 13280 */;


export function getMainCarrier() {
  const GLOBAL_OBJ = _mod13279.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13280.SDK_VERSION;
  tmp3.version || _mod13280.SDK_VERSION;
  const SDK_VERSION = tmp(13280).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod13280.SDK_VERSION] || {};
  tmp3[_mod13280.SDK_VERSION] || {};
  return _mod13279.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod13280.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod13280.SDK_VERSION;
  const tmp4 = tmp[_mod13280.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
}
