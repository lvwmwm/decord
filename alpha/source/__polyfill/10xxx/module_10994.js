// Module ID: 10994
// Function ID: 10995
// Dependencies: [10995]
// Exports: getGlobalSingleton

// Module 10994
import _mod10995 from "module_10995" /* 10995 */;


export const GLOBAL_OBJ = globalThis;
export const getGlobalSingleton = function getGlobalSingleton(arg0, fn, arg2) {
  const tmp2 = (arg2 || globalThis).__SENTRY__ || {};
  (arg2 || globalThis).__SENTRY__ = tmp2;
  const SDK_VERSION = _mod10995.SDK_VERSION;
  const tmp3 = tmp2[_mod10995.SDK_VERSION] || {};
  tmp2[SDK_VERSION] = tmp3;
  let tmp4 = tmp3[arg0];
  if (!tmp4) {
    const tmp6 = fn();
    tmp3[arg0] = tmp6;
    tmp4 = tmp6;
  }
  return tmp4;
};
