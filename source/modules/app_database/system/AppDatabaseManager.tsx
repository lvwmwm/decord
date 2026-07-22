// Module ID: 6883
// Function ID: 54616
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6883 (_createForOfIteratorHelperLoose)
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
let closure_6 = importDefault(dependencyMap[3]);
let importDefaultResult = importDefault(dependencyMap[4]);
importDefaultResult = new importDefaultResult("AppDatabaseManager");
const set = new Set([]);
const tmp5 = () => {
  class AppDatabaseManager {
    constructor(arg0, arg1, arg2) {
      AppDatabaseManager = this;
      tmp = closure_4(this, AppDatabaseManager);
      tmp2 = closure_3(AppDatabaseManager.computeEntries(arg0, arg2), 2);
      this.name = arg0;
      [this.actions, this.entries] = tmp2;
      this.lastDatabase = null;
      registerResult = AppDatabaseManager.register(`${arg0}_CLEAR_CACHES`, [null], [], () => {
        let done;
        const tmp = callback(self.entries);
        let iter = tmp();
        if (!iter.done) {
          do {
            let value = iter.value;
            let resetResult = value.reset();
            let iter2 = tmp();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
      });
      actions = this.actions;
      items = [...actions.keys()];
      handleAction = this.handleAction;
      registerResult1 = AppDatabaseManager.register(arg0, items, arg1, handleAction.bind(this));
      verboseResult = closure_7.verbose("" + arg0 + " created with " + arg2.length + " modules, " + this.actions.size + " distinct actions.");
      return;
    }
  }
  const arg1 = AppDatabaseManager;
  let obj = {
    key: "handleAction",
    value(type) {
      this.validateInDev(type.type);
      const id = id.getId();
      const databaseResult = callback(closure_2[5]).database(id);
      this.resetModules(type, databaseResult);
      this.executeModules(type, databaseResult);
      return false;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "resetModules",
    value(type, lastDatabase) {
      let done;
      const self = this;
      if (lastDatabase !== this.lastDatabase) {
        const _HermesInternal = HermesInternal;
        closure_7.verbose("database has changed (was: " + self.lastDatabase + ", now: " + lastDatabase + ", action: " + type.type + "). resetting modules.");
        const tmp8 = callback4(self.entries);
        let iter2 = tmp8();
        if (!iter2.done) {
          do {
            let value = iter2.value;
            let resetResult = value.reset();
            let iter = tmp8();
            iter2 = iter;
            done = iter.done;
          } while (!done);
        }
        self.lastDatabase = lastDatabase;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "executeModules",
    value(type, state) {
      const AppDatabaseManager = type;
      type = type.type;
      const actions = this.actions;
      const value = actions.get(type);
      if (null != state) {
        const stateResult = state.state();
      }
      if (null != value) {
        if (0 !== value.length) {
          if (null != state) {
            if (stateResult === AppDatabaseManager(value[6]).DatabaseState.Open) {
              let combined = null;
              if (!set.has(type.type)) {
                const _HermesInternal2 = HermesInternal;
                combined = "Dispatch " + type.type;
              }
              state.transaction((arg0) => value.forEach((execute) => execute.execute(execute, execute)), combined);
              if ("WRITE_CACHES" === type.type) {
                const promisesToWaitOn = type.promisesToWaitOn;
                promisesToWaitOn.push(tmp14);
              }
            }
          }
          const _HermesInternal = HermesInternal;
          closure_7.verbose("no usable database; skipping action (type: " + type + ", database: " + state + ", state: " + stateResult + ")");
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "validateInDev",
    value() {

    }
  };
  const items1 = [
    {
      key: "handleException",
      value(arg0, type, error) {
        closure_7.info("disabling database \u00B7 error encountered during dispatch", error, error.stack);
        let obj = callback(closure_2[7]);
        obj = { type: "RESET_SOCKET" };
        obj = { error, action: "AppDatabaseManager(" + type.type + ")" };
        obj.args = obj;
        obj.dispatch(obj);
      }
    },
    {
      key: "computeEntries",
      value(arg0, arr) {
        let iter5;
        const AppDatabaseManager = arg0;
        const map = new Map();
        const mapped = arr.map((arg0) => {
          const entry = new arg0(closure_2[8]).Entry(arg0, arg0);
          return entry;
        });
        const result = map.set("LOGOUT", []);
        const result1 = map.set("LOGIN_RESET", []);
        const tmp4 = callback4(mapped);
        const iter = tmp4();
        let iter2 = iter;
        if (!iter.done) {
          do {
            let value = iter2.value;
            let tmp5 = closure_9;
            let tmp6 = closure_9(value.actions);
            let iter3 = tmp6();
            if (!iter3.done) {
              do {
                value = iter3.value;
                if (!map.has(value)) {
                  let result2 = map.set(value, []);
                }
                value = map.get(value);
                arr = value.push(value);
                let iter4 = tmp6();
                iter3 = iter4;
                let tmp9 = value;
              } while (!iter4.done);
            }
            iter5 = tmp4();
            iter2 = iter5;
          } while (!iter5.done);
        }
        const items = [map, mapped];
        return items;
      }
    },
    {
      key: "register",
      value(arg0, arr) {
        const AppDatabaseManager = arg3;
        const obj = callback(closure_2[7]);
        const registerResult = obj.register(arg0, Object.fromEntries(arr.map((arg0) => {
          const items = [arg0, arg3];
          return items;
        })), () => {

        }, AppDatabaseManager(closure_2[7]).DispatchBand.Database);
        const fromEntriesResult = Object.fromEntries(arr.map((arg0) => {
          const items = [arg0, arg3];
          return items;
        }));
        callback(closure_2[7]).addDependencies(registerResult, arg2);
        return registerResult;
      }
    }
  ];
  return callback(AppDatabaseManager, items, items1);
}();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/app_database/system/AppDatabaseManager.tsx");

export const AppDatabaseManager = tmp5;
