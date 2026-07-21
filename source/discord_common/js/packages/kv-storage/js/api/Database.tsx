// Module ID: 1890
// Function ID: 21084
// Name: _createForOfIteratorHelperLoose
// Dependencies: [771751943, 1291845639, 2885681168]

// Module 1890 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const tmp3 = () => {
  class DatabaseTransaction {
    constructor(arg0) {
      tmp = closure_4(this, DatabaseTransaction);
      this.database = arg0;
      this.operations = [];
      return;
    }
  }
  const arg1 = DatabaseTransaction;
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
      const tmp = callback2(this.operations);
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
}();
const tmp2 = () => {
  class Database {
    constructor(arg0) {
      f21108 = this;
      tmp = closure_4(this, Database);
      this.raw = arg0;
      this.name = arg0.name;
      this.lastState = f21108(Database[3]).DatabaseState.Open;
      this.handle = arg0.handle;
      Runtime = f21108(Database[4]).Runtime;
      this.databaseStateCallback = Runtime.addDatabaseStateCallback((arg0, lastState) => {
        if (self.handle === arg0) {
          self.lastState = lastState;
        }
      });
      return;
    }
  }
  const dependencyMap = Database;
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
        const obj = { marginEnd: true, marginHorizontal: true, reason };
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
      let closure_0 = this;
      const callback2 = table;
      const Database = arg1;
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
          const Runtime = self(arg1[4]).Runtime;
          if (null != arg1) {
            let type = arg1;
          } else {
            type = arg0.type;
          }
          return Runtime.executeAsync(type, (arg0) => {
            const raw = raw.raw;
            const obj = {};
            const merged = Object.assign(closure_1);
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
          const obj = callback2(Database[5]);
        }
        return callbackResult;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "executeSync",
    value(table) {
      let closure_0 = this;
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
          const merged = Object.assign(arg0);
          obj["handle"] = 0;
          return raw.execute(null, obj, { synchronous: true });
        });
      }
    }
  };
  items[4] = {
    key: "fullVacuum",
    value() {
      return this.execute({});
    }
  };
  items[5] = {
    key: "fsInfo",
    value() {
      return this.execute({ marginEnd: "center", marginHorizontal: "center" });
    }
  };
  items[6] = {
    key: "incrementalVacuum",
    value() {
      return this.execute({});
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
      let Closed = callback(closure_2[3]).DatabaseState.Closed;
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
      let closure_0 = this;
      let closure_1 = arg1;
      const tmp = new closure_6(this);
      const Database = tmp;
      const resolved = Promise.resolve(arg0(tmp));
      return resolved.then(() => {
        if (tmp.operations.length > 0) {
          const obj = { type: "db.transaction", operations: tmp.complete() };
          let executeResult = self.execute(obj, arg1);
        } else {
          executeResult = Promise.resolve();
        }
        return executeResult;
      });
    }
  };
  const obj9 = { key: "open" };
  let closure_0 = callback(async (arg0, arg1) => {
    let tmp = closure_2;
    const Host = callback(closure_2[6]).Host;
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
}();
const result = arg1(dependencyMap[7]).fileFinishedImporting("../discord_common/js/packages/kv-storage/js/api/Database.tsx");

export const Database = tmp2;
export const DatabaseTransaction = tmp3;
