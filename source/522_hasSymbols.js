// Module ID: 522
// Function ID: 6626
// Name: hasSymbols
// Dependencies: []

// Module 522 (hasSymbols)

export default function hasSymbols() {
  if ("function" === typeof Symbol) {
    const _Object9 = Object;
    if ("function" === typeof Object.getOwnPropertySymbols) {
      const _Symbol = Symbol;
      if ("symbol" === typeof Symbol.iterator) {
        return true;
      } else {
        const obj = {};
        const _Symbol2 = Symbol;
        const SymbolResult = Symbol("test");
        const _Object10 = Object;
        const ObjectResult = Object(SymbolResult);
        if ("string" === typeof SymbolResult) {
          return false;
        } else {
          const _Object11 = Object;
          if ("[object Symbol]" !== toString.call(SymbolResult)) {
            return false;
          } else {
            const _Object12 = Object;
            if ("[object Symbol]" !== toString2.call(ObjectResult)) {
              return false;
            } else {
              obj[SymbolResult] = 42;
              const keys = Object.keys();
              if (keys !== undefined) {
                if (keys[ObjectResult] !== undefined) {
                  return false;
                }
              }
              const _Object = Object;
              if ("function" === typeof Object.keys) {
                const _Object2 = Object;
                if (0 !== Object.keys(obj).length) {
                  return false;
                }
              }
              const _Object3 = Object;
              if ("function" === typeof Object.getOwnPropertyNames) {
                const _Object4 = Object;
                if (0 !== Object.getOwnPropertyNames(obj).length) {
                  return false;
                }
              }
              const _Object5 = Object;
              const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
              if (1 === ownPropertySymbols.length) {
                if (ownPropertySymbols[0] === SymbolResult) {
                  const _Object6 = Object;
                  if (propertyIsEnumerable.call(obj, SymbolResult)) {
                    const _Object7 = Object;
                    if ("function" === typeof Object.getOwnPropertyDescriptor) {
                      const _Object8 = Object;
                      const iter = Object.getOwnPropertyDescriptor(obj, SymbolResult);
                      return false;
                    }
                    return true;
                  } else {
                    return false;
                  }
                }
              }
              return false;
            }
          }
        }
      }
    }
  }
  return false;
};
