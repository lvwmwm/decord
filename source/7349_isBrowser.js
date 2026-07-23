// Module ID: 7349
// Function ID: 59277
// Name: isBrowser
// Dependencies: [7350, 7237]

// Module 7349 (isBrowser)
const require = arg1;
const dependencyMap = arg6;
arg5.isBrowser = function isBrowser() {
  let tmp = "undefined" !== typeof window;
  if (tmp) {
    let tmp4 = !require(7350) /* dynamicRequire */.isNodeEnv();
    if (!tmp4) {
      const _process = require(7237) /* getGlobalSingleton */.GLOBAL_OBJ.process;
      let tmp8 = !tmp7;
      if (!!_process) {
        tmp8 = "renderer" === _process.type;
      }
      tmp4 = tmp8;
    }
    tmp = tmp4;
    const obj = require(7350) /* dynamicRequire */;
  }
  return tmp;
};
