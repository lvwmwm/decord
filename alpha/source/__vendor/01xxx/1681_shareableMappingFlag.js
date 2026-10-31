// Module ID: 1681
// Function ID: 1682
// Name: shareableMappingFlag
// Dependencies: [1653]

// Module 1681 (shareableMappingFlag)
import module_1653_mod from "module_1653" /* 1653 */;

let tmp5;
let module_1653 = module_1653_mod;
module_1653 = module_1653.shouldBeUseWeb();
const SymbolResult = Symbol("shareable flag");
const _window = SymbolResult;
let weakMap = null;
if (!module_1653) {
  const _WeakMap = WeakMap;
  const self = this;
  const self2 = this;
  weakMap = new WeakMap();
}
const obj = { set: null, get: null };
if (module_1653) {
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
