// Module ID: 13153
// Function ID: 13154
// Dependencies: [13154]
// Exports: isNodeEnv, loadModule

// Module 13153
import _mod13154 from "module_13154" /* 13154 */;

function dynamicRequire(require, arg1) {
  return require.require(arg1);
}

export { dynamicRequire };
export function isNodeEnv() {
  const obj = _mod13154;
  let tmp2 = !obj.isBrowserBundle();
  obj.isBrowserBundle();
  if (tmp2) {
    const _Object = Object;
    const _process = process;
    let num = 0;
    const call = toString.call;
    if (typeof process !== "undefined") {
      num = process;
    }
    tmp2 = "[object process]" === call(num);
  }
  return tmp2;
}
export function loadModule(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = module;
  }
  let tmp2;
  try {
    tmp2 = dynamicRequire(tmp, arg0);
  } catch (err) {
  }
  const tmp4 = tmp2;
  if (!tmp4) {
    try {
      const _HermesInternal = HermesInternal;
      tmp2 = dynamicRequire(tmp, "" + dynamicRequire(tmp, "process").cwd() + "/node_modules/" + arg0);
    } catch (err) {
    }
  }
  return tmp2;
}
