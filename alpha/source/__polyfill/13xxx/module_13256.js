// Module ID: 13256
// Function ID: 13257
// Dependencies: [13257]
// Exports: getGlobalSingleton

// Module 13256
import _mod13257 from "module_13257" /* 13257 */;


export const GLOBAL_OBJ = globalThis;
export function getGlobalSingleton(arg0, fn, arg2) {
  const tmp2 = (arg2 || globalThis).__SENTRY__ || {};
  (arg2 || globalThis).__SENTRY__ = tmp2;
  const SDK_VERSION = _mod13257.SDK_VERSION;
  const tmp3 = tmp2[_mod13257.SDK_VERSION] || {};
  tmp2[SDK_VERSION] = tmp3;
  let tmp4 = tmp3[arg0];
  if (!tmp4) {
    const tmp6 = fn();
    tmp3[arg0] = tmp6;
    tmp4 = tmp6;
  }
  return tmp4;
}
