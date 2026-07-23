// Module ID: 4163
// Function ID: 35217
// Name: CachedEntriesMap
// Dependencies: [6, 7, 1916, 2]

// Module 4163 (CachedEntriesMap)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const tmp2 = (() => {
  class CachedEntriesMap {
    constructor() {
      self = this;
      tmp = outer1_2(this, self);
      this.version = 0;
      map = new Map();
      this.data = map;
      obj = CachedEntriesMap(outer1_1[2]);
      this.cachedValues = obj.cachedFunction(() => {
        const data = self.data;
        return Array.from(data.values());
      });
      obj2 = CachedEntriesMap(outer1_1[2]);
      this.cachedKeys = obj2.cachedFunction(() => {
        const data = self.data;
        return Array.from(data.keys());
      });
      obj3 = CachedEntriesMap(outer1_1[2]);
      this.cachedEntries = obj3.cachedFunction(() => {
        const data = self.data;
        return Array.from(data.entries());
      });
      return;
    }
  }
  let obj = {
    key: "keys",
    value() {
      return this.cachedKeys(this.version);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "values",
    value() {
      return this.cachedValues(this.version);
    }
  };
  items[1] = obj;
  obj = {
    key: "entries",
    value() {
      return this.cachedEntries(this.version);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "size",
    value() {
      return this.data.size;
    }
  };
  items[4] = {
    key: "get",
    value(arg0) {
      const data = this.data;
      return data.get(arg0);
    }
  };
  items[5] = {
    key: "set",
    value(arg0, arg1) {
      const self = this;
      const data = this.data;
      if (data.get(arg0) !== arg1) {
        const data2 = self.data;
        const result = data2.set(arg0, arg1);
        self.version = self.version + 1;
      }
    }
  };
  items[6] = {
    key: "delete",
    value(arg0) {
      const self = this;
      const data = this.data;
      const deleteResult = data.delete(arg0);
      if (deleteResult) {
        self.version = self.version + 1;
      }
      return deleteResult;
    }
  };
  items[7] = {
    key: "clear",
    value() {
      const self = this;
      if (0 !== this.data.size) {
        const data = self.data;
        data.clear();
        self.version = self.version + 1;
      }
    }
  };
  return callback(CachedEntriesMap, items);
})();
let result = require("areArraysShallowlyEqual").fileFinishedImporting("lib/CachedEntriesMap.tsx");

export default tmp2;
