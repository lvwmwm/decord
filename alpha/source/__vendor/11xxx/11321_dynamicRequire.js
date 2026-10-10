// Module ID: 11321
// Function ID: 11322
// Name: dynamicRequire
// Dependencies: [11322, 11209]
// Exports: isBrowser

// Module 11321 (dynamicRequire)
import _mod11322 from "module_11322" /* 11322 */;


export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod11322;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(11209).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
};
