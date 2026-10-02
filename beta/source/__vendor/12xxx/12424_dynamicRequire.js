// Module ID: 12424
// Function ID: 12425
// Name: dynamicRequire
// Dependencies: [12425, 12312]
// Exports: isBrowser

// Module 12424 (dynamicRequire)
import _mod12425 from "module_12425" /* 12425 */;


export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod12425;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(12312).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
};
