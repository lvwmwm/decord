// Module ID: 13310
// Function ID: 13311
// Dependencies: [13293, 13294]
// Exports: getMainCarrier, getSentryCarrier

// Module 13310
import _mod13293 from "module_13293" /* 13293 */;
import _mod13294 from "module_13294" /* 13294 */;


export function getMainCarrier() {
  const GLOBAL_OBJ = _mod13293.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13294.SDK_VERSION;
  tmp3.version || _mod13294.SDK_VERSION;
  const SDK_VERSION = tmp(13294).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod13294.SDK_VERSION] || {};
  tmp3[_mod13294.SDK_VERSION] || {};
  return _mod13293.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod13294.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod13294.SDK_VERSION;
  const tmp4 = tmp[_mod13294.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
}
