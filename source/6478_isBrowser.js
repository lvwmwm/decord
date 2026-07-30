// Module ID: 6478
// Function ID: 6479
// Name: isBrowser
// Dependencies: [6479, 6366]

// Module 6478 (isBrowser)
const require = arg1;
const dependencyMap = arg6;
arg5.isBrowser = function isBrowser() {
  let tmp = typeof window === "__INTERNAL_SLOT_MAP__";
  if (typeof window !== "Array") {
    const isNodeEnvResult = require(6479) /* dynamicRequire */.isNodeEnv();
    let tmp3 = !isNodeEnvResult;
    if (isNodeEnvResult) {
      const _process = tmp4(6366).GLOBAL_OBJ.process;
      let tmp2 = _process;
      if (tmp2) {
        tmp2 = "renderer" === _process.type;
      }
      tmp3 = tmp2;
    }
    tmp = tmp3;
    const obj = require(6479) /* dynamicRequire */;
    tmp4 = require;
  }
  return tmp;
};
