// Module ID: 4861
// Function ID: 4862
// Dependencies: [4853]
// Exports: getHybridObjectConstructor

// Module 4861
import installedNitro1 from "installedNitro1" /* 4853 */;

const map = new Map();

export const getHybridObjectConstructor = function getHybridObjectConstructor(arg0) {
  let closure_0 = arg0;
  if (map.has(arg0)) {
    return map.get(arg0);
  } else {
    function constructorFunc() {
      const NitroModules = installedNitro1.NitroModules;
      const hybridObject = NitroModules.createHybridObject(closure_0);
      const prototypeOf = Object.getPrototypeOf(hybridObject);
      if (constructorFunc.prototype !== prototypeOf) {
        constructorFunc.prototype = prototypeOf;
        constructorFunc.prototypeInitialized = true;
      }
      return hybridObject;
    }
    constructorFunc.prototypeInitialized = false;
    let _Object = Object;
    const _Symbol = Symbol;
    const obj2 = {
      value(arg0) {
          if (!constructorFunc.prototypeInitialized) {
            const NitroModules = installedNitro1.NitroModules;
            const _Object = Object;
            constructorFunc.prototype = Object.getPrototypeOf(NitroModules.createHybridObject(closure_0));
            constructorFunc.prototypeInitialized = true;
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
