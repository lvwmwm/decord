// Module ID: 13117
// Function ID: 13118
// Name: dynamicRequire
// Dependencies: [13118, 13005]
// Exports: isBrowser

// Module 13117 (dynamicRequire)
import _mod13118 from "module_13118" /* 13118 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod13118;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(13005).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
