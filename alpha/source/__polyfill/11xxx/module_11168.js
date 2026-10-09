// Module ID: 11168
// Function ID: 11169
// Dependencies: [11169]
// Exports: getGlobalSingleton

// Module 11168
import _mod11169 from "module_11169" /* 11169 */;


export const GLOBAL_OBJ = globalThis;
export const getGlobalSingleton = function getGlobalSingleton(arg0, fn, arg2) {
  const tmp2 = (arg2 || globalThis).__SENTRY__ || {};
  (arg2 || globalThis).__SENTRY__ = tmp2;
  const SDK_VERSION = _mod11169.SDK_VERSION;
  const tmp3 = tmp2[_mod11169.SDK_VERSION] || {};
  tmp2[SDK_VERSION] = tmp3;
  let tmp4 = tmp3[arg0];
  if (!tmp4) {
    const tmp6 = fn();
    tmp3[arg0] = tmp6;
    tmp4 = tmp6;
  }
  return tmp4;
};
