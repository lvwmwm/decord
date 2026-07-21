// Module ID: 567
// Function ID: 6828
// Name: _superPropGet
// Dependencies: []

// Module 567 (_superPropGet)
function _superPropGet(arg0, arg1, arg2, arg3) {
  arg1 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = closure_4(closure_9(prototype), arg1, arg2);
  const importDefault = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_8(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = [true, true];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const Store = arg1(dependencyMap[7]).Store;
let closure_12 = { _state: undefined, _version: undefined };
let closure_13 = null;
const tmp2 = (Store) => {
  class PersistedStore {
    constructor(arg0, arg1, arg2) {
      tmp = closure_6(this, PersistedStore);
      items = [, , ];
      items[0] = Store;
      items[1] = arg1;
      items[2] = arg2;
      obj = closure_16(this, PersistedStore, items);
      PersistedStore = obj;
      num = 0;
      if (null != obj.getClass().migrations) {
        num = obj.getClass().migrations.length;
      }
      obj._version = num;
      obj.callback = (arg0) => {
        const persistKey = obj.getClass().persistKey;
        obj.persist();
        obj._writePromises.delete(persistKey);
        const _writeResolvers = obj._writeResolvers;
        _writeResolvers.delete(persistKey);
        arg0();
      };
      tmp2 = closure_1(closure_2[8]);
      obj.throttledCallback = tmp2((arg0) => obj.callback(arg0), obj.getClass().throttleDelay, { leading: false });
      if ("string" !== typeof obj.getClass().persistKey) {
        tmp14 = globalThis;
        _Error3 = Error;
        _HermesInternal3 = HermesInternal;
        str5 = "";
        str6 = " initialized without a `persistKey`. Add one so we know where to save your stuff!";
        prototype3 = Error.prototype;
        tmp15 = new.target;
        tmp16 = new.target;
        error = new Error("" + obj.getClass().name + " initialized without a `persistKey`. Add one so we know where to save your stuff!");
        tmp18 = error;
        throw error;
      } else {
        str7 = "function";
        if ("function" !== typeof obj.initialize) {
          tmp9 = globalThis;
          _Error2 = Error;
          _HermesInternal2 = HermesInternal;
          str3 = "";
          str4 = " initialized without an `initialize` method. Add one that accepts the initial cached state.";
          prototype2 = Error.prototype;
          tmp10 = new.target;
          tmp11 = new.target;
          error1 = new Error("" + obj.getClass().name + " initialized without an `initialize` method. Add one that accepts the initial cached state.");
          tmp13 = error1;
          throw error1;
        } else if ("function" !== typeof obj.getState) {
          tmp4 = globalThis;
          _Error = Error;
          _HermesInternal = HermesInternal;
          str = "";
          str2 = " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work.";
          prototype = Error.prototype;
          tmp5 = new.target;
          tmp6 = new.target;
          error2 = new Error("" + obj.getClass().name + " initialized without a `getState` method. Add one that returns the full state of the store for persistance to work.");
          tmp8 = error2;
          throw error2;
        } else {
          addChangeListenerResult = obj.addChangeListener(() => obj.asyncPersist());
          return obj;
        }
      }
    }
  }
  const arg1 = PersistedStore;
  callback3(PersistedStore, Store);
  let obj = {
    key: "getClass",
    value() {
      return this.constructor;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "initializeFromState",
    value(arg0) {
      const self = this;
      if (this.initialize(arg0)) {
        self.asyncPersist();
      }
      if (self._isInitialized) {
        self.emitChange();
      } else {
        const allPersistKeys = PersistedStore.allPersistKeys;
        allPersistKeys.add(self.getClass().persistKey);
        self._isInitialized = true;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "initializeIfNeeded",
    value() {
      const self = this;
      if (!this._isInitialized) {
        const _Date = Date;
        const allPersistKeys = PersistedStore.allPersistKeys;
        const timestamp = Date.now();
        allPersistKeys.add(self.getClass().persistKey);
        const result = PersistedStore.migrateAndReadStoreState(self.getClass().persistKey, self.getClass().migrations);
        if (self.initialize(result.state)) {
          self.asyncPersist();
        }
        if (result.requiresPersist) {
          self.asyncPersist();
        }
        self._isInitialized = true;
        const _Date2 = Date;
        const diff = Date.now() - timestamp;
        if (diff > 5) {
          callback(closure_2[9]).mark("\u{1F9A5}", `${self.getName()}.initialize()`, diff);
          const obj = callback(closure_2[9]);
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "asyncPersist",
    value() {
      const PersistedStore = this;
      const getClassResult = this.getClass();
      const persistKey = getClassResult.persistKey;
      const throttleDelay = getClassResult.throttleDelay;
      if (!PersistedStore.disableWrites) {
        if (!getClassResult.disableWrite) {
          let value = PersistedStore._writePromises.get(persistKey);
          if (null == value) {
            const promise = new Promise((arg0) => {
              const self = arg0;
              const _writeResolvers = self._writeResolvers;
              const items = [arg0, requestIdleCallback(throttleDelay > 0 ? () => arg0.throttledCallback(arg0) : () => arg0.callback(arg0), { timeout: 500 })];
              const result = _writeResolvers.set(persistKey, items);
            });
            const result = PersistedStore._writePromises.set(persistKey, promise);
            value = promise;
            const _writePromises2 = PersistedStore._writePromises;
          }
          return value;
        }
      }
      return Promise.resolve(false);
    }
  };
  items[4] = {
    key: "persist",
    value() {
      const state = this.getState();
      const Storage = PersistedStore(closure_2[10]).Storage;
      const result = Storage.set(this.getClass().persistKey, { _state: state, _version: this._version });
    }
  };
  items[5] = {
    key: "clear",
    value() {
      const Storage = PersistedStore(closure_2[10]).Storage;
      Storage.remove(this.getClass().persistKey);
    }
  };
  const items1 = [
    {
      key: "clearAll",
      value(arg0) {
        const PersistedStore = arg0;
        if (null == PersistedStore._clearAllPromise) {
          const promise = new Promise((arg0) => {
            requestIdleCallback((self) => {
              self.clearPersistQueue(self);
              const allPersistKeys = self.allPersistKeys;
              const item = allPersistKeys.forEach((arg0) => {
                if (lib.shouldClear(lib, arg0)) {
                  const Storage = lib(closure_2[10]).Storage;
                  Storage.remove(arg0);
                }
              });
              const all = all.getAll();
              const item1 = all.forEach((getClass) => {
                let shouldClearResult = getClass instanceof lib;
                if (shouldClearResult) {
                  shouldClearResult = lib.shouldClear(lib, getClass.getClass().persistKey);
                }
                if (shouldClearResult) {
                  getClass._isInitialized = false;
                  getClass.initializeIfNeeded();
                }
              });
              self._clearAllPromise = null;
              self();
            }, { timeout: 500 });
          });
          PersistedStore._clearAllPromise = promise;
        }
        return PersistedStore._clearAllPromise;
      }
    },
    {
      key: "shouldClear",
      value(omit) {
        omit = omit.omit;
        if (null != omit) {
          if (omit.includes(arg1)) {
            return false;
          }
        }
        const type = omit.type;
        if ("all" === type) {
          return true;
        } else if ("user-data-only" === type) {
          const userAgnosticPersistKeys = PersistedStore.userAgnosticPersistKeys;
          return !userAgnosticPersistKeys.has(arg1);
        } else {
          const type2 = omit.type;
          return false;
        }
      }
    },
    {
      key: "clearPersistQueue",
      value(arg0) {
        const PersistedStore = arg0;
        let _writeResolvers = PersistedStore._writeResolvers;
        const item = _writeResolvers.forEach((self) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = self;
          if (self.shouldClear(self, arg1)) {
            self._writePromises.delete(arg1);
            const _writeResolvers = self._writeResolvers;
            _writeResolvers.delete(arg1);
            cancelIdleCallback(tmp2);
            tmp(false);
            const _writePromises = self._writePromises;
          }
        });
        PersistedStore._writePromises.clear();
        _writeResolvers = PersistedStore._writeResolvers;
        _writeResolvers.clear();
      }
    },
    {
      key: "getAllStates",
      value() {
        return Promise.all(Array.from(PersistedStore._writePromises.values())).then(() => {
          const obj = {};
          const allPersistKeys = obj.allPersistKeys;
          const item = allPersistKeys.forEach((arg0) => {
            const Storage = obj(closure_2[10]).Storage;
            let value = Storage.get(arg0);
            if (null == value) {
              value = closure_12;
            }
            obj[arg0] = value._state;
          });
          return obj;
        });
      }
    },
    {
      key: "initializeAll",
      value(arg0) {
        const PersistedStore = arg0;
        const all = closure_11.getAll();
        const item = all.forEach((getClass) => {
          if (getClass instanceof getClass) {
            const persistKey = getClass.getClass().persistKey;
            if (getClass.hasOwnProperty(persistKey)) {
              getClass.initializeFromState(getClass[persistKey]);
            }
          }
        });
      }
    },
    {
      key: "destroy",
      value() {
        let closure_13 = null;
        closure_11.destroy();
        PersistedStore.clearPersistQueue({ type: "all" });
        const allPersistKeys = PersistedStore.allPersistKeys;
        allPersistKeys.clear();
        const userAgnosticPersistKeys = PersistedStore.userAgnosticPersistKeys;
        userAgnosticPersistKeys.clear();
      }
    },
    {
      key: "migrateAndReadStoreState",
      value(arg0, arg1) {
        let _state;
        let _version;
        if (null != closure_13) {
          if (PersistedStore.shouldClear(closure_13, arg0)) {
            const Storage2 = PersistedStore(closure_2[10]).Storage;
            Storage2.remove(arg0);
            let obj = { state: undefined, requiresPersist: false };
            return obj;
          }
        }
        let value = null;
        if (null == PersistedStore._clearAllPromise) {
          const Storage = PersistedStore(closure_2[10]).Storage;
          value = Storage.get(arg0);
        }
        if (null == value) {
          value = closure_12;
        }
        ({ _state, _version } = value);
        const tmp6 = callback2(value, closure_3);
        let num2 = 0;
        if (null != arg1) {
          num2 = arg1.length;
        }
        if (0 !== num2) {
          if (_version !== num2) {
            if (null != arg1) {
              let num3 = 0;
              if (null != _version) {
                num3 = _version;
              }
              if (null == _version) {
                _state = tmp6;
              }
              let tmp7 = _state;
              let tmp8 = _state;
              if (num3 < num2) {
                do {
                  tmp7 = arg1[num3](tmp7);
                  num3 = num3 + 1;
                  tmp8 = tmp7;
                } while (num3 < num2);
              }
              obj = { state: tmp8, requiresPersist: true };
              return obj;
            }
          }
        }
        if (Object.values(tmp6).length > 0) {
          const obj1 = { state: tmp6, requiresPersist: true };
          obj = obj1;
        } else {
          obj = { state: _state, requiresPersist: false };
        }
        return obj;
      }
    }
  ];
  return callback(PersistedStore, items, items1);
}(Store);
tmp2.allPersistKeys = new Set();
const set = new Set();
tmp2.userAgnosticPersistKeys = new Set();
const set1 = new Set();
tmp2._writePromises = new Map();
const map = new Map();
tmp2._writeResolvers = new Map();
tmp2.disableWrites = false;
tmp2.disableWrite = false;
tmp2.throttleDelay = 0;
const tmp7 = (arg0) => {
  class UserAgnosticStore {
    constructor() {
      tmp = closure_6(this, UserAgnosticStore);
      return closure_16(this, UserAgnosticStore, arguments);
    }
  }
  const arg1 = UserAgnosticStore;
  callback3(UserAgnosticStore, arg0);
  let obj = {
    key: "initializeFromState",
    value(arg0) {
      const userAgnosticPersistKeys = closure_14.userAgnosticPersistKeys;
      userAgnosticPersistKeys.add(this.getClass().persistKey);
      const items = [arg0];
      return callback2(UserAgnosticStore, "initializeFromState", this, 3)(items);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "initializeIfNeeded",
    value() {
      const userAgnosticPersistKeys = closure_14.userAgnosticPersistKeys;
      userAgnosticPersistKeys.add(this.getClass().persistKey);
      return callback2(UserAgnosticStore, "initializeIfNeeded", this, 3)([]);
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return this.getUserAgnosticState();
    }
  };
  items[2] = obj;
  return callback(UserAgnosticStore, items);
}(tmp2);
const map1 = new Map();
const tmp8 = (arg0) => {
  class DeviceSettingsStore {
    constructor() {
      tmp = closure_6(this, DeviceSettingsStore);
      return closure_16(this, DeviceSettingsStore, arguments);
    }
  }
  const arg1 = DeviceSettingsStore;
  callback3(DeviceSettingsStore, arg0);
  return callback(DeviceSettingsStore);
}(tmp7);
const tmp9 = (arg0) => {
  class OfflineCacheStore {
    constructor() {
      tmp = closure_6(this, OfflineCacheStore);
      return closure_16(this, OfflineCacheStore, arguments);
    }
  }
  const arg1 = OfflineCacheStore;
  callback3(OfflineCacheStore, arg0);
  return callback(OfflineCacheStore);
}(tmp7);
const result = arg1(dependencyMap[11]).fileFinishedImporting("../discord_common/js/packages/flux/PersistedStore.tsx");

export const PersistedStore = tmp2;
export const DeviceSettingsStore = tmp8;
export const OfflineCacheStore = tmp9;
