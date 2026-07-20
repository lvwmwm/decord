// Module ID: 1898
// Function ID: 21300
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 1898 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _databaseName(arg0) {
  return "@account." + arg0;
}
async function _trySpeculativelyOpenDatabaseAsync(arg0, arg1) {
  const tmp = callback2(arg0);
  closure_11.verbose("speculatively opening " + tmp);
  const Database = callback(closure_3[10]).Database;
  return yield Database.open(tmp);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let importDefaultResult = importDefault(dependencyMap[7]);
importDefaultResult = new importDefaultResult("DatabaseManager");
let tmp4 = (Store) => {
  class DatabaseManager {
    constructor() {
      self = this;
      tmp = closure_5(this, DatabaseManager);
      items = [, , ];
      items[0] = DatabaseManager(closure_3[8]);
      items[1] = {
        CLEAR_CACHES(arg0) {
              return tmp2Result.handleClearCaches(arg0);
            },
        CONNECTION_CLOSED() {
              return tmp2Result.handleAuthenticationStoreChanged();
            },
        CONNECTION_OPEN() {
              return tmp2Result.handleConnectionOpen();
            },
        LOGOUT() {
              return tmp2Result.handleAuthenticationStoreChanged();
            }
      };
      items[2] = f21329(closure_3[8]).DispatchBand.Early;
      obj = closure_8(DatabaseManager);
      tmp2 = closure_7;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, items, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      f21329 = tmp2Result;
      map = new Map();
      tmp2Result.databases = map;
      tmp2Result.activeUserId = null;
      tmp2Result.preventWritingCachesAgainThisSession = false;
      return tmp2Result;
    }
  }
  const importDefault = DatabaseManager;
  callback3(DatabaseManager, Store);
  let obj = {
    key: "initialize",
    value() {
      let closure_0 = this;
      this.waitFor(store);
      const result = this.carefullySpeculativelyOpen(callback2(closure_3[9]).getUserId());
      const result1 = this.handleAuthenticationStoreChanged();
      store.addChangeListener(() => self.handleAuthenticationStoreChanged());
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "databaseName",
    value(arg0) {
      return callback7(arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "database",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        const self = this;
        const databases = this.databases;
        const value = databases.get(arg0);
        tmp = null;
        if (null != value) {
          tmp = value;
        }
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "carefullyOpenDatabase",
    value(arg0) {
      const self = this;
      if (this.preventWritingCachesAgainThisSession) {
        closure_11.verbose("Not opening database because caches have been manually cleared.");
        return null;
      } else {
        if (null != arg0) {
          const databases = self.databases;
          if (!databases.has(arg0)) {
            const tmp2 = function tryOpenDatabase(arg0) {
              const tmp = callback(arg0);
              closure_11.verbose("synchronously opening " + tmp);
              const fn = () => {
                const Database = tmp(closure_3[10]).Database;
                return Database.openSyncUnsafe(tmp, { invalidateDisabledHandles: true });
              };
              fn();
            }(arg0);
            const _HermesInternal = HermesInternal;
            closure_11.verbose("added database (" + arg0 + " \u2192 " + tmp2 + ")");
            const databases2 = self.databases;
            const result = databases2.set(arg0, tmp2);
            self.emitChange();
          }
        }
        return self.database(arg0);
      }
    }
  };
  items[4] = {
    key: "replaceDisableAllDatabases",
    value(arg0) {
      let iter2;
      const self = this;
      closure_11.info("disabling and nulling all databases (reason: " + arg0 + ")");
      const databases = this.databases;
      const tmp2 = callback5(databases.keys());
      let iter = tmp2();
      if (!iter.done) {
        do {
          let value = iter.value;
          let databases2 = self.databases;
          value = databases2.get(value);
          if (null != value) {
            let disableResult = value.disable(arg0);
          }
          if (null != value) {
            let closeResult = value.close();
          }
          let databases3 = self.databases;
          let result = databases3.set(value, null);
          iter2 = tmp2();
          iter = iter2;
        } while (!iter2.done);
      }
      self.emitChange();
    }
  };
  items[5] = {
    key: "remove",
    value(arg0) {
      const self = this;
      const databases = this.databases;
      const value = databases.get(arg0);
      closure_11.log("removing database (user: " + arg0 + ", database: " + value + ")");
      if (null != value) {
        value.close();
      }
      const databases2 = self.databases;
      databases2.delete(arg0);
      self.emitChange();
    }
  };
  items[6] = {
    key: "handleClearCaches",
    value(preventWritingCachesAgainThisSession) {
      const self = this;
      if (preventWritingCachesAgainThisSession.preventWritingCachesAgainThisSession) {
        self.preventWritingCachesAgainThisSession = true;
      }
      const result = self.replaceDisableAllDatabases("DatabaseManager (" + preventWritingCachesAgainThisSession.reason + ")");
    }
  };
  items[7] = {
    key: "handleConnectionOpen",
    value() {
      const self = this;
      const id = store.getId();
      const databases = this.databases;
      const value = databases.get(id);
      if (null != value) {
        const stateResult = value.state();
      }
      let tmp3 = null == value;
      if (tmp3) {
        tmp3 = stateResult !== callback(closure_3[10]).DatabaseState.Open;
      }
      if (tmp3) {
        self.remove(id);
      }
      const result = self.carefullyOpenDatabase(id);
    }
  };
  items[8] = {
    key: "handleAuthenticationStoreChanged",
    value() {
      const self = this;
      const id = store.getId();
      const activeUserId = this.activeUserId;
      if (id !== activeUserId) {
        const databases2 = self.databases;
        const value = databases2.get(activeUserId);
        const _HermesInternal = HermesInternal;
        closure_11.verbose("active user changed (now: " + id + ", was: " + activeUserId + ", was: " + value + ")");
        if (null != value) {
          value.close();
        }
        callback2(closure_3[9]).setUserId(id);
        self.activeUserId = id;
        const databases = self.databases;
        databases.delete(activeUserId);
        const obj = callback2(closure_3[9]);
      }
    }
  };
  const obj7 = { key: "carefullySpeculativelyOpen" };
  let closure_0 = callback(async function(arg0) {
    const self = this;
    if (self.preventWritingCachesAgainThisSession) {
      closure_11.verbose("Not opening database because caches have been manually cleared.");
    } else if (null != arg0) {
      const obj = yield function trySpeculativelyOpenDatabaseAsync(arg0) {
        return callback(...arguments);
      }(arg0);
      if (null != obj) {
        const databases = self.databases;
        if (!databases.has(arg0)) {
          const _HermesInternal = HermesInternal;
          closure_11.verbose("added speculative database (" + arg0 + " \u2192 " + obj + ")");
          const databases2 = self.databases;
          const result = databases2.set(arg0, obj);
          self.emitChange();
        }
      }
      const _HermesInternal2 = HermesInternal;
      closure_11.verbose("discarding speculative database (" + arg0 + " \u2192 " + obj + ")");
      if (null != obj) {
        obj.close();
      }
    }
  });
  obj7.value = function carefullySpeculativelyOpen(userId) {
    return callback(...arguments);
  };
  items[9] = obj7;
  return callback2(DatabaseManager, items);
}(importDefault(dependencyMap[11]).Store);
tmp4 = new tmp4();
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/app_database/system/DatabaseManager.tsx");

export default tmp4;
