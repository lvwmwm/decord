// Module ID: 7350
// Function ID: 59279
// Name: dynamicRequire
// Dependencies: [7351]

// Module 7350 (dynamicRequire)
const require = arg1;
let dependencyMap = arg4;
dependencyMap = arg6;
function dynamicRequire(require) {
  return require.require(arg1);
}
arg5.dynamicRequire = dynamicRequire;
arg5.isNodeEnv = function isNodeEnv() {
  let tmp = !require(7351) /* getSDKSource */.isBrowserBundle();
  if (tmp) {
    const _Object = Object;
    const _process = process;
    let num = 0;
    if ("undefined" !== typeof process) {
      num = process;
    }
    tmp = "[object process]" === toString.call(num);
  }
  return tmp;
};
arg5.loadModule = function loadModule(arg0) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let tmp = arguments[1];
    }
    let tmp6 = dynamicRequire(tmp, arg0);
    while (true) {
      let tmp7 = tmp6;
      if (tmp6) {
        break;
      } else {
        let tmp8 = dynamicRequire;
        let str = "process";
        let tmp9 = arg0;
        let tmp10 = globalThis;
        let _HermesInternal = HermesInternal;
        let str2 = "";
        let str3 = "/node_modules/";
        tmp6 = dynamicRequire(tmp, "" + dynamicRequire(tmp, "process").cwd() + "/node_modules/" + arg0);
        break;
      }
    }
  }
  tmp = dependencyMap;
};
