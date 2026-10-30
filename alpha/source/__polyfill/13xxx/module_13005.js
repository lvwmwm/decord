// Module ID: 13005
// Function ID: 13006
// Dependencies: [13006]
// Exports: getGlobalSingleton

// Module 13005
import _mod13006 from "module_13006" /* 13006 */;


export const GLOBAL_OBJ = globalThis;
export function getGlobalSingleton(arg0, fn, arg2) {
  const tmp2 = (arg2 || globalThis).__SENTRY__ || {};
  (arg2 || globalThis).__SENTRY__ = tmp2;
  const SDK_VERSION = _mod13006.SDK_VERSION;
  const tmp3 = tmp2[_mod13006.SDK_VERSION] || {};
  tmp2[SDK_VERSION] = tmp3;
  let tmp4 = tmp3[arg0];
  if (!tmp4) {
    const tmp6 = fn();
    tmp3[arg0] = tmp6;
    tmp4 = tmp6;
  }
  return tmp4;
}
