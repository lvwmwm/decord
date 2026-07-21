// Module ID: 14453
// Function ID: 108909
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 14453 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const NodeType = arg1(dependencyMap[2]).NodeType;
let closure_5 = () => {
  class SettingTreeManagerCache {
    constructor() {
      tmp = closure_2(this, SettingTreeManagerCache);
      this.cache = {};
      return;
    }
  }
  const arg1 = SettingTreeManagerCache;
  let obj = {
    key: "get",
    value(arg0) {
      return this.cache[arg0];
    }
  };
  const items = [obj, , ];
  obj = {
    key: "set",
    value(arg0, arg1) {
      this.cache[arg0] = arg1;
    }
  };
  items[1] = obj;
  obj = {
    key: "clear",
    value() {
      this.cache = {};
    }
  };
  items[2] = obj;
  return callback(SettingTreeManagerCache, items);
}();
let tmp2 = () => {
  class SettingTreeManager {
    constructor() {
      tmp = closure_2(this, SettingTreeManager);
      tmp2 = new closure_5();
      this.highestAncestorCache = tmp2;
      tmp3 = new closure_5();
      this.breadcrumbCache = tmp3;
      return;
    }
  }
  const arg1 = SettingTreeManager;
  let obj = {
    key: "transformParent",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        let tmp2 = arg0;
        if ("string" !== typeof arg0) {
          tmp2 = arg0();
        }
        tmp = tmp2;
      }
      return tmp;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "validate",
    value() {

    }
  };
  items[1] = obj;
  obj = {
    key: "getAncestors",
    value(arg0) {
      const self = this;
      const items = [];
      let transformParentResult = this.transformParent(SettingTreeManager(closure_1[3]).SETTING_RENDERER_CONFIG[arg0].parent);
      if (null != transformParentResult) {
        do {
          let arr = items.push(transformParentResult);
          let tmp3 = closure_0;
          let tmp4 = closure_1;
          transformParentResult = self.transformParent(closure_0(closure_1[3]).SETTING_RENDERER_CONFIG[transformParentResult].parent);
        } while (null != transformParentResult);
      }
      return items;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isBlocked",
    value(arg0, arg1) {
      const SettingTreeManager = arg1;
      const ancestors = this.getAncestors(arg0);
      ancestors.push(arg0);
      return ancestors.some((arg0) => arg1.has(arg0));
    }
  };
  items[4] = {
    key: "getHighestLevelAncestor",
    value(arg0) {
      const self = this;
      const highestAncestorCache = this.highestAncestorCache;
      const value = highestAncestorCache.get(arg0);
      if (null != value) {
        return value;
      } else {
        const ancestors = self.getAncestors(arg0);
        let tmp3 = arg0;
        if (null != ancestors[ancestors.length - 1]) {
          tmp3 = tmp2;
        }
        const highestAncestorCache2 = self.highestAncestorCache;
        const result = highestAncestorCache2.set(arg0, tmp3);
        return tmp3;
      }
    }
  };
  items[5] = {
    key: "getNearestRouteAncestorDataOrSelf",
    value(arg0) {
      const self = this;
      const tmp = SettingTreeManager(closure_1[3]).SETTING_RENDERER_CONFIG[arg0];
      if (tmp.type === constants.ROUTE) {
        return tmp;
      } else {
        const tmp12 = callback2(self.getAncestors(arg0));
        const iter3 = tmp12();
        let iter2 = iter3;
        if (!iter3.done) {
          const tmp4 = SettingTreeManager(closure_1[3]).SETTING_RENDERER_CONFIG[iter2.value];
          while (tmp4.type !== constants.ROUTE) {
            let iter = tmp12();
            iter2 = iter;
          }
          return tmp4;
        }
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("[SettingTree] No route ancestor found for setting: " + arg0);
        throw error;
      }
    }
  };
  items[6] = {
    key: "getBreadcrumbs",
    value(arg0) {
      let iter;
      const self = this;
      const breadcrumbCache = this.breadcrumbCache;
      const value = breadcrumbCache.get(arg0);
      if (null != value) {
        return value;
      } else {
        const items = [];
        const tmp8 = callback2(self.getAncestors(arg0));
        let iter2 = tmp8();
        if (!iter2.done) {
          do {
            let tmp2 = closure_0;
            let tmp3 = closure_1;
            let obj = closure_0(closure_1[4]);
            let cachedSettingTitle = obj.getCachedSettingTitle(iter2.value);
            if (null != cachedSettingTitle) {
              let arr = items.push(cachedSettingTitle);
            }
            iter = tmp8();
            iter2 = iter;
          } while (!iter.done);
        }
        const breadcrumbCache2 = self.breadcrumbCache;
        const result = breadcrumbCache2.set(arg0, items.reverse());
        return items;
      }
    }
  };
  items[7] = {
    key: "clearCaches",
    value() {
      const breadcrumbCache = this.breadcrumbCache;
      breadcrumbCache.clear();
      const highestAncestorCache = this.highestAncestorCache;
      highestAncestorCache.clear();
    }
  };
  return callback(SettingTreeManager, items);
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/settings/native/renderer/SettingTreeManager.tsx");

export default tmp2;
