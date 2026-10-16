// Module ID: 12316
// Function ID: 12317
// Dependencies: [12299, 12300]
// Exports: getMainCarrier, getSentryCarrier

// Module 12316
import _mod12299 from "module_12299" /* 12299 */;
import _mod12300 from "module_12300" /* 12300 */;


export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod12299.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12300.SDK_VERSION;
  tmp3.version || _mod12300.SDK_VERSION;
  const SDK_VERSION = tmp(12300).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod12300.SDK_VERSION] || {};
  tmp3[_mod12300.SDK_VERSION] || {};
  return _mod12299.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod12300.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod12300.SDK_VERSION;
  const tmp4 = tmp[_mod12300.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};
