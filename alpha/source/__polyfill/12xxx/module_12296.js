// Module ID: 12296
// Function ID: 12297
// Dependencies: [12297]
// Exports: getGlobalSingleton

// Module 12296
import _mod12297 from "module_12297" /* 12297 */;

require = arg1;
const dependencyMap = arg6;

export const GLOBAL_OBJ = globalThis;
export const getGlobalSingleton = function getGlobalSingleton(arg0, fn, arg2) {
  let tmp = arg2;
  if (!arg2) {
    tmp = globalThis;
  }
  const tmp2 = tmp.__SENTRY__ || {};
  tmp.__SENTRY__ = tmp2;
  const tmp3 = tmp2[_mod12297.SDK_VERSION] || {};
  tmp2[_mod12297.SDK_VERSION] = tmp3;
  let tmp4 = tmp3[arg0];
  if (!tmp4) {
    const tmp6 = fn();
    tmp3[arg0] = tmp6;
    tmp4 = tmp6;
  }
  return tmp4;
};
