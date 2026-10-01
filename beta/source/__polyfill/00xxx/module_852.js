// Module ID: 852
// Function ID: 853
// Dependencies: [853, 686]
// Exports: isBrowser

// Module 852
import _mod853 from "module_853" /* 853 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const obj = _mod853;
    const isNodeEnvResult = obj.isNodeEnv();
    let tmp4 = !isNodeEnvResult;
    const tmp5 = require;
    if (isNodeEnvResult) {
      const _process = tmp5(686).GLOBAL_OBJ.process;
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
