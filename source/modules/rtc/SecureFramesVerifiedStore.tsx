// Module ID: 8871
// Function ID: 69916
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 8880, 8886, 65, 6, 7, 15, 17, 18, 8880, 8881, 8888, 2]

// Module 8871 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import asciiToBase16 from "asciiToBase16";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _toConsumableArray from "_toConsumableArray";
import closure_10 from "_classCallCheck";
import closure_11 from "_defineProperties";
import { RTCConnectionStates } from "_possibleConstructorReturn";
import result2 from "result2";

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
function computeStreamVerifications() {
  const allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
  return allActiveStreamKeys.reduce((arg0, streamKey) => {
    const tmp = true === closure_13.get(callback(closure_1[12]).decodeStreamKey(streamKey).ownerId);
    const tmp2 = store.get(streamKey) !== tmp;
    const result = store.set(streamKey, tmp);
    let tmp4 = tmp2;
    if (!tmp2) {
      tmp4 = arg0;
    }
    return tmp4;
  }, false);
}
function computeCallVerification() {
  let userIds = authStore.getUserIds();
  if (null == userIds) {
    const _Set = Set;
    userIds = new Set();
  }
  const id = store.getId();
  const tmp6 = _createForOfIteratorHelperLoose(userIds);
  const iter = tmp6();
  let iter2 = iter;
  let flag = true;
  if (!iter.done) {
    while (true) {
      let value = iter2.value;
      if (id === value) {
        let iter3 = tmp6();
        iter2 = iter3;
        flag = true;
        if (iter3.done) {
          break;
        }
      } else {
        let tmp7 = map;
        flag = false;
        if (true !== map.get(value)) {
          break;
        }
      }
      break;
    }
  }
  let closure_15 = flag;
  return flag !== closure_15;
}
function handleUserUpdate(userId) {
  userId = userId.userId;
  if (store.getId() === userId) {
    return false;
  } else {
    const secureFramesRosterMapEntry = authStore.getSecureFramesRosterMapEntry(userId);
    let flag = false;
    if (null != secureFramesRosterMapEntry) {
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(secureFramesRosterMapEntry);
      let isKeyVerifiedResult = keyVerified2.isKeyVerified(userId, uint8Array);
      if (!isKeyVerifiedResult) {
        isKeyVerifiedResult = keyVerified.isKeyVerified(userId, uint8Array);
      }
      const items = [authStore, _toConsumableArray];
      if (isKeyVerifiedResult) {
        isKeyVerifiedResult = !obj.getIsSecureFramesKeyInconsistent(userId, items);
      }
      flag = isKeyVerifiedResult !== map.get(userId);
      const result = map.set(userId, isKeyVerifiedResult);
      const obj = arg1(dependencyMap[11]);
    }
    const tmp18 = computeStreamVerifications();
    if (!flag) {
      flag = tmp18;
    }
    if (!flag) {
      flag = tmp20;
    }
    return flag;
  }
}
function handleReset() {
  map.clear();
  map1.clear();
  let closure_15 = false;
}
const map = new Map();
const map1 = new Map();
let closure_15 = false;
let closure_16 = null;
let tmp4 = (Store) => {
  class SecureFramesVerifiedStore {
    constructor() {
      self = this;
      tmp = _classCallCheck(this, SecureFramesVerifiedStore);
      obj = _getPrototypeOf(SecureFramesVerifiedStore);
      tmp2 = _possibleConstructorReturn;
      if (closure_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = _getPrototypeOf;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SecureFramesVerifiedStore;
  callback2(SecureFramesVerifiedStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(asciiToBase16, _isNativeReflectConstruct, _toConsumableArray, closure_10, closure_11);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isCallVerified",
    value() {
      return closure_15;
    }
  };
  items[1] = obj;
  obj = {
    key: "isStreamVerified",
    value(arg0) {
      return closure_14.get(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isUserVerified",
    value(arg0) {
      return closure_13.get(arg0);
    }
  };
  return callback(SecureFramesVerifiedStore, items);
}(require("number").Store);
tmp4.displayName = "SecureFramesVerifiedStore";
tmp4 = new tmp4(require("getLens"), {
  CONNECTION_OPEN: handleReset,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (channelId === closure_16) {
      return false;
    } else {
      closure_16 = channelId;
      handleReset();
    }
  },
  RTC_CONNECTION_STATE: function handleRtcConnectionState(state) {
    let context;
    let streamKey;
    ({ streamKey, context } = state);
    if (state.state !== RTCConnectionStates.DISCONNECTED) {
      return false;
    } else if (arg1(dependencyMap[13]).MediaEngineContextTypes.STREAM === context) {
      let tmp8 = null != streamKey;
      if (tmp8) {
        map1.delete(streamKey);
        tmp8 = computeCallVerification();
      }
      return tmp8;
    } else if (arg1(dependencyMap[13]).MediaEngineContextTypes.DEFAULT === context) {
      handleReset();
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function handleBulkUserUpdate(userIds) {
    userIds = userIds.userIds;
    const id = store.getId();
    let reduced = userIds.reduce((arg0, userId) => {
      let tmp = arg0;
      if (closure_0 !== userId) {
        const obj = { userId };
        const tmp3 = !callback(obj);
        let tmp4 = !tmp3;
        if (tmp3) {
          tmp4 = arg0;
        }
        tmp = tmp4;
      }
      return tmp;
    }, false);
    const tmp2 = computeStreamVerifications();
    if (!reduced) {
      reduced = tmp2;
    }
    if (!reduced) {
      reduced = tmp3;
    }
    return reduced;
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: handleUserUpdate,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: handleUserUpdate,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: handleUserUpdate,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: handleUserUpdate,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: handleUserUpdate
});
const result = result2.fileFinishedImporting("modules/rtc/SecureFramesVerifiedStore.tsx");

export default tmp4;
