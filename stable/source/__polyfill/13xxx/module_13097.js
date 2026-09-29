// Module ID: 13097
// Function ID: 13098
// Dependencies: [13080, 13081]
// Exports: getMainCarrier, getSentryCarrier

// Module 13097
import _mod13080 from "module_13080" /* 13080 */;
import _mod13081 from "module_13081" /* 13081 */;

require = arg1;
const dependencyMap = arg6;

export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod13080.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13081.SDK_VERSION;
  const tmp4 = tmp3.version || _mod13081.SDK_VERSION;
  tmp3[_mod13081.SDK_VERSION] = tmp3[_mod13081.SDK_VERSION] || {};
  return _mod13080.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod13081.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod13081.SDK_VERSION] || {};
  tmp[_mod13081.SDK_VERSION] = tmp4;
  return tmp4;
};
