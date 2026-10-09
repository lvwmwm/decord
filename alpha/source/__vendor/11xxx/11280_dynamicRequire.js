// Module ID: 11280
// Function ID: 11281
// Name: dynamicRequire
// Dependencies: [11281, 11168]
// Exports: isBrowser

// Module 11280 (dynamicRequire)
import _mod11281 from "module_11281" /* 11281 */;


export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod11281;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(11168).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
};
