// Module ID: 9748
// Function ID: 9749
// Dependencies: [9731, 9732]
// Exports: getMainCarrier, getSentryCarrier

// Module 9748
import _mod9731 from "module_9731" /* 9731 */;
import _mod9732 from "module_9732" /* 9732 */;


export function getMainCarrier() {
  const GLOBAL_OBJ = _mod9731.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod9732.SDK_VERSION;
  tmp3.version || _mod9732.SDK_VERSION;
  const SDK_VERSION = tmp(9732).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod9732.SDK_VERSION] || {};
  tmp3[_mod9732.SDK_VERSION] || {};
  return _mod9731.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod9732.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod9732.SDK_VERSION;
  const tmp4 = tmp[_mod9732.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
}
