// Module ID: 11106
// Function ID: 11107
// Name: dynamicRequire
// Dependencies: [11107, 10994]
// Exports: isBrowser

// Module 11106 (dynamicRequire)
import _mod11107 from "module_11107" /* 11107 */;


export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod11107;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(10994).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
};
