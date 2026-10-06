// Module ID: 12425
// Function ID: 12426
// Dependencies: [12426]
// Exports: isNodeEnv, loadModule

// Module 12425
import _mod12426 from "module_12426" /* 12426 */;

function dynamicRequire(require, arg1) {
  return require.require(arg1);
}

export { dynamicRequire };
export const isNodeEnv = function isNodeEnv() {
  const obj = _mod12426;
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
