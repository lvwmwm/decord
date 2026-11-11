// Module ID: 9749
// Function ID: 9750
// Dependencies: [9732, 9733]
// Exports: getMainCarrier, getSentryCarrier

// Module 9749
import _mod9732 from "module_9732" /* 9732 */;
import _mod9733 from "module_9733" /* 9733 */;


export function getMainCarrier() {
  const GLOBAL_OBJ = _mod9732.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod9733.SDK_VERSION;
  tmp3.version || _mod9733.SDK_VERSION;
  const SDK_VERSION = tmp(9733).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod9733.SDK_VERSION] || {};
  tmp3[_mod9733.SDK_VERSION] || {};
  return _mod9732.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod9733.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod9733.SDK_VERSION;
  const tmp4 = tmp[_mod9733.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
}
