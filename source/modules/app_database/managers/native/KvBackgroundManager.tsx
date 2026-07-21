// Module ID: 15893
// Function ID: 121726
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 15893 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT: closure_11, MAXIMUM_MESSAGES_PER_CHANNEL_EVER: closure_12 } = arg1(dependencyMap[8]));
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
let closure_15 = 5 * importDefault(dependencyMap[10]).Millis.MINUTE;
let importDefaultResult = importDefault(dependencyMap[11]);
importDefaultResult = new importDefaultResult("KvBackgroundManager");
let tmp5 = (arg0) => {
  class KvBackgroundManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_5(this, KvBackgroundManager);
      items1 = [...items];
      obj = closure_8(KvBackgroundManager);
      tmp2 = closure_7;
      if (closure_19()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, items1, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      closure_0 = tmp2Result;
      tmp2Result.isCleaning = false;
      tmp2Result.lastDeepClean = 0;
      tmp2Result.hasConnected = false;
      tmp2Result.applicationActive = false;
      tmp2Result.actions = {
        APP_STATE_UPDATE(arg0) {
              return tmp2Result.handleAppStateUpdate(arg0);
            },
        LOGOUT(arg0) {
              return tmp2Result.handleLogout(arg0);
            },
        POST_CONNECTION_OPEN(arg0) {
              return tmp2Result.handlePostConnectionOpen(arg0);
            }
      };
      tmp2Result.steps = {
        trimOrphanedChannels(arg0) {
              // CreateGeneratorClosureLongIndex (0x67)
              return callback(tmp)();
            },
        deleteDeprecatedKeyspaces(arg0) {
              // CreateGeneratorClosureLongIndex (0x67)
              return callback(tmp)();
            },
        trimLowDisk(arg0) {
              // CreateGeneratorClosureLongIndex (0x67)
              return callback(tmp)();
            },
        deleteExtraDatabases() {
              // CreateGeneratorClosureLongIndex (0x67)
              return callback(tmp)();
            },
        optimize(arg0) {
              // CreateGeneratorClosureLongIndex (0x67)
              return callback(tmp)();
            }
      };
      return tmp2Result;
    }
  }
  let closure_3 = KvBackgroundManager;
  callback3(KvBackgroundManager, arg0);
  let obj = {
    key: "handleAppStateUpdate",
    value(state) {
      const self = this;
      let applicationActive = !tmp;
      if ("active" !== state.state) {
        applicationActive = this.applicationActive;
      }
      if (applicationActive) {
        self.maybeCleanup();
      }
      self.applicationActive = "active" === state.state;
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "handleLogout",
    value() {
      this.hasConnected = false;
    }
  };
  items[1] = obj;
  obj = {
    key: "handlePostConnectionOpen",
    value() {
      this.hasConnected = true;
    }
  };
  items[2] = obj;
  const obj1 = { key: "maybeCleanup" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_2 = callback(tmp);
  obj1.value = function maybeCleanup() {
    return callback3(...arguments);
  };
  items[3] = obj1;
  const obj2 = { key: "cleanupAsync" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_1 = callback("cleanupAsync");
  obj2.value = function cleanupAsync(arg0) {
    return callback2(...arguments);
  };
  items[4] = obj2;
  const obj3 = { key: "cleanDatabaseAsync" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback("cleanDatabaseAsync");
  obj3.value = function cleanDatabaseAsync(databaseResult, arg1) {
    return callback(...arguments);
  };
  items[5] = obj3;
  return callback2(KvBackgroundManager, items);
}(importDefault(dependencyMap[17]));
tmp5 = new tmp5();
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/app_database/managers/native/KvBackgroundManager.tsx");

export default tmp5;
