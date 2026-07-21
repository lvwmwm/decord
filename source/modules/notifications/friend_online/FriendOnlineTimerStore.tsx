// Module ID: 16378
// Function ID: 126479
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16378 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const HOUR = importDefault(dependencyMap[5]).Millis.HOUR;
let obj = { lastReportedAtMs: null };
let tmp2 = (PersistedStore) => {
  class FriendOnlineTimerStore {
    constructor() {
      self = this;
      tmp = FriendOnlineTimerStore(this, FriendOnlineTimerStore);
      obj = closure_3(FriendOnlineTimerStore);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = FriendOnlineTimerStore;
  callback2(FriendOnlineTimerStore, PersistedStore);
  let obj = {
    key: "initialize",
    value() {
      let tmp = arg0;
      if (arg0 === undefined) {
        tmp = closure_6;
      }
      if (null == tmp) {
        tmp = closure_6;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isCooldownElapsed",
    value() {
      let tmp = null == closure_7.lastReportedAtMs;
      if (!tmp) {
        const _Date = Date;
        tmp = Date.now() - closure_7.lastReportedAtMs >= closure_5;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return closure_7;
    }
  };
  items[2] = obj;
  return callback(FriendOnlineTimerStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp2.displayName = "FriendOnlineTimerStore";
tmp2.persistKey = "FriendOnlineTimerStore";
obj = {
  FRIEND_ONLINE_TIMER_REPORTED: function setLastReportedAtMs(timestampMs) {
    obj.lastReportedAtMs = timestampMs.timestampMs;
    return true;
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[7]), obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/notifications/friend_online/FriendOnlineTimerStore.tsx");

export default tmp2;
