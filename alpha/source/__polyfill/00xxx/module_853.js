// Module ID: 853
// Function ID: 854
// Dependencies: [854]
// Exports: isNodeEnv, loadModule

// Module 853
import _mod854 from "module_854" /* 854 */;

function dynamicRequire(module, process) {
  return module.require(process);
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function isNodeEnv() {
  const obj = _mod854;
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
export function loadModule(process, module) {
  let tmp = module;
  if (module === undefined) {
    tmp = module;
  }
  let tmp2;
  try {
    tmp2 = dynamicRequire(tmp, process);
  } catch (err) {
  }
  const tmp4 = tmp2;
  if (!tmp4) {
    try {
      const _HermesInternal = HermesInternal;
      tmp2 = dynamicRequire(tmp, "" + dynamicRequire(tmp, "process").cwd() + "/node_modules/" + process);
    } catch (err) {
    }
  }
  return tmp2;
}
