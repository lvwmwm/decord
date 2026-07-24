// Module ID: 12700
// Function ID: 98780
// Name: NetworkTtlCache
// Dependencies: [6, 7, 2]

// Module 12700 (NetworkTtlCache)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let closure_2 = { IDLE: "idle", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
let obj = { IDLE: "idle", LOADING: "loading", VALID: "valid", STALE: "stale", ERROR: "error" };
let tmp2 = (() => {
  class NetworkTtlCache {
    constructor() {
      obj = arg0;
      self = this;
      if (arg0 === undefined) {
        obj = {};
      }
      tmp = NetworkTtlCache(self, NetworkTtlCache);
      tmp2 = null;
      self.value = null;
      self.fetchState = outer1_2.IDLE;
      self.fetchedAt = null;
      ttlMs = obj.ttlMs;
      if (null != ttlMs) {
        tmp2 = ttlMs;
      }
      self.ttlMs = tmp2;
      return;
    }
  }
  let obj = {
    key: "setTtl",
    value(ttlMs) {
      this.ttlMs = ttlMs;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "setLoading",
    value() {
      this.fetchState = outer1_2.LOADING;
    }
  };
  items[1] = obj;
  obj = {
    key: "setValue",
    value(value) {
      this.value = value;
      this.fetchState = outer1_2.SUCCESS;
      this.fetchedAt = Date.now();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setError",
    value() {
      this.fetchState = outer1_2.ERROR;
    }
  };
  items[4] = {
    key: "clear",
    value() {
      this.value = null;
      this.fetchState = outer1_2.IDLE;
      this.fetchedAt = null;
    }
  };
  items[5] = {
    key: "getValue",
    value() {
      return this.value;
    }
  };
  items[6] = {
    key: "getFetchState",
    value() {
      return this.fetchState;
    }
  };
  items[7] = {
    key: "getFetchedAt",
    value() {
      return this.fetchedAt;
    }
  };
  items[8] = {
    key: "forceExpire",
    value() {
      this.fetchedAt = null;
    }
  };
  items[9] = {
    key: "isExpired",
    value() {
      const self = this;
      let tmp = null != this.ttlMs;
      if (tmp) {
        let tmp2 = null == self.fetchedAt;
        if (!tmp2) {
          const _Date = Date;
          tmp2 = Date.now() - self.fetchedAt >= self.ttlMs;
        }
        tmp = tmp2;
      }
      return tmp;
    }
  };
  items[10] = {
    key: "shouldFetch",
    value() {
      const self = this;
      let tmp = this.fetchState !== outer1_2.LOADING;
      if (tmp) {
        tmp = self.fetchState === outer1_2.IDLE || self.isExpired();
        const tmp3 = self.fetchState === outer1_2.IDLE || self.isExpired();
      }
      return tmp;
    }
  };
  items[11] = {
    key: "isLoading",
    value() {
      return this.fetchState === outer1_2.LOADING;
    }
  };
  items[12] = {
    key: "isValid",
    value() {
      const self = this;
      return this.fetchState === outer1_2.SUCCESS && !self.isExpired();
    }
  };
  items[13] = {
    key: "isError",
    value() {
      return this.fetchState === outer1_2.ERROR;
    }
  };
  items[14] = {
    key: "getStatus",
    value() {
      const self = this;
      const fetchState = this.fetchState;
      if (outer1_2.IDLE === fetchState) {
        return outer1_3.IDLE;
      } else if (outer1_2.LOADING === fetchState) {
        return outer1_3.LOADING;
      } else if (outer1_2.ERROR === fetchState) {
        return outer1_3.ERROR;
      } else if (outer1_2.SUCCESS === fetchState) {
        return self.isExpired() ? outer1_3.STALE : outer1_3.VALID;
      }
    }
  };
  items[15] = {
    key: "getValueWithStatus",
    value() {
      return { value: this.value, status: this.getStatus() };
    }
  };
  items[16] = {
    key: "serialize",
    value() {
      const self = this;
      let tmp = null;
      if (null != this.value) {
        tmp = null;
        if (null != self.fetchedAt) {
          const obj = {};
          ({ value: obj.value, fetchedAt: obj.fetchedAt } = self);
          tmp = obj;
        }
      }
      return tmp;
    }
  };
  items[17] = {
    key: "restore",
    value(arg0) {
      const self = this;
      if (null != arg0) {
        ({ value: self.value, fetchedAt: self.fetchedAt } = arg0);
        self.fetchState = outer1_2.SUCCESS;
      }
    }
  };
  return callback(NetworkTtlCache, items);
})();
const result = require("set").fileFinishedImporting("lib/NetworkTtlCache.tsx");

export const NetworkTtlCacheStatus = obj;
export const NetworkTtlCache = tmp2;
