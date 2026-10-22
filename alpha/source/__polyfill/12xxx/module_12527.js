// Module ID: 12527
// Function ID: 12528
// Dependencies: [12510, 12511]
// Exports: getMainCarrier, getSentryCarrier

// Module 12527
import _mod12510 from "module_12510" /* 12510 */;
import _mod12511 from "module_12511" /* 12511 */;


export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod12510.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12511.SDK_VERSION;
  tmp3.version || _mod12511.SDK_VERSION;
  const SDK_VERSION = tmp(12511).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod12511.SDK_VERSION] || {};
  tmp3[_mod12511.SDK_VERSION] || {};
  return _mod12510.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod12511.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod12511.SDK_VERSION;
  const tmp4 = tmp[_mod12511.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};
