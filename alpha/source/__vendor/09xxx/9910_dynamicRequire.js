// Module ID: 9910
// Function ID: 9911
// Name: dynamicRequire
// Dependencies: [9911, 9798]
// Exports: isBrowser

// Module 9910 (dynamicRequire)
import _mod9911 from "module_9911" /* 9911 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod9911;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(9798).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
