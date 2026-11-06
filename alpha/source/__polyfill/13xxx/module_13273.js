// Module ID: 13273
// Function ID: 13274
// Dependencies: [13256, 13257]
// Exports: getMainCarrier, getSentryCarrier

// Module 13273
import _mod13256 from "module_13256" /* 13256 */;
import _mod13257 from "module_13257" /* 13257 */;


export function getMainCarrier() {
  const GLOBAL_OBJ = _mod13256.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13257.SDK_VERSION;
  tmp3.version || _mod13257.SDK_VERSION;
  const SDK_VERSION = tmp(13257).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod13257.SDK_VERSION] || {};
  tmp3[_mod13257.SDK_VERSION] || {};
  return _mod13256.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod13257.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod13257.SDK_VERSION;
  const tmp4 = tmp[_mod13257.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
}
