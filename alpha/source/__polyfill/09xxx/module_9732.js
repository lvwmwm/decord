// Module ID: 9732
// Function ID: 9733
// Dependencies: [9733]
// Exports: getGlobalSingleton

// Module 9732
import _mod9733 from "module_9733" /* 9733 */;


export const GLOBAL_OBJ = globalThis;
export function getGlobalSingleton(arg0, fn, arg2) {
  const tmp2 = (arg2 || globalThis).__SENTRY__ || {};
  (arg2 || globalThis).__SENTRY__ = tmp2;
  const SDK_VERSION = _mod9733.SDK_VERSION;
  const tmp3 = tmp2[_mod9733.SDK_VERSION] || {};
  tmp2[SDK_VERSION] = tmp3;
  let tmp4 = tmp3[arg0];
  if (!tmp4) {
    const tmp6 = fn();
    tmp3[arg0] = tmp6;
    tmp4 = tmp6;
  }
  return tmp4;
}
