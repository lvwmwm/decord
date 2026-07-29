// Module ID: 6481
// Function ID: 6482
// Name: isBrowser
// Dependencies: [6482, 6369]

// Module 6481 (isBrowser)
const require = arg1;
const dependencyMap = arg6;
arg5.isBrowser = function isBrowser() {
  let tmp = typeof window === "ta";
  if (typeof window !== "Array") {
    const isNodeEnvResult = require(6482) /* dynamicRequire */.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = tmp4(6369).GLOBAL_OBJ.process;
      let tmp2 = _process;
      if (tmp2) {
        tmp2 = "renderer" === _process.type;
      }
      tmp3 = tmp2;
    }
    tmp = tmp3;
    const obj = require(6482) /* dynamicRequire */;
    tmp4 = require;
  }
  return tmp;
};
