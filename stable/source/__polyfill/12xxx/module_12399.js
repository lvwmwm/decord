// Module ID: 12399
// Function ID: 12400
// Dependencies: [12382, 12383]
// Exports: getMainCarrier, getSentryCarrier

// Module 12399
import _mod12382 from "module_12382" /* 12382 */;
import _mod12383 from "module_12383" /* 12383 */;


export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod12382.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12383.SDK_VERSION;
  tmp3.version || _mod12383.SDK_VERSION;
  const SDK_VERSION = tmp(12383).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod12383.SDK_VERSION] || {};
  tmp3[_mod12383.SDK_VERSION] || {};
  return _mod12382.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod12383.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod12383.SDK_VERSION;
  const tmp4 = tmp[_mod12383.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};
