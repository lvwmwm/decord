// Module ID: 6712
// Function ID: 52160
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 6713, 6714, 2]

// Module 6712 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
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
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
let tmp2 = (() => {
  class ExtendedMemoryLru {
    constructor(arg0, arg1) {
      tmp = outer1_4(this, ExtendedMemoryLru);
      lru = new ExtendedMemoryLru(outer1_2[3]).Lru(arg0);
      this.primary = lru;
      lru1 = new ExtendedMemoryLru(outer1_2[3]).Lru(arg1);
      this.extended = lru1;
      return;
    }
  }
  let obj = {
    key: "totalLength",
    get() {
      return this.primary.length + this.extended.length;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "primaryCapacity",
    get() {
      return this.primary.capacity;
    }
  };
  items[1] = obj;
  obj = {
    key: "extendedCapacity",
    get() {
      return this.extended.capacity;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clear",
    value() {
      const primary = this.primary;
      primary.clear();
      const extended = this.extended;
      extended.clear();
    }
  };
  items[4] = {
    key: "has",
    value(arg0) {
      const primary = this.primary;
      return primary.has(arg0);
    }
  };
  items[5] = {
    key: "hasExtended",
    value(arg0) {
      const primary = this.primary;
      let hasItem = primary.has(arg0);
      if (!hasItem) {
        const extended = this.extended;
        hasItem = extended.has(arg0);
      }
      return hasItem;
    }
  };
  items[6] = {
    key: "get",
    value(arg0) {
      const primary = this.primary;
      return primary.get(arg0);
    }
  };
  items[7] = {
    key: "put",
    value(arg0, arg1) {
      const primary = this.primary;
      const putResult = primary.put(arg0, arg1);
      if (undefined !== putResult) {
        const extended = this.extended;
        extended.put(putResult[0], putResult[1]);
      }
    }
  };
  items[8] = {
    key: "delete",
    value(arg0) {
      const primary = this.primary;
      let deleteResult = primary.delete(arg0);
      const extended = this.extended;
      this.upstreamItems();
      if (!deleteResult) {
        deleteResult = deleteResult1;
      }
      return deleteResult;
    }
  };
  items[9] = {
    key: "upstreamItems",
    value() {
      const self = this;
      if (this.canUpstreamItems()) {
        const extended = self.extended;
        const tmp2 = outer1_6(extended.entries());
        let iter = tmp2();
        if (!iter.done) {
          const tmp4 = outer1_3(iter.value, 2);
          const first = tmp4[0];
          const primary = self.primary;
          primary.put(first, tmp4[1]);
          const extended2 = self.extended;
          extended2.delete(first);
          while (self.canUpstreamItems()) {
            let iter2 = tmp2();
            iter = iter2;
            if (iter2.done) {
              break;
            }
          }
        }
      }
    }
  };
  items[10] = {
    key: "canUpstreamItems",
    value() {
      let tmp = this.primary.length < this.primary.capacity;
      if (tmp) {
        tmp = this.extended.length > 0;
      }
      return tmp;
    }
  };
  items[11] = {
    key: "entries",
    value() {
      const primary = this.primary;
      return primary.entries();
    }
  };
  items[12] = {
    key: "keys",
    value() {
      const primary = this.primary;
      return primary.keys();
    }
  };
  items[13] = {
    key: "values",
    value() {
      const primary = this.primary;
      return primary.values();
    }
  };
  items[14] = {
    key: "allEntries",
    value() {
      const extended = this.extended;
      const primary = this.primary;
      const entries = extended.entries();
      return outer1_1(outer1_2[4]).chain(entries, primary.entries());
    }
  };
  items[15] = {
    key: "allKeys",
    value() {
      const extended = this.extended;
      const primary = this.primary;
      const keys = extended.keys();
      return outer1_1(outer1_2[4]).chain(keys, primary.keys());
    }
  };
  items[16] = {
    key: "allValues",
    value() {
      const extended = this.extended;
      const primary = this.primary;
      const values = extended.values();
      return outer1_1(outer1_2[4]).chain(values, primary.values());
    }
  };
  return callback(ExtendedMemoryLru, items);
})();
const result = require("_defineProperties").fileFinishedImporting("modules/app_database/util/ExtendedMemoryLru.tsx");

export const ExtendedMemoryLru = tmp2;
