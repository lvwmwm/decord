// Module ID: 13368
// Function ID: 13369
// Name: dynamicRequire
// Dependencies: [13369, 13256]
// Exports: isBrowser

// Module 13368 (dynamicRequire)
import _mod13369 from "module_13369" /* 13369 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod13369;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(13256).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
