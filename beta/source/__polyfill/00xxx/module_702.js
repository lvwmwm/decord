// Module ID: 702
// Function ID: 703
// Dependencies: [698, 703]
// Exports: getGlobalSingleton, getMainCarrier, getSentryCarrier

// Module 702
import _mod698 from "module_698" /* 698 */;
import SDK_VERSION3 from "SDK_VERSION" /* 703 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getGlobalSingleton = function getGlobalSingleton(arg0, fn) {
  let GLOBAL_OBJ = arg2;
  if (arg2 === undefined) {
    GLOBAL_OBJ = _mod698.GLOBAL_OBJ;
  }
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  const SDK_VERSION = SDK_VERSION3.SDK_VERSION;
  const tmp4 = tmp3[SDK_VERSION3.SDK_VERSION] || {};
  tmp3[SDK_VERSION] = tmp4;
  let tmp5 = tmp4[arg0];
  if (!tmp5) {
    const tmp7 = fn();
    tmp4[arg0] = tmp7;
    tmp5 = tmp7;
  }
  return tmp5;
};
export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod698.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || SDK_VERSION3.SDK_VERSION;
  tmp3.version || SDK_VERSION3.SDK_VERSION;
  const SDK_VERSION = tmp(703).SDK_VERSION;
  tmp3[SDK_VERSION] = tmp3[SDK_VERSION3.SDK_VERSION] || {};
  tmp3[SDK_VERSION3.SDK_VERSION] || {};
  return _mod698.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  const SDK_VERSION = tmp.version || SDK_VERSION3.SDK_VERSION;
  tmp.version = SDK_VERSION;
  const SDK_VERSION2 = SDK_VERSION3.SDK_VERSION;
  const tmp4 = tmp[SDK_VERSION3.SDK_VERSION] || {};
  tmp[SDK_VERSION2] = tmp4;
  return tmp4;
};
