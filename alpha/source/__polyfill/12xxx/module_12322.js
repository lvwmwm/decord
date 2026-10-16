// Module ID: 12322
// Function ID: 12323
// Dependencies: [12305, 12306]
// Exports: getMainCarrier, getSentryCarrier

// Module 12322
import _mod12305 from "module_12305" /* 12305 */;
import _mod12306 from "module_12306" /* 12306 */;


export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod12305.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod12306.SDK_VERSION;
  tmp3.version || _mod12306.SDK_VERSION;
  const SDK_VERSION = tmp(12306).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod12306.SDK_VERSION] || {};
  tmp3[_mod12306.SDK_VERSION] || {};
  return _mod12305.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod12306.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod12306.SDK_VERSION;
  const tmp4 = tmp[_mod12306.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};
