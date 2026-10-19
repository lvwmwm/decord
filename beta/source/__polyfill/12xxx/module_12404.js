// Module ID: 12404
// Function ID: 12405
// Dependencies: [12387, 12388]
// Exports: getMainCarrier, getSentryCarrier

// Module 12404
import _mod12387 from "module_12387" /* 12387 */;
import _mod12388 from "module_12388" /* 12388 */;


export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod12387.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12388.SDK_VERSION;
  tmp3.version || _mod12388.SDK_VERSION;
  const SDK_VERSION = tmp(12388).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod12388.SDK_VERSION] || {};
  tmp3[_mod12388.SDK_VERSION] || {};
  return _mod12387.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod12388.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod12388.SDK_VERSION;
  const tmp4 = tmp[_mod12388.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};
