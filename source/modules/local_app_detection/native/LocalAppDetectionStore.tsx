// Module ID: 12634
// Function ID: 98198
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 15, 17, 18, 5592, 653, 686, 12635, 12636, 566, 2]

// Module 12634 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_9 from "_isNativeReflectConstruct";
import { Consents } from "ME";

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
let closure_11 = { detected: false, lastScannedAt: undefined };
let closure_12 = { apps: {} };
let tmp2 = ((DeviceSettingsStore) => {
  class LocalAppDetectionStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, apply);
      items = [, ];
      items[0] = outer1_1(outer1_2[8]);
      items[1] = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.handlePostConnectionOpen();
            },
        LOCAL_APP_DETECTION_COMPLETE(arg0) {
              return tmp2Result.handleLocalAppDetectionComplete(arg0);
            }
      };
      obj = outer1_7(apply);
      tmp2 = outer1_6;
      if (outer1_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      return tmp2Result;
    }
  }
  callback2(LocalAppDetectionStore, DeviceSettingsStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let tmp = arg0;
      const self = this;
      if (null == arg0) {
        tmp = outer1_12;
      }
      outer1_12 = tmp;
      self.waitFor(outer1_9);
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "getUserAgnosticState",
    value() {
      return outer1_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "getAppState",
    value(arg0) {
      let tmp = this.getUserAgnosticState().apps[arg0];
      if (null == tmp) {
        tmp = outer1_11;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isAppInstalled",
    value(arg0) {
      const self = this;
      const tmp = !outer1_9.hasConsented(outer1_10.PERSONALIZATION);
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
      const tmp = outer1_13(LocalAppDetectionStore(outer1_2[9]).ALL_DETECTABLE_APP_NAMES);
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
        LocalAppDetectionStore(outer1_2[10]).detectLocalApps(items);
        const obj = LocalAppDetectionStore(outer1_2[10]);
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
        const merged = Object.assign(outer1_12);
        let num3 = 0;
        if (0 < entries.length) {
          do {
            let tmp5 = outer1_3;
            let tmp6 = outer1_3(entries[num3], 2);
            obj = { detected: tmp6[1], lastScannedAt: timestamp };
            obj.apps[tmp6[0]] = obj;
            num3 = num3 + 1;
            length = entries.length;
          } while (num3 < length);
        }
        outer1_12 = obj;
      }
    }
  };
  items[6] = {
    key: "DEV_resetState",
    value() {
      const outer1_12 = { apps: {} };
    }
  };
  return callback(LocalAppDetectionStore, items);
})(require("initialize").DeviceSettingsStore);
tmp2.displayName = "AppDetectionStore";
tmp2.persistKey = "AppDetectionStore";
tmp2 = new tmp2();
let result = require("_defineProperties").fileFinishedImporting("modules/local_app_detection/native/LocalAppDetectionStore.tsx");

export default tmp2;
