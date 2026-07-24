// Module ID: 3754
// Function ID: 28663
// Name: sortedInsert
// Dependencies: [57, 6, 7, 3755, 2]

// Module 3754 (sortedInsert)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

function sortedInsert(arr) {
  if (null != arg1) {
    const tmp3 = importDefault(3755)(arr, arg1, arg3);
    let tmp4 = tmp3;
    if (arr[tmp3] !== arg1) {
      let tmp5 = tmp3;
      tmp4 = tmp3;
      if (tmp3 < arr.length - 1) {
        const sum = tmp5 + 1;
        tmp4 = sum;
        while (arr[sum] !== arg1) {
          tmp5 = sum;
          tmp4 = sum;
          if (sum >= arr.length - 1) {
            break;
          }
        }
      }
    }
    arr.splice(tmp4, 1);
  }
  if (null != arg2) {
    arr.splice(importDefault(3755)(arr, arg2, arg3), 0, arg2);
  }
}
let closure_5 = [];
let tmp2 = (() => {
  class SecondaryIndexMap {
    constructor(arg0, arg1) {
      fn = arg2;
      self = this;
      if (arg2 === undefined) {
        fn = function l(arg0, arg1) {
          return arg0 === arg1;
        };
      }
      tmp = outer1_3(self, SecondaryIndexMap);
      map = new Map();
      self.valueMap = map;
      self.valueArray = [];
      self.valueIndexes = {};
      self.valueIndexesForGetter = {};
      self.dirty = false;
      self._version = 0;
      self.indexBy = arg0;
      self.sortBy = arg1;
      self.isEqual = fn;
      return;
    }
  }
  let obj = {
    key: "version",
    get() {
      return this._version;
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "indexes",
    value() {
      let length;
      let flag = arg0;
      const self = this;
      if (arg0 === undefined) {
        flag = false;
      }
      if (flag) {
        return self.valueIndexes;
      } else {
        if (!flag) {
          if (self.dirty) {
            const obj = {};
            const _Object = Object;
            const entries = Object.entries(self.valueIndexes);
            let num4 = 0;
            if (0 < entries.length) {
              do {
                let tmp2 = outer1_2;
                let tmp3 = outer1_2(entries[num4], 2);
                let items = [];
                let tmp4 = items;
                let num5 = 0;
                let arraySpreadResult = HermesBuiltin.arraySpread(tmp3[1], 0);
                obj[tmp3[0]] = items;
                num4 = num4 + 1;
                length = entries.length;
              } while (num4 < length);
            }
            self.valueIndexesForGetter = obj;
            self.dirty = false;
          }
        }
        return self.valueIndexesForGetter;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "keys",
    value() {
      const valueMap = this.valueMap;
      return valueMap.keys();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "values",
    value(arg0) {
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      if (null == arg0) {
        let valueArray = self.valueArray;
      } else {
        valueArray = self.indexes(flag)[arg0];
        if (null == valueArray) {
          valueArray = outer1_5;
        }
      }
      return valueArray;
    }
  };
  items[4] = {
    key: "size",
    value(arg0) {
      const self = this;
      if (null == arg0) {
        let num = self.valueArray.length;
      } else {
        let length;
        if (null != self.valueIndexes[arg0]) {
          length = arr.length;
        }
        num = 0;
        if (null != length) {
          num = length;
        }
      }
      return num;
    }
  };
  items[5] = {
    key: "clear",
    value() {
      const valueMap = this.valueMap;
      valueMap.clear();
      this.valueArray = [];
      this.valueIndexes = {};
      this.valueIndexesForGetter = {};
    }
  };
  items[6] = {
    key: "has",
    value(arg0) {
      const valueMap = this.valueMap;
      return valueMap.has(arg0);
    }
  };
  items[7] = {
    key: "get",
    value(arg0) {
      const valueMap = this.valueMap;
      return valueMap.get(arg0);
    }
  };
  items[8] = {
    key: "set",
    value(arg0, value) {
      let self = this;
      self = this;
      let closure_1 = value;
      value = this.get(arg0);
      let tmp2 = null != value || null != value;
      if (tmp2) {
        let flag = null == value || null == value || !self.isEqual(value, value);
        if (flag) {
          if (null != value) {
            let valueMap = self.valueMap;
            const result = valueMap.set(arg0, value);
          } else {
            valueMap = self.valueMap;
            valueMap.delete(arg0);
          }
          outer1_6(self.valueArray, value, value, self.sortBy);
          if (null != value) {
            const item = self.indexBy(value).forEach((arg0) => {
              outer2_6(self.getIndex(arg0), _slicedToArray, null, self.sortBy);
            });
            const indexByResult = self.indexBy(value);
          }
          if (null != value) {
            const item1 = self.indexBy(value).forEach((arg0) => {
              outer2_6(self.getIndex(arg0), null, closure_1, self.sortBy);
            });
            const indexByResult1 = self.indexBy(value);
          }
          self.dirty = true;
          self._version = self._version + 1;
          flag = true;
        }
        tmp2 = flag;
      }
      return tmp2;
    }
  };
  items[9] = {
    key: "delete",
    value(arg0) {
      return this.set(arg0, null);
    }
  };
  items[10] = {
    key: "getIndex",
    value(arg0) {
      let tmp2 = this.valueIndexes[arg0];
      if (null == tmp2) {
        const items = [];
        tmp.valueIndexes[arg0] = items;
        tmp2 = items;
      }
      return tmp2;
    }
  };
  return callback(SecondaryIndexMap, items);
})();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx");

export const SecondaryIndexMap = tmp2;
