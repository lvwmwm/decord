// Module ID: 13391
// Function ID: 13392
// Name: dynamicRequire
// Dependencies: [13392, 13279]
// Exports: isBrowser

// Module 13391 (dynamicRequire)
import _mod13392 from "module_13392" /* 13392 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod13392;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(13279).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
