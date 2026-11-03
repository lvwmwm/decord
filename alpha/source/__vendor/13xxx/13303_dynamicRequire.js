// Module ID: 13303
// Function ID: 13304
// Name: dynamicRequire
// Dependencies: [13304, 13191]
// Exports: isBrowser

// Module 13303 (dynamicRequire)
import _mod13304 from "module_13304" /* 13304 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod13304;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(13191).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
