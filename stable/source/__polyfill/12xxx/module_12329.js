// Module ID: 12329
// Function ID: 12330
// Dependencies: [12312, 12313]
// Exports: getMainCarrier, getSentryCarrier

// Module 12329
import _mod12312 from "module_12312" /* 12312 */;
import _mod12313 from "module_12313" /* 12313 */;


export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod12312.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12313.SDK_VERSION;
  tmp3.version || _mod12313.SDK_VERSION;
  const SDK_VERSION = tmp(12313).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod12313.SDK_VERSION] || {};
  tmp3[_mod12313.SDK_VERSION] || {};
  return _mod12312.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod12313.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod12313.SDK_VERSION;
  const tmp4 = tmp[_mod12313.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};
