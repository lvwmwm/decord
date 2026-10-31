// Module ID: 13057
// Function ID: 13058
// Dependencies: [13040, 13041]
// Exports: getMainCarrier, getSentryCarrier

// Module 13057
import _mod13040 from "module_13040" /* 13040 */;
import _mod13041 from "module_13041" /* 13041 */;


export function getMainCarrier() {
  const GLOBAL_OBJ = _mod13040.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13041.SDK_VERSION;
  tmp3.version || _mod13041.SDK_VERSION;
  const SDK_VERSION = tmp(13041).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod13041.SDK_VERSION] || {};
  tmp3[_mod13041.SDK_VERSION] || {};
  return _mod13040.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod13041.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod13041.SDK_VERSION;
  const tmp4 = tmp[_mod13041.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
}
