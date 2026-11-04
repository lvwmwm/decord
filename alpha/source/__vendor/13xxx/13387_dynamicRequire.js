// Module ID: 13387
// Function ID: 13388
// Name: dynamicRequire
// Dependencies: [13388, 13275]
// Exports: isBrowser

// Module 13387 (dynamicRequire)
import _mod13388 from "module_13388" /* 13388 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod13388;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(13275).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
