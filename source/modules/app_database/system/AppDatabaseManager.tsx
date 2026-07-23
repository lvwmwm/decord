// Module ID: 6888
// Function ID: 54650
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 1194, 3, 1898, 1883, 686, 6889, 2]

// Module 6888 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import module_1883 from "module_1883";
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import set from "_defineProperties";

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
importDefaultResult = new importDefaultResult("AppDatabaseManager");
let set = new Set(["MESSAGE_CREATE"]);
let result = set.fileFinishedImporting("modules/app_database/system/AppDatabaseManager.tsx");

export const AppDatabaseManager = (() => {
  class AppDatabaseManager {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = outer1_4(this, self);
      tmp2 = outer1_3(self.computeEntries(arg0, arg2), 2);
      this.name = arg0;
      [this.actions, this.entries] = tmp2;
      this.lastDatabase = null;
      registerResult = self.register(`${arg0}_CLEAR_CACHES`, ["CLEAR_CACHES"], [], () => {
        let done;
        const tmp = outer2_9(self.entries);
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
      registerResult1 = self.register(arg0, items, arg1, handleAction.bind(this));
      verboseResult = outer1_7.verbose("" + arg0 + " created with " + arg2.length + " modules, " + this.actions.size + " distinct actions.");
      return;
    }
  }
  let obj = {
    key: "handleAction",
    value(type) {
      this.validateInDev(type.type);
      const id = outer1_6.getId();
      const databaseResult = outer1_1(outer1_2[5]).database(id);
      this.resetModules(type, databaseResult);
      this.executeModules(type, databaseResult);
      return false;
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "resetModules",
    value(type, lastDatabase) {
      let done;
      const self = this;
      if (lastDatabase !== this.lastDatabase) {
        const _HermesInternal = HermesInternal;
        outer1_7.verbose("database has changed (was: " + self.lastDatabase + ", now: " + lastDatabase + ", action: " + type.type + "). resetting modules.");
        const tmp8 = outer1_9(self.entries);
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
      let closure_0 = type;
      let closure_1 = state;
      type = type.type;
      const actions = this.actions;
      const value = actions.get(type);
      let closure_2 = value;
      if (null != state) {
        const stateResult = state.state();
      }
      if (null != value) {
        if (0 !== value.length) {
          if (null != state) {
            if (stateResult === AppDatabaseManager(outer1_2[6]).DatabaseState.Open) {
              let combined = null;
              if (!outer1_8.has(type.type)) {
                const _HermesInternal2 = HermesInternal;
                combined = "Dispatch " + type.type;
              }
              state.transaction((arg0) => {
                let closure_0 = arg0;
                return value.forEach((execute) => execute.execute(closure_0, closure_0));
              }, combined);
              if ("WRITE_CACHES" === type.type) {
                const promisesToWaitOn = type.promisesToWaitOn;
                promisesToWaitOn.push(tmp14);
              }
            }
          }
          const _HermesInternal = HermesInternal;
          outer1_7.verbose("no usable database; skipping action (type: " + type + ", database: " + state + ", state: " + stateResult + ")");
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
        outer1_7.info("disabling database \u00B7 error encountered during dispatch", error, error.stack);
        let obj = outer1_1(outer1_2[7]);
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
        let closure_0 = arg0;
        const map = new Map();
        const mapped = arr.map((arg0) => {
          const entry = new AppDatabaseManager(outer2_2[8]).Entry(closure_0, arg0);
          return entry;
        });
        const result = map.set("LOGOUT", []);
        const result1 = map.set("LOGIN_RESET", []);
        const tmp4 = outer1_9(mapped);
        const iter = tmp4();
        let iter2 = iter;
        if (!iter.done) {
          do {
            let value = iter2.value;
            let tmp5 = outer1_9;
            let tmp6 = outer1_9(value.actions);
            let iter3 = tmp6();
            if (!iter3.done) {
              do {
                value = iter3.value;
                if (!map.has(value)) {
                  let result2 = map.set(value, []);
                }
                value = map.get(value);
                arr = value.push(value);
                iter4 = tmp6();
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
        let closure_0 = arg3;
        const obj = outer1_1(outer1_2[7]);
        const registerResult = obj.register(arg0, Object.fromEntries(arr.map((arg0) => {
          const items = [arg0, closure_0];
          return items;
        })), () => {

        }, AppDatabaseManager(outer1_2[7]).DispatchBand.Database);
        const fromEntriesResult = Object.fromEntries(arr.map((arg0) => {
          const items = [arg0, closure_0];
          return items;
        }));
        outer1_1(outer1_2[7]).addDependencies(registerResult, arg2);
        return registerResult;
      }
    }
  ];
  return callback(AppDatabaseManager, items, items1);
})();
