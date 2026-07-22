// Module ID: 11071
// Function ID: 86124
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11071 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
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
      closure_0 = tmp;
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
function updateImpressionCaches(flag2) {
  let iter3;
  let tmp30;
  let tmp31;
  let flag = flag2;
  if (flag2 === undefined) {
    flag = false;
  }
  if (flag) {
    const _Date2 = Date;
    let num5 = 0;
    let num6 = 0;
    let num7 = 0;
    if (0 < closure_7.itemImpressions.length) {
      const tmp8 = callback3(closure_7.itemImpressions[num6], 2);
      const first = tmp8[0];
      num7 = num5;
      while (tmp8[1] < tmp4) {
        num5 = num6 + 1;
        num6 = num6 + 1;
        let tmp10 = closure_7;
        num7 = num5;
        if (num6 >= closure_7.itemImpressions.length) {
          break;
        }
      }
    }
    if (num7 > 0) {
      const itemImpressions = closure_7.itemImpressions;
      closure_7.itemImpressions = itemImpressions.slice(num7);
    }
    if (closure_7.itemImpressions.length > 2048) {
      const itemImpressions1 = closure_7.itemImpressions;
      closure_7.itemImpressions = itemImpressions1.slice(-2048);
    }
    let num10 = 1000;
    if (!closure_12) {
      num10 = closure_6;
    }
    const _Set = Set;
    const set = new Set();
    const _Set2 = Set;
    const set1 = new Set();
    const _Date3 = Date;
    const diff = Date.now() - num10;
    const tmp24 = _createForOfIteratorHelperLoose(closure_7.itemImpressions);
    const iter = tmp24();
    let iter2 = iter;
    let tmp26 = null;
    let tmp27 = null;
    if (!iter.done) {
      do {
        let tmp28 = closure_5;
        let tmp29 = closure_5(iter2.value, 2);
        [tmp30, tmp31] = tmp29;
        if (tmp31 < diff) {
          let addResult = set.add(tmp30);
          let sum = tmp26;
        } else {
          sum = tmp26;
          if (null == tmp26) {
            sum = tmp31 + num10;
          }
        }
        let addResult1 = set1.add(tmp30);
        iter3 = tmp24();
        tmp26 = sum;
        iter2 = iter3;
        tmp27 = sum;
      } while (!iter3.done);
    }
    let num11 = Infinity;
    if (null != tmp27) {
      num11 = tmp27;
    }
    let closure_10 = num11;
    let closure_11 = true;
  } else {
    const _Date = Date;
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = 3 * importDefault(dependencyMap[6]).Millis.DAY;
let closure_7 = { itemImpressions: [], hidden: false };
const set = new Set();
const set1 = new Set();
let closure_10 = 0;
let closure_11 = false;
let closure_12 = false;
let tmp4 = (PersistedStore) => {
  class ContentInventoryPersistedStore {
    constructor() {
      self = this;
      tmp = ContentInventoryPersistedStore(this, ContentInventoryPersistedStore);
      obj = closure_3(ContentInventoryPersistedStore);
      tmp2 = closure_2;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = ContentInventoryPersistedStore;
  callback2(ContentInventoryPersistedStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      obj = {};
      const merged = Object.assign(obj);
      if (null == arg0) {
        obj = {};
      }
      const merged1 = Object.assign(obj);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_7;
    }
  };
  items[1] = obj;
  obj = {
    key: "getImpressionCappedItemIds",
    value() {
      callback3();
      return closure_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getDebugFastImpressionCappingEnabled",
    value() {
      return closure_12;
    }
  };
  items[4] = {
    key: "hidden",
    get() {
      return hidden.hidden;
    }
  };
  items[5] = {
    key: "reset",
    value() {
      let closure_7 = { itemImpressions: [], hidden: false };
    }
  };
  return callback(ContentInventoryPersistedStore, items);
}(importDefault(dependencyMap[7]).PersistedStore);
tmp4.displayName = "ContentInventoryPersistedStore";
tmp4.persistKey = "ContentInventoryPersistedStore";
tmp4 = new tmp4(importDefault(dependencyMap[8]), {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function handleImpressionsTracked(itemIds) {
    let iter3;
    if (!closure_11) {
      updateImpressionCaches();
    }
    const timestamp = Date.now();
    const tmp4 = _createForOfIteratorHelperLoose(itemIds.itemIds);
    const iter = tmp4();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp5 = closure_9;
        if (!closure_9.has(value)) {
          let tmp6 = closure_7;
          let itemImpressions = closure_7.itemImpressions;
          let items = [value, timestamp];
          let arr = itemImpressions.push(items);
          flag = true;
        }
        iter3 = tmp4();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    updateImpressionCaches(flag2);
    return flag2;
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function handleDebugClearImpressions() {
    closure_7.itemImpressions = [];
    updateImpressionCaches(true);
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function handleDebugLogImpressions() {
    return false;
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function handleDebugToggleFastImpressionCapping() {
    closure_12 = !closure_12;
  },
  CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function handleToggleContentInventoryFeedHidden() {
    closure_7.hidden = !closure_7.hidden;
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/content_inventory/ContentInventoryPersistedStore.tsx");

export default tmp4;
