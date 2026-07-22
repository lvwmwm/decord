// Module ID: 16383
// Function ID: 126467
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 16383 (_createForOfIteratorHelperLoose)
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
function getDeliveredNotifications() {
  return _getDeliveredNotifications(...arguments);
}
function _getDeliveredNotifications() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _getDeliveredNotifications = obj;
  return obj(...arguments);
}
function updateAndClearStaleNotifications() {
  return _updateAndClearStaleNotifications(...arguments);
}
function _updateAndClearStaleNotifications() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _updateAndClearStaleNotifications = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const NativeModules = arg1(dependencyMap[6]).NativeModules;
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const AnalyticEvents = arg1(dependencyMap[9]).AnalyticEvents;
let importDefaultResult = importDefault(dependencyMap[10]);
importDefaultResult = new importDefaultResult("NativeNotificationsManager");
let closure_14 = [];
let tmp4 = (arg0) => {
  class NativeNotificationsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp2 = closure_4(this, NativeNotificationsManager);
      items1 = [...items];
      obj = closure_6(NativeNotificationsManager);
      tmp3 = closure_5;
      if (closure_17()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp3Result = tmp3(self, constructResult);
      NativeNotificationsManager = tmp3Result;
      tmp3Result.handleAck = (channelId) => {
        channelId = channelId.channelId;
        if (obj.isIOS()) {
          const result = callback(closure_2[12]).setApplicationIconBadgeNumber(totalMentionCount.getTotalMentionCount());
          const obj2 = callback(closure_2[12]);
        }
        if (null != channelId) {
          const DCDNotificationManager = closure_9.DCDNotificationManager;
          if (null != DCDNotificationManager) {
            const result1 = DCDNotificationManager.clearNotificationsForChannel(channelId);
          }
        }
      };
      // CreateGeneratorClosureLongIndex (0x67)
      tmp3Result.handlePostConnectionOpen = closure_8(tmp);
      tmp3Result.handleSetCallNotificationExperiment = () => {
        if (!obj.isIOS()) {
          if (null != closure_9.DCDNotificationManager.setShowMissedCallNotifications) {
            const DCDNotificationManager = closure_9.DCDNotificationManager;
            const result = DCDNotificationManager.setShowMissedCallNotifications(true);
          }
          if (null != closure_9.DCDNotificationManager.setShowFullscreenCallUI) {
            const DCDNotificationManager2 = closure_9.DCDNotificationManager;
            const result1 = DCDNotificationManager2.setShowFullscreenCallUI(true);
          }
        }
      };
      tmp3Result.updateAndClearStaleNotifications = () => {
        callback2();
      };
      tmp3Result.actions = { MESSAGE_ACK: tmp3Result.handleAck, CHANNEL_SELECT: tmp3Result.handleAck, POST_CONNECTION_OPEN: tmp3Result.handlePostConnectionOpen, EXPERIMENT_OVERRIDE_BUCKET: tmp3Result.handleSetCallNotificationExperiment, EXPERIMENTS_FETCH_SUCCESS: tmp3Result.handleSetCallNotificationExperiment, APP_STATE_UPDATE: tmp3Result.updateAndClearStaleNotifications };
      return tmp3Result;
    }
  }
  const arg1 = NativeNotificationsManager;
  callback2(NativeNotificationsManager, arg0);
  return callback(NativeNotificationsManager);
}(importDefault(dependencyMap[17]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/notifications/native/NativeNotificationsManager.tsx");

export default tmp4;
