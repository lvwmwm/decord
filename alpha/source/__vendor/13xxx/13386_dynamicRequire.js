// Module ID: 13386
// Function ID: 13387
// Name: dynamicRequire
// Dependencies: [13387, 13274]
// Exports: isBrowser

// Module 13386 (dynamicRequire)
import _mod13387 from "module_13387" /* 13387 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod13387;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(13274).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
