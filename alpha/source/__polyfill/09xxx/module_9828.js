// Module ID: 9828
// Function ID: 9829
// Dependencies: [9811, 9812]
// Exports: getMainCarrier, getSentryCarrier

// Module 9828
import _mod9811 from "module_9811" /* 9811 */;
import _mod9812 from "module_9812" /* 9812 */;


export function getMainCarrier() {
  const GLOBAL_OBJ = _mod9811.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod9812.SDK_VERSION;
  tmp3.version || _mod9812.SDK_VERSION;
  const SDK_VERSION = tmp(9812).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod9812.SDK_VERSION] || {};
  tmp3[_mod9812.SDK_VERSION] || {};
  return _mod9811.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod9812.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod9812.SDK_VERSION;
  const tmp4 = tmp[_mod9812.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
}
