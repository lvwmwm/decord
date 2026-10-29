// Module ID: 12966
// Function ID: 12967
// Name: dynamicRequire
// Dependencies: [12967, 12854]
// Exports: isBrowser

// Module 12966 (dynamicRequire)
import _mod12967 from "module_12967" /* 12967 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod12967;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(12854).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
