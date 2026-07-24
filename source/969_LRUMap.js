// Module ID: 969
// Function ID: 10454
// Name: LRUMap
// Dependencies: [153, 6, 7]

// Module 969 (LRUMap)
import _readOnlyError from "_readOnlyError";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const LRUMap = (() => {
  class LRUMap {
    constructor(arg0) {
      tmp = LRUMap(this, LRUMap);
      this._maxSize = arg0;
      map = new Map();
      this._cache = map;
      return;
    }
  }
  let obj = {
    key: "size",
    get() {
      return this._cache.size;
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "get",
    value: function get(arg0) {
      const self = this;
      const _cache = this._cache;
      const value = _cache.get(arg0);
      if (undefined !== value) {
        const _cache2 = self._cache;
        _cache2.delete(arg0);
        const _cache3 = self._cache;
        const result = _cache3.set(arg0, value);
        return value;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "set",
    value: function set(arg0, arg1) {
      const self = this;
      if (this._cache.size >= this._maxSize) {
        const _cache = self._cache;
        const _cache2 = self._cache;
        _cache2.delete(_cache.keys().next().value);
        const iter = _cache.keys();
      }
      const _cache3 = self._cache;
      const result = _cache3.set(arg0, arg1);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "remove",
    value: function remove(arg0) {
      const _cache = this._cache;
      const value = _cache.get(arg0);
      if (value) {
        const _cache2 = this._cache;
        _cache2.delete(arg0);
      }
      return value;
    }
  };
  items[4] = {
    key: "clear",
    value: function clear() {
      const _cache = this._cache;
      _cache.clear();
    }
  };
  items[5] = {
    key: "keys",
    value: function keys() {
      const _cache = this._cache;
      return Array.from(_cache.keys());
    }
  };
  items[6] = {
    key: "values",
    value: function values() {
      const items = [];
      const _cache = this._cache;
      const item = _cache.forEach((arg0) => items.push(arg0));
      return items;
    }
  };
  return _defineProperties(LRUMap, items);
})();
