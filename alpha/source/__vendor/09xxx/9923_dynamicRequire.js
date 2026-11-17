// Module ID: 9923
// Function ID: 9924
// Name: dynamicRequire
// Dependencies: [9924, 9811]
// Exports: isBrowser

// Module 9923 (dynamicRequire)
import _mod9924 from "module_9924" /* 9924 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod9924;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(9811).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
