// Module ID: 13167
// Function ID: 13168
// Name: dynamicRequire
// Dependencies: [13168, 13055]
// Exports: isBrowser

// Module 13167 (dynamicRequire)
import _mod13168 from "module_13168" /* 13168 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod13168;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(13055).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
