// Module ID: 6460
// Function ID: 57848
// Name: isBrowser
// Dependencies: [6461, 6348]

// Module 6460 (isBrowser)
const require = arg1;
const dependencyMap = arg6;
arg5.isBrowser = function isBrowser() {
  let tmp = "undefined" !== typeof window;
  if (tmp) {
    let tmp4 = !require(6461) /* dynamicRequire */.isNodeEnv();
    if (!tmp4) {
      const _process = require(6348) /* getGlobalSingleton */.GLOBAL_OBJ.process;
      let tmp8 = !tmp7;
      if (!!_process) {
        tmp8 = "renderer" === _process.type;
      }
      tmp4 = tmp8;
    }
    tmp = tmp4;
    const obj = require(6461) /* dynamicRequire */;
  }
  return tmp;
};
