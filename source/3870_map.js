// Module ID: 3870
// Function ID: 32124
// Name: map
// Dependencies: []

// Module 3870 (map)
const map = new Map();
arg5.getHybridObjectConstructor = function getHybridObjectConstructor(arg0) {
  const arg1 = arg0;
  if (map.has(arg0)) {
    return map.get(arg0);
  } else {
    function constructorFunc() {
      const NitroModules = arg0(constructorFunc[0]).NitroModules;
      const hybridObject = NitroModules.createHybridObject(arg0);
      const prototypeOf = Object.getPrototypeOf(hybridObject);
      if (constructorFunc.prototype !== prototypeOf) {
        constructorFunc.prototype = prototypeOf;
        constructorFunc.prototypeInitialized = true;
      }
      return hybridObject;
    }
    const arg6 = constructorFunc;
    constructorFunc.prototypeInitialized = false;
    const _Object = Object;
    const _Symbol = Symbol;
    const obj = {
      value(arg0) {
          if (!constructorFunc.prototypeInitialized) {
            const NitroModules = arg0(constructorFunc[0]).NitroModules;
            const _Object = Object;
            constructorFunc.prototype = Object.getPrototypeOf(NitroModules.createHybridObject(arg0));
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
    Object.defineProperty(constructorFunc, Symbol.hasInstance, obj);
    const result = map.set(arg0, constructorFunc);
    return constructorFunc;
  }
};
