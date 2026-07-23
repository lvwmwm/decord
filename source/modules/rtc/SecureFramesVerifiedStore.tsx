// Module ID: 8879
// Function ID: 69981
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 4202, 4216, 8880, 8881, 653, 8897, 4194, 4227, 566, 686, 2]

// Module 8879 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import dispatcher from "dispatcher";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { RTCConnectionStates } from "ME";

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
function computeStreamVerifications() {
  allActiveStreamKeys = allActiveStreamKeys.getAllActiveStreamKeys();
  return allActiveStreamKeys.reduce((arg0, streamKey) => {
    const tmp = true === outer1_13.get(outer1_0(outer1_1[12]).decodeStreamKey(streamKey).ownerId);
    const tmp2 = outer1_14.get(streamKey) !== tmp;
    const result = outer1_14.set(streamKey, tmp);
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
  return flag !== flag;
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
      const items = [authStore, closure_9];
      if (isKeyVerifiedResult) {
        isKeyVerifiedResult = !obj.getIsSecureFramesKeyInconsistent(userId, items);
      }
      flag = isKeyVerifiedResult !== map.get(userId);
      const result = map.set(userId, isKeyVerifiedResult);
      obj = require(8897) /* _createForOfIteratorHelperLoose */;
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
  let c15 = false;
}
const map = new Map();
const map1 = new Map();
let c15 = false;
let c16 = null;
let tmp4 = ((Store) => {
  class SecureFramesVerifiedStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, SecureFramesVerifiedStore);
      obj = outer1_5(SecureFramesVerifiedStore);
      tmp2 = outer1_4;
      if (outer1_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SecureFramesVerifiedStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_8, outer1_9, outer1_10, outer1_11);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isCallVerified",
    value() {
      return outer1_15;
    }
  };
  items[1] = obj;
  obj = {
    key: "isStreamVerified",
    value(arg0) {
      return outer1_14.get(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isUserVerified",
    value(arg0) {
      return outer1_13.get(arg0);
    }
  };
  return callback(SecureFramesVerifiedStore, items);
})(require("initialize").Store);
tmp4.displayName = "SecureFramesVerifiedStore";
tmp4 = new tmp4(require("dispatcher"), {
  CONNECTION_OPEN: handleReset,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (channelId === channelId) {
      return false;
    } else {
      handleReset();
    }
  },
  RTC_CONNECTION_STATE: function handleRtcConnectionState(state) {
    let context;
    let streamKey;
    ({ streamKey, context } = state);
    if (state.state !== RTCConnectionStates.DISCONNECTED) {
      return false;
    } else if (require(4227) /* getMediaEngineImpl */.MediaEngineContextTypes.STREAM === context) {
      let tmp8 = null != streamKey;
      if (tmp8) {
        map1.delete(streamKey);
        tmp8 = computeCallVerification();
      }
      return tmp8;
    } else if (require(4227) /* getMediaEngineImpl */.MediaEngineContextTypes.DEFAULT === context) {
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
        const tmp3 = !outer1_22(obj);
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/rtc/SecureFramesVerifiedStore.tsx");

export default tmp4;
