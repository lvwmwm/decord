// Module ID: 9815
// Function ID: 9816
// Dependencies: [9798, 9799]
// Exports: getMainCarrier, getSentryCarrier

// Module 9815
import _mod9798 from "module_9798" /* 9798 */;
import _mod9799 from "module_9799" /* 9799 */;


export function getMainCarrier() {
  const GLOBAL_OBJ = _mod9798.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod9799.SDK_VERSION;
  tmp3.version || _mod9799.SDK_VERSION;
  const SDK_VERSION = tmp(9799).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[_mod9799.SDK_VERSION] || {};
  tmp3[_mod9799.SDK_VERSION] || {};
  return _mod9798.GLOBAL_OBJ;
}
export function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || _mod9799.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = _mod9799.SDK_VERSION;
  const tmp4 = tmp[_mod9799.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
}
