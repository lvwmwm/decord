// Module ID: 13167
// Function ID: 13168
// Dependencies: [13168, 13055]
// Exports: isBrowser

// Module 13167
import _mod13168 from "module_13168" /* 13168 */;

require = arg1;
const dependencyMap = arg6;

export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = _mod13168.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = tmp4(13055).GLOBAL_OBJ.process;
      let tmp2 = _process;
      if (tmp2) {
        tmp2 = "renderer" === _process.type;
      }
      tmp3 = tmp2;
    }
    tmp = tmp3;
    tmp4 = require;
  }
  return tmp;
};
