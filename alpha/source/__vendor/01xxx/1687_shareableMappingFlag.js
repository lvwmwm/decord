// Module ID: 1687
// Function ID: 1688
// Name: shareableMappingFlag
// Dependencies: [1659]

// Module 1687 (shareableMappingFlag)
import module_1659_mod from "module_1659" /* 1659 */;

let tmp5;
let module_1659 = module_1659_mod;
module_1659 = module_1659.shouldBeUseWeb();
const SymbolResult = Symbol("shareable flag");
const _window = SymbolResult;
let weakMap = null;
if (!module_1659) {
  const _WeakMap = WeakMap;
  const self = this;
  const self2 = this;
  weakMap = new WeakMap();
}
const obj = { set: null, get: null };
if (module_1659) {
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
