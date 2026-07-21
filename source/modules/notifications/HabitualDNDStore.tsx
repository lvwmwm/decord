// Module ID: 12526
// Function ID: 96198
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12526 (_isNativeReflectConstruct)
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
      return arg0 < timestamp - 3 * callback(closure_2[7]).Millis.DAY;
    });
  }
  return someResult;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const StatusTypes = arg1(dependencyMap[6]).StatusTypes;
let closure_10 = [];
let closure_11 = false;
let tmp2 = (PersistedStore) => {
  class HabitualDNDStore {
    constructor() {
      self = this;
      tmp = closure_3(this, HabitualDNDStore);
      obj = closure_6(HabitualDNDStore);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = HabitualDNDStore;
  callback2(HabitualDNDStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(sessionStartsWithDND) {
      this.waitFor(closure_8);
      let isArray = null != sessionStartsWithDND;
      if (isArray) {
        const _Array = Array;
        isArray = Array.isArray(sessionStartsWithDND.sessionStartsWithDND);
      }
      if (isArray) {
        sessionStartsWithDND = sessionStartsWithDND.sessionStartsWithDND;
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "showNagBar",
    value() {
      return closure_11;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { sessionStartsWithDND: closure_10 };
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getTemp",
    value() {
      const obj = {};
      const StatusExpiresAtSetting = HabitualDNDStore(closure_2[8]).StatusExpiresAtSetting;
      obj.x = StatusExpiresAtSetting.getSetting();
      return obj;
    }
  };
  return callback(HabitualDNDStore, items);
}(importDefault(dependencyMap[10]).PersistedStore);
tmp2.displayName = "HabitualDNDStore";
tmp2.persistKey = "habitualDND";
tmp2 = new tmp2(importDefault(dependencyMap[9]), {
  POST_CONNECTION_OPEN: function handleConnect() {
    if (status.getStatus() === StatusTypes.DND) {
      const StatusExpiresAtSetting = arg1(dependencyMap[8]).StatusExpiresAtSetting;
      if ("0" === StatusExpiresAtSetting.getSetting()) {
        const _Date = Date;
        let arr = arr.push(Date.now());
        arr = arr.filter((arg0) => {
          const timestamp = Date.now();
          return arg0 > timestamp - 5 * callback(closure_2[7]).Millis.DAY;
        });
        if (hasBeenUsingDND()) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            callback(closure_2[9]).dispatch({ type: "HABITUAL_DND_CLEAR" });
          }, 15 * importDefault(dependencyMap[7]).Millis.SECOND);
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
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/notifications/HabitualDNDStore.tsx");

export default tmp2;
