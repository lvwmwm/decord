// Module ID: 13405
// Function ID: 13406
// Name: dynamicRequire
// Dependencies: [13406, 13293]
// Exports: isBrowser

// Module 13405 (dynamicRequire)
import _mod13406 from "module_13406" /* 13406 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod13406;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(13293).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
