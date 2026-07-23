// Module ID: 12645
// Function ID: 98382
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4810, 653, 664, 3803, 686, 566, 2]

// Module 12645 (_isNativeReflectConstruct)
import ME from "ME";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { StatusTypes } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function hasBeenUsingDND() {
  let someResult = arr.length >= 4;
  if (someResult) {
    someResult = arr.some((arg0) => {
      const timestamp = Date.now();
      return arg0 < timestamp - 3 * outer1_1(outer1_2[7]).Millis.DAY;
    });
  }
  return someResult;
}
let closure_10 = [];
let c11 = false;
let tmp2 = ((PersistedStore) => {
  class HabitualDNDStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, HabitualDNDStore);
      obj = outer1_6(HabitualDNDStore);
      tmp2 = outer1_5;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(HabitualDNDStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(sessionStartsWithDND) {
      this.waitFor(outer1_8);
      let isArray = null != sessionStartsWithDND;
      if (isArray) {
        const _Array = Array;
        isArray = Array.isArray(sessionStartsWithDND.sessionStartsWithDND);
      }
      if (isArray) {
        const outer1_10 = sessionStartsWithDND.sessionStartsWithDND;
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "showNagBar",
    value() {
      return outer1_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { sessionStartsWithDND: outer1_10 };
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getTemp",
    value() {
      const obj = {};
      const StatusExpiresAtSetting = HabitualDNDStore(outer1_2[8]).StatusExpiresAtSetting;
      obj.x = StatusExpiresAtSetting.getSetting();
      return obj;
    }
  };
  return callback(HabitualDNDStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "HabitualDNDStore";
tmp2.persistKey = "habitualDND";
tmp2 = new tmp2(require("dispatcher"), {
  POST_CONNECTION_OPEN: function handleConnect() {
    if (status.getStatus() === StatusTypes.DND) {
      const StatusExpiresAtSetting = require(3803) /* explicitContentFromProto */.StatusExpiresAtSetting;
      if ("0" === StatusExpiresAtSetting.getSetting()) {
        const _Date = Date;
        arr = arr.push(Date.now());
        arr = arr.filter((arg0) => {
          const timestamp = Date.now();
          return arg0 > timestamp - 5 * outer1_1(outer1_2[7]).Millis.DAY;
        });
        if (hasBeenUsingDND()) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            outer1_1(outer1_2[9]).dispatch({ type: "HABITUAL_DND_CLEAR" });
          }, 15 * importDefault(664).Millis.SECOND);
        }
      }
    }
    arr = [];
  },
  HABITUAL_DND_CLEAR: function handleDNDClear() {
    let closure_11 = hasBeenUsingDND();
    let closure_10 = [];
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/notifications/HabitualDNDStore.tsx");

export default tmp2;
