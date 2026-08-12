// Module ID: 7608
// Function ID: 7609
// Name: isBrowser
// Dependencies: [7609, 7496]

// Module 7608 (isBrowser)
const require = arg1;
const dependencyMap = arg6;
arg5.isBrowser = function isBrowser() {
  let tmp = typeof window !== "undefined";
  if (typeof window !== "undefined") {
    const isNodeEnvResult = require(7609) /* dynamicRequire */.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = tmp4(7496).GLOBAL_OBJ.process;
      let tmp2 = _process;
      if (tmp2) {
        tmp2 = "renderer" === _process.type;
      }
      tmp3 = tmp2;
    }
    tmp = tmp3;
    const obj = require(7609) /* dynamicRequire */;
    tmp4 = require;
  }
  return tmp;
};
