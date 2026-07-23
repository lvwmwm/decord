// Module ID: 588
// Function ID: 6980
// Name: parseValue
// Dependencies: [5, 6, 7, 27, 589, 20, 590, 2]

// Module 588 (parseValue)
import AppStartPerformance from "AppStartPerformance";
import forEach from "forEach";
import set from "set";
import get_ActivityIndicator from "get ActivityIndicator";
import enforcing from "enforcing";

function parseValue(arg0) {
  let parsed = arg0;
  if (null != arg0) {
    const _JSON = JSON;
    parsed = JSON.parse(parsed);
  }
}
const DCDStrongboxManager = get_ActivityIndicator.NativeModules.DCDStrongboxManager;
let tmp3 = (() => {
  class ProxyAsyncStorage {
    constructor() {
      self = this;
      tmp = outer1_3(this, ProxyAsyncStorage);
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
  let obj = {
    key: "refresh",
    value() {
      let items = arg0;
      let self = this;
      self = this;
      if (arg0 === undefined) {
        items = [];
      }
      if (arg1 === undefined) {
        const _Set = Set;
        new Set();
      }
      self.secureKeys = new Set();
      const items1 = [outer1_5.refresh(items), ];
      let refreshResult;
      if (null != outer1_6) {
        const items2 = [];
        HermesBuiltin.arraySpread(self.secureKeys, 0);
        refreshResult = outer1_6.refresh(items2);
      }
      items1[1] = refreshResult;
      const set1 = new Set();
      return Promise.all(items1).then((arg0) => {
        let tmp2;
        let tmp3;
        [tmp2, tmp3] = arg0;
        _self(20).mark("\u{1F4BE}", "Storage.refresh() Promise Resolved");
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
              let tmp7 = _self;
              let tmp8 = dependencyMap;
              let obj2 = _self(20);
              let addDetailResult = obj2.addDetail(tmp6, length);
              num = sum;
              continue;
            }
            continue;
          }
        }
        const obj = _self(20);
        _self(20).addDetail("TotalStorageSize", num2);
        self.hasLoaded = true;
        const items = [tmp2, tmp3];
        return items;
      });
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "parse",
    value(arg0) {
      let tmp;
      let tmp2;
      let self = this;
      self = this;
      [tmp, tmp2] = arg0;
      callback(590)(tmp2, (rawData) => {
        self.storage[arg1] = { parsed: false, rawData };
      });
      callback(590)(tmp, (rawData) => {
        self.storage[arg1] = { parsed: false, rawData };
        const secureKeys = self.secureKeys;
        if (secureKeys.has(arg1)) {
          (function migrateToStrongbox(arg0, rawData) {
            let closure_0 = arg0;
            const result = outer3_6.setItem(arg0, rawData);
            result.then((arg0) => {
              if (arg0) {
                outer4_5.removeItem(closure_0);
              }
            });
          })(arg1, rawData);
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
          const obj = { parsed: true, value: outer1_7(tmp2.rawData) };
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
  let closure_1 = ProxyAsyncStorage(async function(arg0) {
    const self = this;
    let closure_1 = arg0;
    return yield self.parsePromise.then(() => self.get(closure_1));
  });
  obj1.value = function getAfterRefresh(outer2_13) {
    return dependencyMap(...arguments);
  };
  items[3] = obj1;
  items[4] = {
    key: "asyncGet",
    value(arg0, arg1, arg2) {
      const self = this;
      let closure_1 = arg0;
      let AppStartPerformance = arg1;
      let forEach = arg2;
      function handleCallback(arg0, arg1) {
        if (null != arg1) {
          const _Date = Date;
          const timestamp = Date.now();
          const tmp6 = outer2_7(arg1);
          const obj = { parsed: true, value: tmp6 };
          self.storage[arg0] = obj;
          const _Date2 = Date;
          if (null != forEach) {
            _self(table[5]).mark("\u{1F4BE}", forEach, tmp9);
            const obj2 = _self(table[5]);
          }
          callback(tmp6);
        } else {
          callback(null);
        }
      }
      const secureKeys = this.secureKeys;
      if (secureKeys.has(arg0)) {
        let value = outer1_6.getItem(arg0);
        value.then((arg0) => {
          handleCallback(closure_1, arg0);
        });
      } else {
        value = outer1_5.getItem(arg0);
        value.then((arg0) => {
          handleCallback(closure_1, arg0);
        });
      }
    }
  };
  const obj3 = { key: "asyncGetRaw" };
  let closure_0 = ProxyAsyncStorage(async function(arg0, arg1) {
    if (null != arg1) {
      callback(20).mark("\u{1F4BE}", `Get: ${arg1}`);
      const obj = callback(20);
    }
    const secureKeys = this.secureKeys;
    if (secureKeys.has(arg0)) {
      let value = outer2_6.getItem(arg0);
    } else {
      value = outer2_5.getItem(arg0);
    }
    const tmp7 = yield value;
    let tmp8 = null;
    if (null != tmp7) {
      tmp8 = tmp7;
      if (null != arg1) {
        callback(20).mark("\u{1F4BE}", `Got: ${arg1}`);
        tmp8 = tmp7;
        const obj2 = callback(20);
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
        let tmp2 = null;
        if (!this.storage[arg0].parsed) {
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
          const result = outer1_6.setItem(arg0, rawData);
        } else {
          const result1 = outer1_5.setItem(arg0, rawData);
        }
      }
    }
  };
  items[9] = {
    key: "remove",
    value(arg0) {
      delete tmp[tmp2];
      const secureKeys = this.secureKeys;
      if (secureKeys.has(arg0)) {
        outer1_6.removeItem(arg0);
      } else {
        outer1_5.removeItem(arg0);
      }
    }
  };
  items[10] = {
    key: "clear",
    value() {
      this.storage = {};
      outer1_5.clear();
      if (null != outer1_6) {
        const items = [];
        HermesBuiltin.arraySpread(this.secureKeys, 0);
        outer1_6.clear(items);
      }
    }
  };
  return callback(ProxyAsyncStorage, items);
})();
tmp3 = new tmp3();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/storage/native/Storage.tsx");

export const impl = tmp3;
