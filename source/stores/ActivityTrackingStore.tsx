// Module ID: 12668
// Function ID: 98619
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4150, 1316, 1194, 4162, 4165, 4202, 1906, 653, 664, 587, 4174, 10455, 4015, 4300, 566, 686, 2]

// Module 12668 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import convertToTransitionState from "convertToTransitionState";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import normalizePath from "normalizePath";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import { Distributors } from "ME";
import { Storage } from "Storage";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function stopActivity(applicationId, flag) {
  if (flag === undefined) {
    flag = true;
  }
  if (flag) {
    updateActivity(applicationId, true);
  }
  if (null != dependencyMap[applicationId.applicationId]) {
    obj.stop();
    applicationId = applicationId.applicationId;
    delete tmp3[tmp2];
  }
  delete tmp2[tmp];
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set(ActivityTrackingStore, obj);
}
function updateActivity(applicationId) {
  let flag = arg1;
  const _require = applicationId;
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
  let obj = _require(4174);
  const result = obj.shouldShareApplicationActivity(applicationId.applicationId, closure_12);
  voiceChannelId = voiceChannelId.getVoiceChannelId();
  sessionId = sessionId.getSessionId();
  mediaSessionId = mediaSessionId.getMediaSessionId();
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
  importDefault(10455).updateActivity(obj);
  applicationId.updatedAt = timestamp;
  if (null == dependencyMap[applicationId.applicationId]) {
    const Interval = _require(4015).Interval;
    const prototype = Interval.prototype;
    const interval = new Interval();
    dependencyMap[applicationId.applicationId] = interval;
    interval.start(closure_17, () => {
      outer1_26(closure_0);
    });
  }
  if (!flag) {
    obj[applicationId.applicationId] = applicationId;
    const Storage = _require(587).Storage;
    const result1 = Storage.set(ActivityTrackingStore, obj);
  }
}
function handleRunningGamesChange(flag) {
  let iter3;
  let obj;
  if (flag === undefined) {
    flag = true;
  }
  visibleRunningGames = visibleRunningGames.getVisibleRunningGames();
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
        let tmp16 = obj;
        if (!(findGameResult.id in obj)) {
          obj = { applicationId: findGameResult.id };
          let _Date = Date;
          let tmp7 = updateActivity;
          obj.updatedAt = Date.now();
          obj.distributor = value.distributor;
          let tmp8 = require;
          let tmp9 = dependencyMap;
          let obj3 = require(4300) /* normalizePath */;
          let exePath = value.exePath;
          let str = "";
          if (null != exePath) {
            str = exePath;
          }
          obj.exePath = obj3.removeExecutablePathPrefix(str);
          let tmp7Result = tmp7(obj);
          tmp3 = exePath;
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
      let tmp = stopActivity;
      let tmp2 = obj;
      let tmp3 = stopActivity(obj[keys[num]]);
      num = num + 1;
      length = keys.length;
    } while (num < length);
  }
  let c21 = false;
}
const ActivityTrackingStore = "ActivityTrackingStore";
let closure_17 = 30 * require("set").Millis.MINUTE;
let closure_18 = 5 * require("set").Millis.MINUTE;
let obj = Storage.get("ActivityTrackingStore");
if (null == obj) {
  obj = {};
}
let closure_20 = {};
let c21 = false;
let tmp2 = ((Store) => {
  class ActivityTrackingStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ActivityTrackingStore);
      obj = outer1_6(ActivityTrackingStore);
      tmp2 = outer1_5;
      if (outer1_22()) {
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
  callback2(ActivityTrackingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10, outer1_11, outer1_12, outer1_13, outer1_8, outer1_14, outer1_9);
      const items = [outer1_9];
      this.syncWith(items, outer1_27);
    }
  };
  let items = [obj, ];
  obj = {
    key: "getActivities",
    value() {
      return outer1_19;
    }
  };
  items[1] = obj;
  return callback(ActivityTrackingStore, items);
})(require("initialize").Store);
tmp2.displayName = "ActivityTrackingStore";
obj = {
  RUNNING_GAMES_CHANGE() {
    handleRunningGamesChange();
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    let length;
    if (c21) {
      return false;
    } else {
      const _Object = Object;
      const keys = Object.keys(obj);
      let num = 0;
      if (0 < keys.length) {
        do {
          let tmp3 = updateActivity;
          let tmp4 = obj;
          let tmp5 = updateActivity(obj[keys[num]]);
          num = num + 1;
          length = keys.length;
        } while (num < length);
      }
      handleRunningGamesChange(false);
      c21 = true;
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
      const Storage = require(587) /* Storage */.Storage;
      const result = Storage.set(ActivityTrackingStore, obj);
    }
  },
  ACTIVITY_UPDATE_FAIL: function handleActivityUpdateFail(arg0) {
    if (null == obj[arg0.applicationId]) {
      return false;
    } else {
      tmp.token = null;
      tmp.updatedAt = null;
      const Storage = require(587) /* Storage */.Storage;
      const result = Storage.set(ActivityTrackingStore, obj);
    }
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/ActivityTrackingStore.tsx");

export default tmp2;
