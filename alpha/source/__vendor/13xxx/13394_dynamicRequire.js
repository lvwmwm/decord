// Module ID: 13394
// Function ID: 13395
// Name: dynamicRequire
// Dependencies: [13395, 13282]
// Exports: isBrowser

// Module 13394 (dynamicRequire)
import _mod13395 from "module_13395" /* 13395 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod13395;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(13282).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
