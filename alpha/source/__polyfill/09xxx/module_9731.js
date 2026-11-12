// Module ID: 9731
// Function ID: 9732
// Dependencies: [9732]
// Exports: getGlobalSingleton

// Module 9731
import _mod9732 from "module_9732" /* 9732 */;


export const GLOBAL_OBJ = globalThis;
export function getGlobalSingleton(arg0, fn, arg2) {
  const tmp2 = (arg2 || globalThis).__SENTRY__ || {};
  (arg2 || globalThis).__SENTRY__ = tmp2;
  const SDK_VERSION = _mod9732.SDK_VERSION;
  const tmp3 = tmp2[_mod9732.SDK_VERSION] || {};
  tmp2[SDK_VERSION] = tmp3;
  let tmp4 = tmp3[arg0];
  if (!tmp4) {
    const tmp6 = fn();
    tmp3[arg0] = tmp6;
    tmp4 = tmp6;
  }
  return tmp4;
}
