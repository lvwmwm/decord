// Module ID: 12520
// Function ID: 96042
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 12520 (_createForOfIteratorHelperLoose)
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
const Consents = arg1(dependencyMap[7]).Consents;
let closure_11 = { detected: false, lastScannedAt: undefined };
let closure_12 = { apps: {} };
let tmp2 = (DeviceSettingsStore) => {
  class LocalAppDetectionStore {
    constructor() {
      self = this;
      tmp = closure_4(this, LocalAppDetectionStore);
      items = [, ];
      items[0] = closure_1(closure_2[8]);
      items[1] = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.handlePostConnectionOpen();
            },
        LOCAL_APP_DETECTION_COMPLETE(arg0) {
              return tmp2Result.handleLocalAppDetectionComplete(arg0);
            }
      };
      obj = closure_7(LocalAppDetectionStore);
      tmp2 = closure_6;
      if (closure_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      LocalAppDetectionStore = tmp2Result;
      return tmp2Result;
    }
  }
  const arg1 = LocalAppDetectionStore;
  callback2(LocalAppDetectionStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const tmp = arg0;
      const self = this;
      self.waitFor(closure_9);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return closure_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "getAppState",
    value(arg0) {
      let tmp = this.getUserAgnosticState().apps[arg0];
      if (null == tmp) {
        tmp = closure_11;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isAppInstalled",
    value(arg0) {
      const self = this;
      const tmp = !closure_9.hasConsented(constants.PERSONALIZATION);
      let detected = !tmp;
      if (!tmp) {
        detected = self.getAppState(arg0).detected;
      }
      return detected;
    }
  };
  items[4] = {
    key: "handlePostConnectionOpen",
    value() {
      let iter2;
      const self = this;
      const items = [];
      const tmp = callback4(LocalAppDetectionStore(closure_2[9]).ALL_DETECTABLE_APP_NAMES);
      let iter = tmp();
      if (!iter.done) {
        do {
          let value = iter.value;
          let appState = self.getAppState(value);
          let tmp3 = null == appState.lastScannedAt;
          if (!tmp3) {
            let _Date = Date;
            tmp3 = Date.now() - appState.lastScannedAt > 86400000;
          }
          if (tmp3) {
            let arr = items.push(value);
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
      if (items.length > 0) {
        LocalAppDetectionStore(closure_2[10]).detectLocalApps(items);
        const obj = LocalAppDetectionStore(closure_2[10]);
      }
    }
  };
  items[5] = {
    key: "handleLocalAppDetectionComplete",
    value(result) {
      let length;
      const entries = Object.entries(result.result);
      if (0 === entries.length) {
        return false;
      } else {
        const _Date = Date;
        let obj = {};
        const timestamp = Date.now();
        const merged = Object.assign(obj);
        let num3 = 0;
        if (0 < entries.length) {
          do {
            let tmp5 = closure_3;
            let tmp6 = closure_3(entries[num3], 2);
            obj = { detected: tmp6[1], lastScannedAt: timestamp };
            obj.apps[tmp6[0]] = obj;
            num3 = num3 + 1;
            length = entries.length;
          } while (num3 < length);
        }
      }
    }
  };
  items[6] = {
    key: "DEV_resetState",
    value() {
      let closure_12 = { apps: {} };
    }
  };
  return callback(LocalAppDetectionStore, items);
}(importDefault(dependencyMap[11]).DeviceSettingsStore);
tmp2.displayName = "AppDetectionStore";
tmp2.persistKey = "AppDetectionStore";
tmp2 = new tmp2();
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/local_app_detection/native/LocalAppDetectionStore.tsx");

export default tmp2;
