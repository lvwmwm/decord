// Module ID: 1613
// Function ID: 17913
// Name: weakMap
// Dependencies: []

// Module 1613 (weakMap)
const _module = require(dependencyMap[0]);
const shouldBeUseWebResult = _module.shouldBeUseWeb();
const SymbolResult = Symbol("shareable flag");
let weakMap = null;
if (!shouldBeUseWebResult) {
  const _WeakMap = WeakMap;
  weakMap = new WeakMap();
}
const obj = {};
if (shouldBeUseWebResult) {
  obj.set = function set() {

  };
  obj.get = function get() {
    return null;
  };
  let tmp7 = obj;
} else {
  obj.set = function set(arg0, arg1) {
    let tmp = arg1;
    if (!arg1) {
      tmp = SymbolResult;
    }
    const result = weakMap.set(arg0, tmp);
  };
  const get = weakMap.get;
  obj.get = get.bind(weakMap);
  tmp7 = obj;
}

export const shareableMappingFlag = SymbolResult;
export const shareableMappingCache = tmp7;
