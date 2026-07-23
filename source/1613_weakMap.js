// Module ID: 1613
// Function ID: 17914
// Name: weakMap
// Dependencies: [1585]

// Module 1613 (weakMap)
import isJest from "isJest";

isJest = isJest.shouldBeUseWeb();
const SymbolResult = Symbol("shareable flag");
let weakMap = null;
if (!isJest) {
  const _WeakMap = WeakMap;
  weakMap = new WeakMap();
}
const obj = {};
if (isJest) {
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
      tmp = closure_0;
    }
    const result = weakMap.set(arg0, tmp);
  };
  const get = weakMap.get;
  obj.get = get.bind(weakMap);
  tmp7 = obj;
}

export const shareableMappingFlag = SymbolResult;
export const shareableMappingCache = tmp7;
