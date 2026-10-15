// Module ID: 12388
// Function ID: 12389
// Name: dynamicRequire
// Dependencies: [12389, 12276]
// Exports: isBrowser

// Module 12388 (dynamicRequire)
import _mod12389 from "module_12389" /* 12389 */;


export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod12389;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(12276).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
};
