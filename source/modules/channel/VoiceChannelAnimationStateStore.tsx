// Module ID: 12611
// Function ID: 97911
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 3947, 4146, 566, 686, 2]

// Module 12611 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let _isNativeReflectConstruct = iterable;
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
      _isNativeReflectConstruct = tmp;
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
function clearAnimationTimer(arg0) {
  if (null != dependencyMap[arg0]) {
    const _clearTimeout = clearTimeout;
    clearTimeout(dependencyMap[arg0]);
    delete tmp[tmp2];
  }
}
function scheduleTransitionToGentleAmbient(arg0) {
  let _isNativeReflectConstruct = arg0;
  clearAnimationTimer(arg0);
  closure_10[arg0] = setTimeout(() => {
    if (null != outer1_9[_isNativeReflectConstruct]) {
      const obj = {};
      const merged = Object.assign(tmp3);
      obj["style"] = outer1_8.GENTLE_AMBIENT;
      outer1_9[_isNativeReflectConstruct] = obj;
      outer1_12.emitChange();
    }
    delete tmp2[tmp];
  }, 2000);
}
function resetAllState() {
  let length;
  const keys = Object.keys(dependencyMap);
  let num = 0;
  if (0 < keys.length) {
    do {
      let _clearTimeout = clearTimeout;
      let tmp = dependencyMap;
      let clearTimeoutResult = clearTimeout(dependencyMap[keys[num]]);
      num = num + 1;
      length = keys.length;
    } while (num < length);
  }
  dependencyMap = {};
  let closure_9 = {};
}
function updateChannelAnimationState(arg0, arg1) {
  let userCount;
  if (null != table[arg0]) {
    userCount = tmp3.userCount;
  }
  let num = 0;
  if (null != userCount) {
    num = userCount;
  }
  const bound = Math.max(0, num + arg1);
  if (0 === num) {
    if (bound > 0) {
      let obj = {};
      obj.style = obj.GENTLE_AMBIENT_WITH_INTRO;
      obj.userCount = bound;
      table[arg0] = obj;
      scheduleTransitionToGentleAmbient(arg0);
      let flag = true;
    }
    return flag;
  }
  if (num > 0) {
    if (bound > num) {
      obj = {};
      obj.style = obj.HIGH_CONTRAST;
      obj.userCount = bound;
      table[arg0] = obj;
      scheduleTransitionToGentleAmbient(arg0);
      flag = true;
    }
  }
  if (0 === bound) {
    clearAnimationTimer(arg0);
    delete tmp2[tmp];
    flag = true;
  } else {
    flag = null != tmp3 && bound !== num;
    if (flag) {
      obj = {};
      const merged = Object.assign(tmp3);
      obj["userCount"] = bound;
      table[arg0] = obj;
      flag = true;
    }
  }
}
function handleConnectionOpenOrLogout() {
  resetAllState();
  return true;
}
let obj = { GENTLE_AMBIENT: "GENTLE_AMBIENT", GENTLE_AMBIENT_WITH_INTRO: "GENTLE_AMBIENT_WITH_INTRO", HIGH_CONTRAST: "HIGH_CONTRAST" };
let closure_9 = {};
let closure_10 = {};
let c11 = null;
let tmp2 = ((Store) => {
  class VoiceChannelAnimationStateStoreClass {
    constructor() {
      self = this;
      tmp = VoiceChannelAnimationStateStoreClass(this, VoiceChannelAnimationStateStoreClass);
      obj = outer1_3(VoiceChannelAnimationStateStoreClass);
      tmp2 = outer1_2;
      if (outer1_13()) {
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
  callback2(VoiceChannelAnimationStateStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_6);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getAnimationStyle",
    value(arg0) {
      let style;
      if (null != outer1_9[arg0]) {
        style = tmp.style;
      }
      if (null == style) {
        style = outer1_8.GENTLE_AMBIENT;
      }
      return style;
    }
  };
  items[1] = obj;
  obj = {
    key: "getUserCount",
    value(arg0) {
      let userCount;
      if (null != outer1_9[arg0]) {
        userCount = tmp.userCount;
      }
      let num = 0;
      if (null != userCount) {
        num = userCount;
      }
      return num;
    }
  };
  items[2] = obj;
  return callback(VoiceChannelAnimationStateStoreClass, items);
})(require("initialize").Store);
tmp2.displayName = "VoiceChannelAnimationStateStore";
obj = {
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    let iter3;
    guildId = guildId.getGuildId();
    let tmp2 = guildId !== guildId;
    if (tmp2) {
      tmp2 = null != guildId;
    }
    const obj = {};
    const tmp4 = _createForOfIteratorHelperLoose(voiceStates.voiceStates);
    const iter = tmp4();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp7 = tmp5;
        let tmp8 = tmp6;
        if (value.guildId === guildId) {
          if (null != value.oldChannelId) {
            let tmp9 = obj[value.oldChannelId];
            let num = 0;
            if (null != tmp9) {
              num = tmp9;
            }
            obj[value.oldChannelId] = num - 1;
            tmp5 = tmp9;
          }
          tmp7 = tmp5;
          tmp8 = tmp6;
          if (null != value.channelId) {
            let tmp10 = obj[value.channelId];
            let num2 = 0;
            if (null != tmp10) {
              num2 = tmp10;
            }
            obj[value.channelId] = num2 + 1;
            tmp7 = tmp5;
            tmp8 = tmp10;
          }
        }
        iter3 = tmp4();
        tmp5 = tmp7;
        tmp6 = tmp8;
        iter2 = iter3;
      } while (!iter3.done);
    }
    const entries = Object.entries(obj);
    let flag = false;
    let num3 = 0;
    let flag2 = false;
    if (0 < entries.length) {
      do {
        let tmp11 = callback3;
        let tmp12 = callback3(entries[num3], 2);
        let tmp13 = updateChannelAnimationState;
        if (updateChannelAnimationState(tmp12[0], tmp12[1])) {
          flag = true;
        }
        num3 = num3 + 1;
        flag2 = flag;
      } while (num3 < entries.length);
    }
    return flag2;
  },
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    if (guildId === guildId) {
      return false;
    } else if (null == guildId) {
      return false;
    } else {
      resetAllState();
      let obj = {};
      const _Object2 = Object;
      const values = Object.values(voiceStates.getVoiceStates(guildId));
      for (let num2 = 0; num2 < values.length; num2 = num2 + 1) {
        let tmp = values[num2];
        if (null != tmp.channelId) {
          let tmp2 = obj[tmp.channelId];
          let num = 0;
          if (null != tmp2) {
            num = tmp2;
          }
          obj[tmp.channelId] = num + 1;
          let tmp3 = tmp2;
        }
      }
      const _Object = Object;
      const entries = Object.entries(obj);
      for (let num4 = 0; num4 < entries.length; num4 = num4 + 1) {
        let tmp4 = callback3;
        let tmp5 = callback3(entries[num4], 2);
        let tmp7 = tmp5[1];
        if (tmp7 > 0) {
          let tmp8 = closure_9;
          obj = {};
          let tmp9 = obj;
          obj.style = obj.GENTLE_AMBIENT;
          obj.userCount = tmp7;
          closure_9[tmp6] = obj;
        }
      }
      return true;
    }
  },
  CONNECTION_OPEN: handleConnectionOpenOrLogout,
  LOGOUT: handleConnectionOpenOrLogout
};
tmp2 = new tmp2(require("dispatcher"), obj);
let closure_12 = tmp2;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/channel/VoiceChannelAnimationStateStore.tsx");

export default tmp2;
export const AnimationStyle = obj;
