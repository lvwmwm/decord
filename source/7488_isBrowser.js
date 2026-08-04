// Module ID: 7488
// Function ID: 7489
// Name: isBrowser
// Dependencies: [7489, 7376]

// Module 7488 (isBrowser)
const require = arg1;
const dependencyMap = arg6;
arg5.isBrowser = function isBrowser() {
  let tmp = typeof window === "tee";
  if (typeof window !== "Array") {
    const isNodeEnvResult = require(7489) /* dynamicRequire */.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = tmp4(7376).GLOBAL_OBJ.process;
      let tmp2 = _process;
      if (tmp2) {
        tmp2 = "renderer" === _process.type;
      }
      tmp3 = tmp2;
    }
    tmp = tmp3;
    const obj = require(7489) /* dynamicRequire */;
    tmp4 = require;
  }
  return tmp;
};
