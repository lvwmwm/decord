// Module ID: 6897
// Function ID: 54906
// Name: KvCacheVersion
// Dependencies: [5, 6, 7, 476, 3, 1882, 2]

// Module 6897 (KvCacheVersion)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import _defineProperties from "_defineProperties";
import HELLO_KEY from "HELLO_KEY";
import importDefaultResult from "HELLO_KEY";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
({ HELLO_KEY: closure_5, VERSION_TO_FORCE_RESYNCING_ALL_DATA: closure_6, VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY: closure_7, VERSION_TO_SKIP_READING_THE_DATABASE: closure_8, VERSION_TO_SKIP_READING_THE_DATABASE_KEY: closure_9 } = HELLO_KEY);
importDefaultResult = new importDefaultResult("KvCacheVersion");
let tmp5 = (() => {
  class KvCacheVersion {
    constructor() {
      self = this;
      tmp = outer1_3(this, KvCacheVersion);
      this.hasSuccessfullyConnected = false;
      this.actions = {
        BACKGROUND_SYNC(arg0, arg1) {
              return self.handleWrite(arg1);
            },
        CONNECTION_OPEN() {
              return self.handleConnectionOpen();
            },
        WRITE_CACHES(arg0, arg1) {
              return self.handleWrite(arg1);
            }
      };
      return;
    }
  }
  let obj = { key: "okAsync" };
  let closure_1 = KvCacheVersion(async (arg0) => {
    const obj = callback(table[5]);
    const tmp = yield callback(table[5]).cache(arg0).get(outer2_9);
    let tmp2 = null;
    if (null != tmp) {
      tmp2 = tmp === outer2_8;
    }
    return tmp2;
  });
  obj.value = function okAsync(databaseResult) {
    return dependencyMap(...arguments);
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "canUseGuildVersions",
    value() {
      const self = this;
      if (this.hasSuccessfullyConnected) {
        let resolved = Promise.resolve(true);
      } else {
        resolved = self.doesDatabaseVersionMatchJsConstants();
      }
      return resolved;
    }
  };
  items[1] = obj;
  obj = { key: "doesDatabaseVersionMatchJsConstants" };
  let closure_0 = KvCacheVersion(async () => {
    const forceResyncVersionResult = callback(table[5]).forceResyncVersion();
    if (null == forceResyncVersionResult) {
      return false;
    } else {
      const tmp2 = yield forceResyncVersionResult.get(outer2_7);
      let version;
      if (null != tmp2) {
        version = tmp2.version;
      }
      let flag = version === outer2_6;
      if (!flag) {
        const _HermesInternal = HermesInternal;
        outer2_10.info("KVStore version mismatch: " + version + " vs " + outer2_6);
        flag = false;
      }
      return flag;
    }
    const obj = callback(table[5]);
  });
  obj.value = function doesDatabaseVersionMatchJsConstants() {
    return callback(...arguments);
  };
  items[2] = obj;
  items[3] = {
    key: "handleClear",
    value() {
      this.hasSuccessfullyConnected = false;
    }
  };
  items[4] = {
    key: "handleConnectionOpen",
    value() {
      this.hasSuccessfullyConnected = true;
    }
  };
  items[5] = {
    key: "handleWrite",
    value(arg0) {
      this.hasSuccessfullyConnected = true;
      let obj = callback(1882);
      obj.cacheTransaction(arg0).put(outer1_5, "\u{1F44B}");
      const cacheTransactionResult = obj.cacheTransaction(arg0);
      const obj3 = callback(1882);
      callback(1882).cacheTransaction(arg0).put(outer1_9, outer1_8);
      const cacheTransactionResult1 = callback(1882).cacheTransaction(arg0);
      const result = callback(1882).forceResyncVersionTransaction(arg0);
      obj = { version: outer1_6 };
      result.put(outer1_7, obj);
    }
  };
  items[6] = {
    key: "resetInMemoryState",
    value() {
      this.hasSuccessfullyConnected = false;
    }
  };
  return callback(KvCacheVersion, items);
})();
tmp5 = new tmp5();
let result = require("_defineProperties").fileFinishedImporting("modules/app_database/modules/KvCacheVersion.tsx");

export default tmp5;
