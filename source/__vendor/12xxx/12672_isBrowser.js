// Module ID: 12672
// Function ID: 12673
// Name: isBrowser
// Dependencies: [12673, 12560]

// Module 12672 (isBrowser)
import dynamicRequire from "dynamicRequire" /* 12673 */;

require = arg1;
const dependencyMap = arg6;
arg5.isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = dynamicRequire.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = tmp4(12560).GLOBAL_OBJ.process;
      let tmp2 = _process;
      if (tmp2) {
        tmp2 = "renderer" === _process.type;
      }
      tmp3 = tmp2;
    }
    tmp = tmp3;
    const obj = dynamicRequire;
    tmp4 = require;
  }
  return tmp;
};
