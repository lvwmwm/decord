// Module ID: 588
// Function ID: 6980
// Name: parseValue
// Dependencies: []

// Module 588 (parseValue)
function parseValue(arg0) {
  let parsed = arg0;
  if (null != arg0) {
    const _JSON = JSON;
    parsed = JSON.parse(parsed);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[4]);
const DCDStrongboxManager = arg1(dependencyMap[3]).NativeModules.DCDStrongboxManager;
let tmp3 = () => {
  class ProxyAsyncStorage {
    constructor() {
      f7001 = this;
      tmp = closure_3(this, ProxyAsyncStorage);
      promise = new Promise((parseResolve) => {
        self.parseResolve = parseResolve;
      });
      this.parsePromise = promise;
      this.storage = {};
      set = new Set();
      this.secureKeys = set;
      this.hasLoaded = false;
      return;
    }
  }
  const callback = ProxyAsyncStorage;
  let obj = {
    key: "refresh",
    value() {
      let items = arg0;
      const self = this;
      let closure_0 = this;
      if (arg0 === undefined) {
        items = [];
      }
      if (arg1 === undefined) {
        const _Set = Set;
        new Set();
      }
      self.secureKeys = new Set();
      const items1 = [store.refresh(items), ];
      let refreshResult;
      if (null != store2) {
        const items2 = [];
        HermesBuiltin.arraySpread(self.secureKeys, 0);
        refreshResult = store2.refresh(items2);
      }
      items1[1] = refreshResult;
      const set1 = new Set();
      return Promise.all(items1).then((arg0) => {
        let tmp2;
        let tmp3;
        [tmp2, tmp3] = arg0;
        self(closure_1[5]).mark("\u{1F4BE}", "Storage.refresh() Promise Resolved");
        let num = 0;
        let num2 = 0;
        const keys = Object.keys();
        if (keys !== undefined) {
          num2 = num;
          while (keys[tmp] !== undefined) {
            let tmp11 = tmp6;
            let length = tmp2[tmp6].length;
            let sum = num + length;
            num = sum;
            if (length <= 10000) {
              continue;
            } else {
              let tmp7 = self;
              let tmp8 = closure_1;
              let obj2 = self(closure_1[5]);
              let addDetailResult = obj2.addDetail(tmp6, length);
              num = sum;
              // continue
            }
            continue;
          }
        }
        const obj = self(closure_1[5]);
        self(closure_1[5]).addDetail("TotalStorageSize", num2);
        self.hasLoaded = true;
        const items = [tmp2, tmp3];
        return items;
      });
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "parse",
    value(arg0) {
      let tmp;
      let tmp2;
      const self = this;
      const callback = this;
      [tmp, tmp2] = arg0;
      callback(closure_1[6])(tmp2, (rawData) => {
        self.storage[arg1] = { parsed: false, rawData };
      });
      callback(closure_1[6])(tmp, (rawData) => {
        self.storage[arg1] = { parsed: false, rawData };
        const secureKeys = self.secureKeys;
        if (secureKeys.has(arg1)) {
          function migrateToStrongbox(arg0, rawData) {
            const result = item.setItem(arg0, rawData);
            result.then((arg0) => {
              if (arg0) {
                closure_5.removeItem(arg0);
              }
            });
          }(arg1, rawData);
        }
      });
      self.parseResolve();
      return Promise.resolve();
    }
  };
  items[1] = obj;
  obj = {
    key: "get",
    value(arg0, arg1) {
      const self = this;
      const storage = this.storage;
      if (storage.hasOwnProperty(arg0)) {
        let iter = tmp2;
        if (!self.storage[arg0].parsed) {
          const obj = { parsed: true, value: callback4(tmp2.rawData) };
          self.storage[arg0] = obj;
          iter = obj;
        }
        return iter.value;
      } else {
        return arg1;
      }
    }
  };
  items[2] = obj;
  const obj1 = { key: "getAfterRefresh" };
  let closure_1 = callback(async function(arg0) {
    const self = this;
    return yield self.parsePromise.then(() => self.get(arg0));
  });
  obj1.value = function getAfterRefresh(arg0) {
    return callback2(...arguments);
  };
  items[3] = obj1;
  items[4] = {
    key: "asyncGet",
    value(arg0, arg1, arg2) {
      let closure_0 = this;
      let closure_1 = arg0;
      const ProxyAsyncStorage = arg1;
      function handleCallback(arg0, arg1) {
        if (null != arg1) {
          const _Date = Date;
          const timestamp = Date.now();
          const tmp6 = callback(arg1);
          const obj = { parsed: true, value: tmp6 };
          self.storage[arg0] = obj;
          const _Date2 = Date;
          if (null != arg2) {
            self(arg0[5]).mark("\u{1F4BE}", arg2, tmp9);
            const obj2 = self(arg0[5]);
          }
          arg1(tmp6);
        } else {
          arg1(null);
        }
      }
      const secureKeys = this.secureKeys;
      if (secureKeys.has(arg0)) {
        let value = store2.getItem(arg0);
        value.then((arg0) => {
          handleCallback(arg0, arg0);
        });
      } else {
        value = store.getItem(arg0);
        value.then((arg0) => {
          handleCallback(arg0, arg0);
        });
      }
    }
  };
  const obj3 = { key: "asyncGetRaw" };
  let closure_0 = callback(async function(arg0, arg1) {
    if (null != arg1) {
      callback(closure_1[5]).mark("\u{1F4BE}", `Get: ${arg1}`);
      const obj = callback(closure_1[5]);
    }
    const secureKeys = this.secureKeys;
    if (secureKeys.has(arg0)) {
      let value = item2.getItem(arg0);
    } else {
      value = item.getItem(arg0);
    }
    const tmp7 = yield value;
    let tmp8 = null;
    if (null != tmp7) {
      tmp8 = tmp7;
      if (null != arg1) {
        callback(closure_1[5]).mark("\u{1F4BE}", `Got: ${arg1}`);
        tmp8 = tmp7;
        const obj2 = callback(closure_1[5]);
      }
    }
    return tmp8;
  });
  obj3.value = function asyncGetRaw() {
    return callback(...arguments);
  };
  items[5] = obj3;
  items[6] = {
    key: "getRaw",
    value(arg0) {
      const storage = this.storage;
      if (storage.hasOwnProperty(arg0)) {
        const tmp = this.storage[arg0];
        let tmp2 = null;
        if (!tmp.parsed) {
          const rawData = tmp.rawData;
          let tmp3 = null;
          if (null != rawData) {
            tmp3 = rawData;
          }
          tmp2 = tmp3;
        }
        return tmp2;
      } else {
        return null;
      }
    }
  };
  items[7] = {
    key: "set",
    value(arg0, value) {
      this.setRaw(arg0, JSON.stringify(value));
      this.storage[arg0] = { parsed: true, value };
    }
  };
  items[8] = {
    key: "setRaw",
    value(arg0, rawData) {
      const self = this;
      if ("string" !== typeof arg0) {
        const _Error2 = Error;
        const error = new Error("Key must be a string");
        throw error;
      } else if ("string" !== typeof rawData) {
        const _Error = Error;
        const error1 = new Error("value must be a string");
        throw error1;
      } else {
        const obj = { parsed: false, rawData };
        self.storage[arg0] = obj;
        const secureKeys = self.secureKeys;
        if (secureKeys.has(arg0)) {
          const result = store2.setItem(arg0, rawData);
        } else {
          const result1 = store.setItem(arg0, rawData);
        }
      }
    }
  };
  items[9] = {
    key: "remove",
    value(arg0) {
      delete r1[r2];
      const secureKeys = this.secureKeys;
      if (secureKeys.has(arg0)) {
        store2.removeItem(arg0);
      } else {
        store.removeItem(arg0);
      }
    }
  };
  items[10] = {
    key: "clear",
    value() {
      this.storage = {};
      store.clear();
      if (null != store2) {
        const items = [];
        HermesBuiltin.arraySpread(this.secureKeys, 0);
        store2.clear(items);
      }
    }
  };
  return callback2(ProxyAsyncStorage, items);
}();
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("../discord_common/js/packages/storage/native/Storage.tsx");

export const impl = tmp3;
