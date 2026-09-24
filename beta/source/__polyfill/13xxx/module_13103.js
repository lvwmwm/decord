// Module ID: 13103
// Function ID: 13104
// Dependencies: [13086, 13087]
// Exports: getMainCarrier, getSentryCarrier

// Module 13103
import _mod13086 from "module_13086" /* 13086 */;
import _mod13087 from "module_13087" /* 13087 */;

require = arg1;
const dependencyMap = arg6;

export const getMainCarrier = function getMainCarrier() {
  const GLOBAL_OBJ = _mod13086.GLOBAL_OBJ;
  const tmp3 = GLOBAL_OBJ.__SENTRY__ || {};
  GLOBAL_OBJ.__SENTRY__ = tmp3;
  tmp3.version = tmp3.version || _mod13087.SDK_VERSION;
  const tmp4 = tmp3.version || _mod13087.SDK_VERSION;
  tmp3[_mod13087.SDK_VERSION] = tmp3[_mod13087.SDK_VERSION] || {};
  return _mod13086.GLOBAL_OBJ;
};
export const getSentryCarrier = function getSentryCarrier(__SENTRY__) {
  const tmp = __SENTRY__.__SENTRY__ || {};
  __SENTRY__.__SENTRY__ = tmp;
  let SDK_VERSION = tmp.version;
  if (!SDK_VERSION) {
    SDK_VERSION = _mod13087.SDK_VERSION;
  }
  tmp.version = SDK_VERSION;
  const tmp4 = tmp[_mod13087.SDK_VERSION] || {};
  tmp[_mod13087.SDK_VERSION] = tmp4;
  return tmp4;
};
