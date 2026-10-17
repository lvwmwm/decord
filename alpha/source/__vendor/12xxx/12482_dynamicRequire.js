// Module ID: 12482
// Function ID: 12483
// Name: dynamicRequire
// Dependencies: [12483, 12370]
// Exports: isBrowser

// Module 12482 (dynamicRequire)
import _mod12483 from "module_12483" /* 12483 */;


export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod12483;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(12370).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
};
