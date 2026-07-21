// Module ID: 12547
// Function ID: 96413
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12547 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function stopActivity(applicationId, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    updateActivity(applicationId, true);
  }
  if (null != closure_20[applicationId.applicationId]) {
    obj.stop();
    applicationId = applicationId.applicationId;
    delete r4[r3];
  }
  delete r3[r2];
  const Storage = flag(dependencyMap[14]).Storage;
  const result = Storage.set(closure_16, obj);
}
function updateActivity(applicationId) {
  let flag = arg1;
  const arg1 = applicationId;
  if (arg1 === undefined) {
    flag = false;
  }
  const timestamp = Date.now();
  let num = 0;
  if (null != applicationId.updatedAt) {
    num = timestamp - applicationId.updatedAt;
  }
  if (num > closure_17 + closure_18) {
    num = 0;
  }
  let obj = arg1(dependencyMap[15]);
  const result = obj.shouldShareApplicationActivity(applicationId.applicationId, closure_12);
  const voiceChannelId = voiceChannelId.getVoiceChannelId();
  const sessionId = sessionId.getSessionId();
  const mediaSessionId = mediaSessionId.getMediaSessionId();
  obj = { applicationId: applicationId.applicationId };
  if (applicationId.isDiscordApplication) {
    let distributor = Distributors.DISCORD;
  } else {
    distributor = applicationId.distributor;
  }
  obj.distributor = distributor;
  obj.shareActivity = result;
  obj.token = applicationId.token;
  obj.duration = Math.floor(num / 1000);
  obj.closed = flag;
  obj.exePath = applicationId.exePath;
  obj.voiceChannelId = voiceChannelId;
  obj.sessionId = sessionId;
  obj.mediaSessionId = mediaSessionId;
  importDefault(dependencyMap[16]).updateActivity(obj);
  applicationId.updatedAt = timestamp;
  if (null == closure_20[applicationId.applicationId]) {
    const Interval = arg1(dependencyMap[17]).Interval;
    const prototype = Interval.prototype;
    const interval = new Interval();
    closure_20[applicationId.applicationId] = interval;
    interval.start(closure_17, () => {
      callback(arg0);
    });
  }
  if (!flag) {
    obj[applicationId.applicationId] = applicationId;
    const Storage = arg1(dependencyMap[14]).Storage;
    const result1 = Storage.set(closure_16, obj);
  }
}
function handleRunningGamesChange(flag) {
  let iter3;
  let obj;
  if (flag === undefined) {
    flag = true;
  }
  const visibleRunningGames = visibleRunningGames.getVisibleRunningGames();
  const set = new Set();
  const tmp2 = _createForOfIteratorHelperLoose(visibleRunningGames);
  const iter = tmp2();
  let iter2 = iter;
  if (!iter.done) {
    do {
      let value = iter2.value;
      let tmp4 = closure_11;
      let findGameResult = closure_11.findGame(value);
      let tmp6 = tmp3;
      if (null != findGameResult) {
        let addResult = set.add(findGameResult.id);
        let tmp16 = closure_19;
        if (!(findGameResult.id in closure_19)) {
          obj = { applicationId: findGameResult.id };
          let _Date = Date;
          let tmp7 = closure_26;
          obj.updatedAt = Date.now();
          obj.distributor = value.distributor;
          let tmp8 = closure_0;
          let tmp9 = closure_2;
          let obj3 = closure_0(closure_2[18]);
          let exePath = value.exePath;
          let str = "";
          if (null != exePath) {
            str = exePath;
          }
          obj.exePath = obj3.removeExecutablePathPrefix(str);
          let tmp7Result = tmp7(obj);
          let tmp3 = exePath;
        }
        tmp6 = tmp3;
      }
      iter3 = tmp2();
      tmp3 = tmp6;
      iter2 = iter3;
    } while (!iter3.done);
  }
  const keys = Object.keys(obj);
  for (let num = 0; num < keys.length; num = num + 1) {
    let tmp11 = keys[num];
    if (!set.has(tmp11)) {
      let tmp12 = stopActivity;
      let tmp13 = obj;
      let tmp14 = stopActivity(obj[tmp11], flag);
    }
  }
}
function handleLogout() {
  let length;
  const keys = Object.keys(obj);
  let num = 0;
  if (0 < keys.length) {
    do {
      let tmp = closure_25;
      let tmp2 = closure_19;
      let tmp3 = closure_25(closure_19[keys[num]]);
      num = num + 1;
      length = keys.length;
    } while (num < length);
  }
  let closure_21 = false;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
const Distributors = arg1(dependencyMap[12]).Distributors;
let closure_16 = "ActivityTrackingStore";
let closure_17 = 30 * importDefault(dependencyMap[13]).Millis.MINUTE;
let closure_18 = 5 * importDefault(dependencyMap[13]).Millis.MINUTE;
const Storage = arg1(dependencyMap[14]).Storage;
let obj = Storage.get("ActivityTrackingStore");
if (null == obj) {
  obj = {};
}
let closure_20 = {};
let closure_21 = false;
let tmp2 = (Store) => {
  class ActivityTrackingStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ActivityTrackingStore);
      obj = closure_6(ActivityTrackingStore);
      tmp2 = closure_5;
      if (closure_22()) {
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
  const arg1 = ActivityTrackingStore;
  callback2(ActivityTrackingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10, closure_11, closure_12, closure_13, closure_8, closure_14, closure_9);
      const items = [closure_9];
      this.syncWith(items, closure_27);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getActivities",
    value() {
      return closure_19;
    }
  };
  items[1] = obj;
  return callback(ActivityTrackingStore, items);
}(importDefault(dependencyMap[19]).Store);
tmp2.displayName = "ActivityTrackingStore";
obj = {
  RUNNING_GAMES_CHANGE() {
    handleRunningGamesChange();
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    let length;
    if (closure_21) {
      return false;
    } else {
      const _Object = Object;
      const keys = Object.keys(obj);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp3 = closure_26;
          let tmp4 = closure_19;
          let tmp5 = closure_26(closure_19[keys[num]]);
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      handleRunningGamesChange(false);
      closure_21 = true;
    }
  },
  CONNECTION_CLOSED: function handleConnectionClosed(code) {
    if (4004 === code.code) {
      handleLogout();
    }
  },
  LOGOUT: handleLogout,
  ACTIVITY_UPDATE_SUCCESS: function handleActivityUpdate(arg0) {
    if (null == obj[arg0.applicationId]) {
      return false;
    } else {
      tmp2.token = tmp;
      const Storage = arg1(dependencyMap[14]).Storage;
      const result = Storage.set(closure_16, obj);
    }
  },
  ACTIVITY_UPDATE_FAIL: function handleActivityUpdateFail(arg0) {
    if (null == obj[arg0.applicationId]) {
      return false;
    } else {
      tmp.token = null;
      tmp.updatedAt = null;
      const Storage = arg1(dependencyMap[14]).Storage;
      const result = Storage.set(closure_16, obj);
    }
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[20]), obj);
const result = arg1(dependencyMap[21]).fileFinishedImporting("stores/ActivityTrackingStore.tsx");

export default tmp2;
