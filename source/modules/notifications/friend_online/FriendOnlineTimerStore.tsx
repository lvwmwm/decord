// Module ID: 16503
// Function ID: 128695
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 664, 566, 686, 2]

// Module 16503 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
const HOUR = require("set").Millis.HOUR;
let obj = { lastReportedAtMs: null };
let tmp2 = ((PersistedStore) => {
  class FriendOnlineTimerStore {
    constructor() {
      self = this;
      tmp = FriendOnlineTimerStore(this, FriendOnlineTimerStore);
      obj = outer1_3(FriendOnlineTimerStore);
      tmp2 = outer1_2;
      if (outer1_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(FriendOnlineTimerStore, PersistedStore);
  let obj = {
    key: "initialize",
    value() {
      let tmp = arg0;
      if (arg0 === undefined) {
        tmp = outer1_6;
      }
      if (null == tmp) {
        tmp = outer1_6;
      }
      const outer1_7 = tmp;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isCooldownElapsed",
    value() {
      let tmp = null == outer1_7.lastReportedAtMs;
      if (!tmp) {
        const _Date = Date;
        tmp = Date.now() - outer1_7.lastReportedAtMs >= outer1_5;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return outer1_7;
    }
  };
  items[2] = obj;
  return callback(FriendOnlineTimerStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "FriendOnlineTimerStore";
tmp2.persistKey = "FriendOnlineTimerStore";
obj = {
  FRIEND_ONLINE_TIMER_REPORTED: function setLastReportedAtMs(timestampMs) {
    obj.lastReportedAtMs = timestampMs.timestampMs;
    return true;
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/notifications/friend_online/FriendOnlineTimerStore.tsx");

export default tmp2;
