// Module ID: 963
// Function ID: 10430
// Name: isBrowser
// Dependencies: [964, 798]

// Module 963 (isBrowser)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.isBrowser = function isBrowser() {
  let tmp = "undefined" !== typeof window;
  if (tmp) {
    let tmp4 = !require(964) /* dynamicRequire */.isNodeEnv();
    if (!tmp4) {
      const _process = require(798).GLOBAL_OBJ.process;
      let type;
      if (null != _process) {
        type = _process.type;
      }
      tmp4 = "renderer" === type;
    }
    tmp = tmp4;
    const obj = require(964) /* dynamicRequire */;
  }
  return tmp;
};
