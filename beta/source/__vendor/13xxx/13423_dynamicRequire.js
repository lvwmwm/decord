// Module ID: 13423
// Function ID: 13424
// Name: dynamicRequire
// Dependencies: [13424, 13311]
// Exports: isBrowser

// Module 13423 (dynamicRequire)
import _mod13424 from "module_13424" /* 13424 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod13424;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(13311).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
