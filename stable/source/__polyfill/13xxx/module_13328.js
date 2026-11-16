// Module ID: 13328
// Function ID: 13329
// Dependencies: [13311, 13312]
// Exports: getMainCarrier, getSentryCarrier

// Module 13328
import _mod13311 from "module_13311" /* 13311 */;
import _mod13312 from "module_13312" /* 13312 */;


export function getMainCarrier() {
  const GLOBAL_OBJ = _mod13311.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13312.SDK_VERSION;
  tmp3.version || _mod13312.SDK_VERSION;
  const SDK_VERSION = tmp(13312).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod13312.SDK_VERSION] || {};
  tmp3[_mod13312.SDK_VERSION] || {};
  return _mod13311.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod13312.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod13312.SDK_VERSION;
  const tmp4 = tmp[_mod13312.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
}
