// Module ID: 12427
// Function ID: 12428
// Dependencies: [12428]
// Exports: isNodeEnv, loadModule

// Module 12427
import _mod12428 from "module_12428" /* 12428 */;

function dynamicRequire(require, arg1) {
  return require.require(arg1);
}

export { dynamicRequire };
export const isNodeEnv = function isNodeEnv() {
  const obj = _mod12428;
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
};
export const loadModule = function loadModule(arg0) {
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
};
