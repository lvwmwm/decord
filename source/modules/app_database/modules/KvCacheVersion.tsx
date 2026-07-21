// Module ID: 6891
// Function ID: 54849
// Name: KvCacheVersion
// Dependencies: []

// Module 6891 (KvCacheVersion)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
({ HELLO_KEY: closure_5, VERSION_TO_FORCE_RESYNCING_ALL_DATA: closure_6, VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY: closure_7, VERSION_TO_SKIP_READING_THE_DATABASE: closure_8, VERSION_TO_SKIP_READING_THE_DATABASE_KEY: closure_9 } = arg1(dependencyMap[3]));
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("KvCacheVersion");
let tmp5 = () => {
  class KvCacheVersion {
    constructor() {
      f54859 = this;
      tmp = closure_3(this, KvCacheVersion);
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
  const callback = KvCacheVersion;
  let obj = { key: "okAsync" };
  let closure_1 = callback(async (arg0) => {
    const obj = callback(closure_1[5]);
    const tmp = yield callback(closure_1[5]).cache(arg0).get(closure_9);
    let tmp2 = null;
    if (null != tmp) {
      tmp2 = tmp === closure_8;
    }
    return tmp2;
  });
  obj.value = function okAsync(closure_0) {
    return callback2(...arguments);
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
  let closure_0 = callback(async () => {
    const forceResyncVersionResult = callback(closure_1[5]).forceResyncVersion();
    if (null == forceResyncVersionResult) {
      return false;
    } else {
      const tmp2 = yield forceResyncVersionResult.get(closure_7);
      let version;
      if (null != tmp2) {
        version = tmp2.version;
      }
      let flag = version === closure_6;
      if (!flag) {
        const _HermesInternal = HermesInternal;
        closure_10.info("KVStore version mismatch: " + version + " vs " + closure_6);
        flag = false;
      }
      return flag;
    }
    const obj = callback(closure_1[5]);
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
      let obj = callback(closure_1[5]);
      obj.cacheTransaction(arg0).put(closure_5, "\u{1F44B}");
      const cacheTransactionResult = obj.cacheTransaction(arg0);
      const obj3 = callback(closure_1[5]);
      callback(closure_1[5]).cacheTransaction(arg0).put(closure_9, closure_8);
      const cacheTransactionResult1 = callback(closure_1[5]).cacheTransaction(arg0);
      const result = callback(closure_1[5]).forceResyncVersionTransaction(arg0);
      obj = { version: closure_6 };
      result.put(closure_7, obj);
    }
  };
  items[6] = {
    key: "resetInMemoryState",
    value() {
      this.hasSuccessfullyConnected = false;
    }
  };
  return callback2(KvCacheVersion, items);
}();
tmp5 = new tmp5();
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/app_database/modules/KvCacheVersion.tsx");

export default tmp5;
