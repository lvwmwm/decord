// Module ID: 12557
// Function ID: 12558
// Dependencies: [12540, 12541]
// Exports: getMainCarrier, getSentryCarrier

// Module 12557
import _mod12540 from "module_12540" /* 12540 */;
import _mod12541 from "module_12541" /* 12541 */;


export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod12540.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12541.SDK_VERSION;
  tmp3.version || _mod12541.SDK_VERSION;
  const SDK_VERSION = tmp(12541).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod12541.SDK_VERSION] || {};
  tmp3[_mod12541.SDK_VERSION] || {};
  return _mod12540.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod12541.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod12541.SDK_VERSION;
  const tmp4 = tmp[_mod12541.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};
