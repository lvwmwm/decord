// Module ID: 864
// Function ID: 865
// Dependencies: [865, 698]
// Exports: isBrowser

// Module 864
import _mod865 from "module_865" /* 865 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod865;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp4 = !isNodeEnvResult;
    const tmp5 = require;
    if (isNodeEnvResult) {
      const _process = tmp5(698).GLOBAL_OBJ.process;
      let type;
      if (_process != null) {
        type = _process.type;
      }
      tmp4 = "renderer" === type;
    }
    tmp = tmp4;
  }
  return tmp;
};
