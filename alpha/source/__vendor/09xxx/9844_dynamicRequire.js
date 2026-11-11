// Module ID: 9844
// Function ID: 9845
// Name: dynamicRequire
// Dependencies: [9845, 9732]
// Exports: isBrowser

// Module 9844 (dynamicRequire)
import _mod9845 from "module_9845" /* 9845 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod9845;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(9732).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
