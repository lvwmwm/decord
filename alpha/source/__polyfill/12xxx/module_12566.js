// Module ID: 12566
// Function ID: 12567
// Dependencies: [12567]
// Exports: getGlobalSingleton

// Module 12566
import _mod12567 from "module_12567" /* 12567 */;


export const GLOBAL_OBJ = globalThis;
export const getGlobalSingleton = function getGlobalSingleton(arg0, fn, arg2) {
  const tmp2 = (arg2 || globalThis).__SENTRY__ || {};
  (arg2 || globalThis).__SENTRY__ = tmp2;
  const SDK_VERSION = _mod12567.SDK_VERSION;
  const tmp3 = tmp2[_mod12567.SDK_VERSION] || {};
  tmp2[SDK_VERSION] = tmp3;
  let tmp4 = tmp3[arg0];
  if (!tmp4) {
    const tmp6 = fn();
    tmp3[arg0] = tmp6;
    tmp4 = tmp6;
  }
  return tmp4;
};
