// Module ID: 12633
// Function ID: 12634
// Name: dynamicRequire
// Dependencies: [12634, 12521]
// Exports: isBrowser

// Module 12633 (dynamicRequire)
import _mod12634 from "module_12634" /* 12634 */;


export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod12634;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    const tmp4 = require;
    if (isNodeEnvResult) {
      const _process = tmp4(12521).GLOBAL_OBJ.process;
      tmp3 = _process && "renderer" === _process.type;
      const tmp2 = _process && "renderer" === _process.type;
    }
    tmp = tmp3;
  }
  return tmp;
};
