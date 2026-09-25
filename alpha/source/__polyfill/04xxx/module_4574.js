// Module ID: 4574
// Function ID: 4575
// Dependencies: [4566]
// Exports: getHybridObjectConstructor

// Module 4574
import _mod4566 from "module_4566" /* 4566 */;

require = arg1;
const dependencyMap = arg6;
const map = new Map();

export const getHybridObjectConstructor = function getHybridObjectConstructor(arg0) {
  closure_0 = arg0;
  if (map.has(arg0)) {
    return obj.get(arg0);
  } else {
    function constructorFunc() {
      const NitroModules = _mod4566.NitroModules;
      const hybridObject = NitroModules.createHybridObject(closure_0);
      const prototypeOf = Object.getPrototypeOf(hybridObject);
      if (constructorFunc.prototype !== prototypeOf) {
        tmp3.prototype = prototypeOf;
        tmp3.prototypeInitialized = true;
      }
      return hybridObject;
    }
    constructorFunc.prototypeInitialized = false;
    let _Object = Object;
    const _Symbol = Symbol;
    const obj2 = {
      value(arg0) {
          if (!constructorFunc.prototypeInitialized) {
            const NitroModules = _mod4566.NitroModules;
            const _Object = Object;
            tmp.prototype = Object.getPrototypeOf(NitroModules.createHybridObject(closure_0));
            tmp.prototypeInitialized = true;
          }
          let prototypeOf = Object.getPrototypeOf(arg0);
          if (null != prototypeOf) {
            while (prototypeOf !== constructorFunc.prototype) {
              let _Object2 = Object;
              prototypeOf = Object.getPrototypeOf(prototypeOf);
            }
            return true;
          }
          return false;
        }
    };
    Object.defineProperty(constructorFunc, Symbol.hasInstance, obj2);
    const result = obj.set(arg0, constructorFunc);
    return constructorFunc;
  }
};
