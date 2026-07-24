// Module ID: 1898
// Function ID: 21307
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6, 7, 15, 17, 18, 1194, 3, 686, 1899, 1883, 566, 2]

// Module 1898 (_createForOfIteratorHelperLoose)
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import timestamp from "timestamp";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import closure_9 from "_inherits";
import closure_10 from "_isNativeReflectConstruct";
import importDefaultResult from "_possibleConstructorReturn";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
  const tmp = outer2_15(arg0);
  outer2_11.verbose("speculatively opening " + tmp);
  const Database = outer2_0(outer2_3[10]).Database;
  return yield Database.open(tmp);
}
importDefaultResult = new importDefaultResult("DatabaseManager");
let tmp4 = ((Store) => {
  class DatabaseManager {
    constructor() {
      self = this;
      tmp = outer1_5(this, DatabaseManager);
      items = [, , ];
      items[0] = DatabaseManager(outer1_3[8]);
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
      items[2] = f21336(outer1_3[8]).DispatchBand.Early;
      obj = outer1_8(DatabaseManager);
      tmp2 = outer1_7;
      if (outer1_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_8;
        constructResult = Reflect.construct(obj, items, outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      map = new Map();
      tmp2Result.databases = map;
      tmp2Result.activeUserId = null;
      tmp2Result.preventWritingCachesAgainThisSession = false;
      return tmp2Result;
    }
  }
  callback3(DatabaseManager, Store);
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      this.waitFor(outer1_10);
      const result = this.carefullySpeculativelyOpen(outer1_2(outer1_3[9]).getUserId());
      const result1 = this.handleAuthenticationStoreChanged();
      outer1_10.addChangeListener(() => self.handleAuthenticationStoreChanged());
    }
  };
  let items = [obj, , , , , , , , , ];
  obj = {
    key: "databaseName",
    value(arg0) {
      return outer1_15(arg0);
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
        outer1_11.verbose("Not opening database because caches have been manually cleared.");
        return null;
      } else {
        if (null != arg0) {
          const databases = self.databases;
          if (!databases.has(arg0)) {
            const tmp2 = (function tryOpenDatabase(arg0) {
              const tmp = outer2_15(arg0);
              let closure_0 = tmp;
              outer2_11.verbose("synchronously opening " + tmp);
              const fn = () => {
                const Database = tmp(outer3_3[10]).Database;
                return Database.openSyncUnsafe(tmp, { invalidateDisabledHandles: true });
              };
              fn();
            })(arg0);
            const _HermesInternal = HermesInternal;
            outer1_11.verbose("added database (" + arg0 + " \u2192 " + tmp2 + ")");
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
      outer1_11.info("disabling and nulling all databases (reason: " + arg0 + ")");
      const databases = this.databases;
      const tmp2 = outer1_12(databases.keys());
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
      outer1_11.log("removing database (user: " + arg0 + ", database: " + value + ")");
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
      const id = outer1_10.getId();
      const databases = this.databases;
      const value = databases.get(id);
      if (null != value) {
        const stateResult = value.state();
      }
      let tmp3 = null == value;
      if (tmp3) {
        tmp3 = stateResult !== callback(outer1_3[10]).DatabaseState.Open;
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
      const id = outer1_10.getId();
      const activeUserId = this.activeUserId;
      if (id !== activeUserId) {
        const databases2 = self.databases;
        const value = databases2.get(activeUserId);
        const _HermesInternal = HermesInternal;
        outer1_11.verbose("active user changed (now: " + id + ", was: " + activeUserId + ", was: " + value + ")");
        if (null != value) {
          value.close();
        }
        outer1_2(outer1_3[9]).setUserId(id);
        self.activeUserId = id;
        const databases = self.databases;
        databases.delete(activeUserId);
        const obj = outer1_2(outer1_3[9]);
      }
    }
  };
  const obj7 = { key: "carefullySpeculativelyOpen" };
  let closure_0 = callback(async function(arg0) {
    const self = this;
    if (self.preventWritingCachesAgainThisSession) {
      outer2_11.verbose("Not opening database because caches have been manually cleared.");
    } else if (null != arg0) {
      const obj = yield (function trySpeculativelyOpenDatabaseAsync(arg0) {
        return outer3_16(...arguments);
      })(arg0);
      if (null != obj) {
        const databases = self.databases;
        if (!databases.has(arg0)) {
          const _HermesInternal = HermesInternal;
          outer2_11.verbose("added speculative database (" + arg0 + " \u2192 " + obj + ")");
          const databases2 = self.databases;
          const result = databases2.set(arg0, obj);
          self.emitChange();
        }
      }
      const _HermesInternal2 = HermesInternal;
      outer2_11.verbose("discarding speculative database (" + arg0 + " \u2192 " + obj + ")");
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
})(require("initialize").Store);
tmp4 = new tmp4();
let result = require("_defineProperties").fileFinishedImporting("modules/app_database/system/DatabaseManager.tsx");

export default tmp4;
