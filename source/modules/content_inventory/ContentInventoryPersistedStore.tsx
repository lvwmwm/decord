// Module ID: 11108
// Function ID: 86363
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 664, 566, 686, 2]

// Module 11108 (_isNativeReflectConstruct)
import closure_0 from "set";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
    let c1 = 0;
    return () => {
      if (initialize >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        initialize = tmp3 + 1;
        obj.value = length[+initialize];
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
    if (!c12) {
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
        let tmp28 = callback3;
        let tmp29 = callback3(iter2.value, 2);
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
    let c11 = true;
  } else {
    const _Date = Date;
  }
}
let closure_6 = 3 * require("set").Millis.DAY;
let closure_7 = { itemImpressions: [], hidden: false };
let set = new Set();
let set1 = new Set();
let c10 = 0;
let c11 = false;
let c12 = false;
let tmp4 = ((PersistedStore) => {
  class ContentInventoryPersistedStore {
    constructor() {
      self = this;
      tmp = ContentInventoryPersistedStore(this, ContentInventoryPersistedStore);
      obj = outer1_3(ContentInventoryPersistedStore);
      tmp2 = outer1_2;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ContentInventoryPersistedStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      obj = {};
      const merged = Object.assign(outer1_7);
      if (null == arg0) {
        obj = {};
      }
      const merged1 = Object.assign(obj);
      outer1_7 = obj;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_7;
    }
  };
  items[1] = obj;
  obj = {
    key: "getImpressionCappedItemIds",
    value() {
      outer1_16();
      return outer1_8;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getDebugFastImpressionCappingEnabled",
    value() {
      return outer1_12;
    }
  };
  items[4] = {
    key: "hidden",
    get() {
      return outer1_7.hidden;
    }
  };
  items[5] = {
    key: "reset",
    value() {
      const outer1_7 = { itemImpressions: [], hidden: false };
    }
  };
  return callback(ContentInventoryPersistedStore, items);
})(require("initialize").PersistedStore);
tmp4.displayName = "ContentInventoryPersistedStore";
tmp4.persistKey = "ContentInventoryPersistedStore";
tmp4 = new tmp4(require("dispatcher"), {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function handleImpressionsTracked(itemIds) {
    let iter3;
    if (!c11) {
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
        let tmp5 = set1;
        if (!set1.has(value)) {
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
let result = set.fileFinishedImporting("modules/content_inventory/ContentInventoryPersistedStore.tsx");

export default tmp4;
