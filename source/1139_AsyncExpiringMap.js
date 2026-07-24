// Module ID: 1139
// Function ID: 12982
// Name: AsyncExpiringMap
// Dependencies: [57, 6, 7]

// Module 1139 (AsyncExpiringMap)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export const AsyncExpiringMap = (() => {
  class AsyncExpiringMap {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          first = arguments[0];
        }
        cleanupInterval = first.cleanupInterval;
        num = 5000;
        if (undefined !== cleanupInterval) {
          num = cleanupInterval;
        }
        ttl = first.ttl;
        num2 = 2000;
        if (undefined !== ttl) {
          num2 = ttl;
        }
        tmp = outer1_1;
        tmp2 = AsyncExpiringMap;
        tmp3 = outer1_1(self, AsyncExpiringMap);
        self._ttl = num2;
        tmp4 = globalThis;
        _Map = Map;
        prototype = Map.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        map = new Map();
        tmp8 = map;
        self._map = map;
        self._cleanupIntervalMs = num;
        startCleanupResult = self.startCleanup();
        return;
      }
      first = {};
      return;
    }
  }
  let obj = {
    key: "set",
    value: function set(arg0, promise) {
      let self = this;
      self = this;
      if (!this._cleanupInterval) {
        self.startCleanup();
      }
      if ("object" === typeof promise) {
        if (promise) {
          if ("then" in promise) {
            let obj = { value: undefined, expiresAt: null, promise };
            const _map2 = self._map;
            const result = _map2.set(arg0, obj);
            promise.then((value) => {
              obj.value = value;
              obj.expiresAt = Date.now() + self._ttl;
              obj.promise = null;
            }, () => {
              obj.expiresAt = Date.now() + self._ttl;
              obj.promise = null;
            });
          }
        }
      }
      const _map = self._map;
      obj = { value: promise, expiresAt: Date.now() + self._ttl, promise: null };
      const result1 = _map.set(arg0, obj);
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "pop",
    value: function pop(arg0) {
      const _map = this._map;
      const value = this.get(arg0);
      _map.delete(arg0);
      return value;
    }
  };
  items[1] = obj;
  obj = {
    key: "get",
    value: function get(arg0) {
      const _map = this._map;
      const iter = _map.get(arg0);
      if (iter) {
        if (iter.promise) {
          let value = iter.promise;
        } else {
          let expiresAt = iter.expiresAt;
          if (expiresAt) {
            const _Date = Date;
            expiresAt = iter.expiresAt <= Date.now();
          }
          if (expiresAt) {
            const _map2 = this._map;
            _map2.delete(arg0);
          }
          value = iter.value;
        }
        return value;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "has",
    value: function has(arg0) {
      const _map = this._map;
      const value = _map.get(arg0);
      let tmp3 = !tmp2;
      if (!!value) {
        let tmp5 = !tmp4;
        if (!value.promise) {
          let expiresAt = value.expiresAt;
          if (expiresAt) {
            const _Date = Date;
            expiresAt = value.expiresAt <= Date.now();
          }
          let flag = !expiresAt;
          if (!flag) {
            const _map2 = this._map;
            _map2.delete(arg0);
            flag = false;
          }
          tmp5 = flag;
        }
        tmp3 = tmp5;
      }
      return tmp3;
    }
  };
  items[4] = {
    key: "ttl",
    value: function ttl(arg0) {
      const _map = this._map;
      const value = _map.get(arg0);
      let expiresAt;
      if (null != value) {
        expiresAt = value.expiresAt;
      }
      if (expiresAt) {
        const _Date = Date;
        const diff = value.expiresAt - Date.now();
        let num = 0;
        if (diff > 0) {
          num = diff;
        }
        return num;
      }
    }
  };
  items[5] = {
    key: "cleanup",
    value: function cleanup() {
      let tmp7;
      let tmp8;
      const self = this;
      const timestamp = Date.now();
      const _map = this._map;
      const entries = _map.entries();
      while (tmp3 !== undefined) {
        let tmp5 = AsyncExpiringMap;
        let tmp6 = AsyncExpiringMap(tmp4, 2);
        [tmp7, tmp8] = tmp6;
        let expiresAt = tmp8.expiresAt;
        let tmp10 = expiresAt;
        if (expiresAt) {
          let tmp11 = tmp8;
          let tmp12 = timestamp;
          tmp10 = tmp9.expiresAt <= timestamp;
        }
        if (tmp10) {
          let _map2 = self._map;
          let tmp13 = tmp7;
          let deleteResult = _map2.delete(tmp7);
        }
        continue;
      }
      if (!self._map.size) {
        self.stopCleanup();
      }
    }
  };
  items[6] = {
    key: "clear",
    value: function clear() {
      const self = this;
      if (this._cleanupInterval) {
        const _clearInterval = clearInterval;
        clearInterval(self._cleanupInterval);
      }
      const _map = self._map;
      _map.clear();
    }
  };
  items[7] = {
    key: "stopCleanup",
    value: function stopCleanup() {
      if (this._cleanupInterval) {
        const _clearInterval = clearInterval;
        clearInterval(tmp._cleanupInterval);
      }
    }
  };
  items[8] = {
    key: "startCleanup",
    value: function startCleanup() {
      const self = this;
      this._cleanupInterval = setInterval(() => self.cleanup(), this._cleanupIntervalMs);
    }
  };
  return callback(AsyncExpiringMap, items);
})();
