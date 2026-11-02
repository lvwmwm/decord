// Module ID: 13072
// Function ID: 13073
// Dependencies: [13055, 13056]
// Exports: getMainCarrier, getSentryCarrier

// Module 13072
import _mod13055 from "module_13055" /* 13055 */;
import _mod13056 from "module_13056" /* 13056 */;


export function getMainCarrier() {
  const GLOBAL_OBJ = _mod13055.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13056.SDK_VERSION;
  tmp3.version || _mod13056.SDK_VERSION;
  const SDK_VERSION = tmp(13056).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod13056.SDK_VERSION] || {};
  tmp3[_mod13056.SDK_VERSION] || {};
  return _mod13055.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod13056.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod13056.SDK_VERSION;
  const tmp4 = tmp[_mod13056.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
}
