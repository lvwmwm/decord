// Module ID: 1689
// Function ID: 1690
// Name: shareableMappingFlag
// Dependencies: [1661]

// Module 1689 (shareableMappingFlag)
import module_1661_mod from "module_1661" /* 1661 */;

let tmp5;
let module_1661 = module_1661_mod;
module_1661 = module_1661.shouldBeUseWeb();
const SymbolResult = Symbol("shareable flag");
const _window = SymbolResult;
let weakMap = null;
if (!module_1661) {
  const _WeakMap = WeakMap;
  const self = this;
  const self2 = this;
  weakMap = new WeakMap();
}
const obj = { set: null, get: null };
if (module_1661) {
  obj.set = function set() {

  };
  obj.get = function get() {
    return null;
  };
  tmp5 = obj;
} else {
  obj.set = function set(arg0, arg1) {
    let tmp = arg1;
    set = weakMap.set;
    if (!arg1) {
      tmp = _window;
    }
    const result = set(arg0, tmp);
  };
  const get = weakMap.get;
  obj.get = get.bind(weakMap);
  tmp5 = obj;
}

export const shareableMappingFlag = SymbolResult;
export const shareableMappingCache = tmp5;
