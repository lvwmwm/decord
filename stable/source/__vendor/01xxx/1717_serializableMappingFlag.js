// Module ID: 1717
// Function ID: 1718
// Name: serializableMappingFlag
// Dependencies: []

// Module 1717 (serializableMappingFlag)
let set;

let get;
const SymbolResult = Symbol("serializable flag");
const _window = SymbolResult;
const weakMap = new WeakMap();
const obj = {
  set(arg0, arg1) {
    let tmp = arg1;
    set = weakMap.set;
    if (!arg1) {
      tmp = _window;
    }
    const result = set(arg0, tmp);
  },
  get: get.bind(weakMap)
};
get = weakMap.get;

export const serializableMappingFlag = SymbolResult;
export const serializableMappingCache = obj;
