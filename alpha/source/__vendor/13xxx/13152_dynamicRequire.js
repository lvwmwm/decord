// Module ID: 13152
// Function ID: 13153
// Name: dynamicRequire
// Dependencies: [13153, 13040]
// Exports: isBrowser

// Module 13152 (dynamicRequire)
import _mod13153 from "module_13153" /* 13153 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod13153;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(13040).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
