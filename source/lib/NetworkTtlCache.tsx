// Module ID: 12528
// Function ID: 96253
// Name: NetworkTtlCache
// Dependencies: []

// Module 12528 (NetworkTtlCache)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = { IDLE: "idle", LOADING: "loading", SUCCESS: "success", ERROR: "error" };
const obj = { IDLE: "idle", LOADING: "loading", VALID: "valid", STALE: "stale", ERROR: "error" };
const tmp2 = () => {
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
      self.fetchState = closure_2.IDLE;
      self.fetchedAt = null;
      ttlMs = obj.ttlMs;
      if (null != ttlMs) {
        tmp2 = ttlMs;
      }
      self.ttlMs = tmp2;
      return;
    }
  }
  let closure_0 = NetworkTtlCache;
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
      this.fetchState = constants.LOADING;
    }
  };
  items[1] = obj;
  obj = {
    key: "setValue",
    value(value) {
      this.value = value;
      this.fetchState = constants.SUCCESS;
      this.fetchedAt = Date.now();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setError",
    value() {
      this.fetchState = constants.ERROR;
    }
  };
  items[4] = {
    key: "clear",
    value() {
      this.value = null;
      this.fetchState = constants.IDLE;
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
      let tmp = this.fetchState !== constants.LOADING;
      if (tmp) {
        tmp = self.fetchState === constants.IDLE || self.isExpired();
        const tmp3 = self.fetchState === constants.IDLE || self.isExpired();
      }
      return tmp;
    }
  };
  items[11] = {
    key: "isLoading",
    value() {
      return this.fetchState === constants.LOADING;
    }
  };
  items[12] = {
    key: "isValid",
    value() {
      const self = this;
      return this.fetchState === constants.SUCCESS && !self.isExpired();
    }
  };
  items[13] = {
    key: "isError",
    value() {
      return this.fetchState === constants.ERROR;
    }
  };
  items[14] = {
    key: "getStatus",
    value() {
      const self = this;
      const fetchState = this.fetchState;
      if (constants.IDLE === fetchState) {
        return constants2.IDLE;
      } else if (constants.LOADING === fetchState) {
        return constants2.LOADING;
      } else if (constants.ERROR === fetchState) {
        return constants2.ERROR;
      } else if (constants.SUCCESS === fetchState) {
        return self.isExpired() ? constants2.STALE : constants2.VALID;
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
        self.fetchState = constants.SUCCESS;
      }
    }
  };
  return callback(NetworkTtlCache, items);
}();
const result = arg1(dependencyMap[2]).fileFinishedImporting("lib/NetworkTtlCache.tsx");

export const NetworkTtlCacheStatus = obj;
export const NetworkTtlCache = tmp2;
