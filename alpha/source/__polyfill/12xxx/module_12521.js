// Module ID: 12521
// Function ID: 12522
// Dependencies: [12522]
// Exports: getGlobalSingleton

// Module 12521
import _mod12522 from "module_12522" /* 12522 */;


export const GLOBAL_OBJ = globalThis;
export const getGlobalSingleton = function getGlobalSingleton(arg0, fn, arg2) {
  const tmp2 = (arg2 || globalThis).__SENTRY__ || {};
  (arg2 || globalThis).__SENTRY__ = tmp2;
  const SDK_VERSION = _mod12522.SDK_VERSION;
  const tmp3 = tmp2[_mod12522.SDK_VERSION] || {};
  tmp2[SDK_VERSION] = tmp3;
  let tmp4 = tmp3[arg0];
  if (!tmp4) {
    const tmp6 = fn();
    tmp3[arg0] = tmp6;
    tmp4 = tmp6;
  }
  return tmp4;
};
