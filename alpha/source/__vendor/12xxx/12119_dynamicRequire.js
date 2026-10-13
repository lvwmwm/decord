// Module ID: 12119
// Function ID: 12120
// Name: dynamicRequire
// Dependencies: [12120, 12007]
// Exports: isBrowser

// Module 12119 (dynamicRequire)
import _mod12120 from "module_12120" /* 12120 */;


export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod12120;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(12007).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
};
