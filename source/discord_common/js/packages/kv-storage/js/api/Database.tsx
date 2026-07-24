// Module ID: 1890
// Function ID: 21086
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6, 7, 1889, 1891, 20, 1892, 2]

// Module 1890 (_createForOfIteratorHelperLoose)
import AppStartPerformance from "AppStartPerformance";
import Host from "Host";
import set from "set";

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
let tmp3 = (() => {
  class DatabaseTransaction {
    constructor(arg0) {
      tmp = outer1_4(this, DatabaseTransaction);
      this.database = arg0;
      this.operations = [];
      return;
    }
  }
  let obj = {
    key: "add",
    value(arg0) {
      const operations = this.operations;
      operations.push(arg0);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "complete",
    value() {
      let done;
      const tmp = outer1_7(this.operations);
      let iter = tmp();
      if (!iter.done) {
        do {
          iter.value.handle = 0;
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      return this.operations;
    }
  };
  items[1] = obj;
  obj = {
    key: "toString",
    value() {
      return "[DatabaseTransaction " + this.database.handle + ": " + this.operations.length + " ops]";
    }
  };
  items[2] = obj;
  return callback2(DatabaseTransaction, items);
})();
let closure_6 = tmp3;
let tmp2 = (() => {
  class Database {
    constructor(arg0) {
      self = this;
      tmp = outer1_4(this, Database);
      this.raw = arg0;
      this.name = arg0.name;
      this.lastState = f21110(Database[3]).DatabaseState.Open;
      this.handle = arg0.handle;
      Runtime = f21110(Database[4]).Runtime;
      this.databaseStateCallback = Runtime.addDatabaseStateCallback((arg0, lastState) => {
        if (self.handle === arg0) {
          self.lastState = lastState;
        }
      });
      return;
    }
  }
  let obj = {
    key: "close",
    value() {
      const self = this;
      this.lastState = callback(Database[3]).DatabaseState.Closed;
      const raw = this.raw;
      if (null != raw) {
        raw.close();
      }
      self.raw = null;
      const Runtime = callback(Database[4]).Runtime;
      const result = Runtime.removeCompletionCallback(self.databaseStateCallback);
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "disable",
    value(reason) {
      const self = this;
      if (null == this.raw) {
        let resolved = Promise.resolve();
      } else {
        self.lastState = callback(Database[3]).DatabaseState.Disabled;
        const obj = { type: "db.disable", handle: 0, reason };
        resolved = self.execute(obj);
      }
      return resolved;
    }
  };
  items[1] = obj;
  obj = {
    key: "execute",
    value(table) {
      let type = arg1;
      const self = this;
      const callback2 = table;
      let closure_2 = arg1;
      if (null == this.raw) {
        const _Error = Error;
        const _HermesInternal2 = HermesInternal;
        const error = new Error("database is no longer open (database: " + tmp);
        throw error;
      } else {
        if ("key" in table) {
          table = table.key[0];
        } else {
          table = table.table;
        }
        function callback() {
          const Runtime = _self(Database[4]).Runtime;
          if (null != closure_2) {
            let type = closure_2;
          } else {
            type = table.type;
          }
          return Runtime.executeAsync(type, (arg0) => {
            const raw = outer1_0.raw;
            const obj = {};
            const merged = Object.assign(outer1_1);
            obj["handle"] = 0;
            raw.execute(arg0, obj);
          });
        }
        if (null === type) {
          let callbackResult = callback();
        } else {
          if (null == type) {
            type = table.type;
          }
          let str2 = "";
          if (null != table) {
            str2 = table;
          }
          const _HermesInternal = HermesInternal;
          callbackResult = callback2(Database[5]).timeAsync("\u{1F4BE}", "" + type + " " + str2, callback);
          let obj = callback2(Database[5]);
        }
        return callbackResult;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "executeSync",
    value(table) {
      const self = this;
      const callback2 = table;
      if (null == this.raw) {
        const _Error = Error;
        const _HermesInternal2 = HermesInternal;
        const error = new Error("database is no longer open (database: " + tmp);
        throw error;
      } else {
        if ("key" in table) {
          table = table.key[0];
        } else {
          table = table.table;
        }
        let str = "";
        if (null != table) {
          str = table;
        }
        const _HermesInternal = HermesInternal;
        return callback2(Database[5]).time("\u{1F4BE}", "SYNC: " + table.type + " " + str, () => {
          const raw = self.raw;
          const obj = {};
          const merged = Object.assign(closure_1);
          obj["handle"] = 0;
          return raw.execute(null, obj, { synchronous: true });
        });
      }
    }
  };
  items[4] = {
    key: "fullVacuum",
    value() {
      return this.execute({ type: "db.vacuum", handle: 0, complete: true });
    }
  };
  items[5] = {
    key: "fsInfo",
    value() {
      return this.execute({ type: "db.fs_info", handle: 0 });
    }
  };
  items[6] = {
    key: "incrementalVacuum",
    value() {
      return this.execute({ type: "db.vacuum", handle: 0, complete: false });
    }
  };
  items[7] = {
    key: "instantaneousState",
    value() {
      const self = this;
      if (null == this.raw) {
        let Closed = callback(Database[3]).DatabaseState.Closed;
      } else {
        const obj = { type: "db.state" };
        Closed = self.executeSync(obj);
        self.lastState = Closed;
      }
      return Closed;
    }
  };
  const obj6 = { key: "instantaneousStateAsync" };
  let closure_1 = callback(async function() {
    const self = this;
    if (null == self.raw) {
      let Closed = callback(Database[3]).DatabaseState.Closed;
    } else {
      const obj = { type: "db.state" };
      const tmp = yield self.execute(obj);
      self.lastState = tmp;
      Closed = tmp;
    }
    return Closed;
  });
  obj6.value = function instantaneousStateAsync() {
    return callback2(...arguments);
  };
  items[8] = obj6;
  items[9] = {
    key: "state",
    value() {
      return this.lastState;
    }
  };
  items[10] = {
    key: "transaction",
    value(arg0, arg1) {
      const self = this;
      let closure_1 = arg1;
      const tmp = new outer1_6(this);
      const Database = tmp;
      const resolved = Promise.resolve(arg0(tmp));
      return resolved.then(() => {
        if (tmp.operations.length > 0) {
          const obj = { type: "db.transaction", operations: tmp.complete() };
          let executeResult = self.execute(obj, closure_1);
        } else {
          executeResult = Promise.resolve();
        }
        return executeResult;
      });
    }
  };
  const obj9 = { key: "open" };
  let closure_0 = callback(async (arg0, arg1) => {
    let tmp = outer1_2;
    const Host = callback(Database[6]).Host;
    tmp = new tmp(yield Host.open(arg0, arg1));
    return tmp;
  });
  obj9.value = function open() {
    return callback(...arguments);
  };
  const items1 = [
    obj9,
    {
      key: "openSyncUnsafe",
      value(arg0, arg1) {
        const Host = callback(Database[6]).Host;
        return new Database(Host.openSyncUnsafe(arg0, arg1));
      }
    },
    {
      key: "delete",
      value(arg0) {
        const Host = callback(Database[6]).Host;
        return Host.delete(arg0);
      }
    }
  ];
  return callback2(Database, items, items1);
})();
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Database.tsx");

export const Database = tmp2;
export const DatabaseTransaction = tmp3;
