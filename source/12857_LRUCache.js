// Module ID: 12857
// Function ID: 99926
// Name: LRUCache
// Dependencies: [6, 7]

// Module 12857 (LRUCache)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export default (() => {
  class LRUCache {
    constructor() {
      tmp = LRUCache(this, LRUCache);
      this.max = 1000;
      map = new Map();
      this.map = map;
      return;
    }
  }
  let obj = {
    key: "get",
    value: function get(arg0) {
      const self = this;
      const value = this.map.get(arg0);
      let tmp2;
      if (undefined !== value) {
        self.map.delete(arg0);
        const result = self.map.set(arg0, value);
        tmp2 = value;
        const map2 = self.map;
        const map3 = self.map;
      }
      return tmp2;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "delete",
    value: function _delete(arg0) {
      return this.map.delete(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "set",
    value: function set(arg0, arg1) {
      const self = this;
      if (!this.delete(arg0)) {
        if (undefined !== arg1) {
          if (self.map.size >= self.max) {
            self.delete(self.map.keys().next().value);
            const iter = self.map.keys();
            const map = self.map;
          }
          const result = self.map.set(arg0, arg1);
          const map2 = self.map;
        }
      }
      return self;
    }
  };
  items[2] = obj;
  return _defineProperties(LRUCache, items);
})();
