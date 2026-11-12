// Module ID: 9843
// Function ID: 9844
// Name: dynamicRequire
// Dependencies: [9844, 9731]
// Exports: isBrowser

// Module 9843 (dynamicRequire)
import _mod9844 from "module_9844" /* 9844 */;


export function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod9844;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(9731).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
}
