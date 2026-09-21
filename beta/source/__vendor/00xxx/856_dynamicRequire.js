// Module ID: 856
// Function ID: 857
// Name: dynamicRequire
// Dependencies: [857, 690]
// Exports: isBrowser

// Module 856 (dynamicRequire)
import _mod857 from "module_857" /* 857 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = _mod857.isNodeEnv();
    let tmp4 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = tmp5(690).GLOBAL_OBJ.process;
      let type;
      if (_process != null) {
        type = _process.type;
      }
      tmp4 = "renderer" === type;
    }
    tmp = tmp4;
    tmp5 = require;
  }
  return tmp;
};
