// Module ID: 6424
// Function ID: 57758
// Name: isBrowser
// Dependencies: [6425, 6312]

// Module 6424 (isBrowser)
const require = arg1;
const dependencyMap = arg6;
arg5.isBrowser = function isBrowser() {
  let tmp = "undefined" !== typeof window;
  if (tmp) {
    let tmp4 = !require(6425) /* dynamicRequire */.isNodeEnv();
    if (!tmp4) {
      const _process = require(6312) /* getGlobalSingleton */.GLOBAL_OBJ.process;
      let tmp8 = !tmp7;
      if (!!_process) {
        tmp8 = "renderer" === _process.type;
      }
      tmp4 = tmp8;
    }
    tmp = tmp4;
    const obj = require(6425) /* dynamicRequire */;
  }
  return tmp;
};
