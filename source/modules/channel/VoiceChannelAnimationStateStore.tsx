// Module ID: 12492
// Function ID: 95727
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12492 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
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
      closure_0 = tmp;
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
function clearAnimationTimer(arg0) {
  if (null != closure_10[arg0]) {
    const _clearTimeout = clearTimeout;
    clearTimeout(closure_10[arg0]);
    delete r0[r1];
  }
}
function scheduleTransitionToGentleAmbient(arg0) {
  let closure_0 = arg0;
  clearAnimationTimer(arg0);
  closure_10[arg0] = setTimeout(() => {
    if (null != closure_9[closure_0]) {
      const obj = {};
      const merged = Object.assign(tmp);
      obj["style"] = constants.GENTLE_AMBIENT;
      closure_9[arg0] = obj;
      closure_12.emitChange();
    }
    delete r1[r0];
  }, 2000);
}
function resetAllState() {
  let length;
  const keys = Object.keys(closure_10);
  let num = 0;
  if (0 < keys.length) {
    do {
      let _clearTimeout = clearTimeout;
      let tmp = closure_10;
      let clearTimeoutResult = clearTimeout(closure_10[keys[num]]);
      num = num + 1;
      length = keys.length;
    } while (num < length);
  }
  closure_10 = {};
  let closure_9 = {};
}
function updateChannelAnimationState(arg0, arg1) {
  let userCount;
  if (null != closure_9[arg0]) {
    userCount = tmp.userCount;
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
      closure_9[arg0] = obj;
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
      closure_9[arg0] = obj;
      scheduleTransitionToGentleAmbient(arg0);
      flag = true;
    }
  }
  if (0 === bound) {
    clearAnimationTimer(arg0);
    delete r4[r3];
    flag = true;
  } else {
    flag = null != tmp && bound !== num;
    if (flag) {
      obj = {};
      const merged = Object.assign(tmp);
      obj["userCount"] = bound;
      closure_9[arg0] = obj;
      flag = true;
    }
  }
}
function handleConnectionOpenOrLogout() {
  resetAllState();
  return true;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = importDefault(dependencyMap[6]);
let closure_7 = importDefault(dependencyMap[7]);
let obj = { GENTLE_AMBIENT: "GENTLE_AMBIENT", GENTLE_AMBIENT_WITH_INTRO: "GENTLE_AMBIENT_WITH_INTRO", HIGH_CONTRAST: "HIGH_CONTRAST" };
let closure_9 = {};
let closure_10 = {};
let closure_11 = null;
let tmp2 = (Store) => {
  class VoiceChannelAnimationStateStoreClass {
    constructor() {
      self = this;
      tmp = VoiceChannelAnimationStateStoreClass(this, VoiceChannelAnimationStateStoreClass);
      obj = closure_3(VoiceChannelAnimationStateStoreClass);
      tmp2 = closure_2;
      if (closure_13()) {
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
  let closure_0 = VoiceChannelAnimationStateStoreClass;
  callback2(VoiceChannelAnimationStateStoreClass, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_6);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getAnimationStyle",
    value(arg0) {
      let style;
      if (null != closure_9[arg0]) {
        style = tmp.style;
      }
      if (null == style) {
        style = constants.GENTLE_AMBIENT;
      }
      return style;
    }
  };
  items[1] = obj;
  obj = {
    key: "getUserCount",
    value(arg0) {
      let userCount;
      if (null != closure_9[arg0]) {
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
}(importDefault(dependencyMap[8]).Store);
tmp2.displayName = "VoiceChannelAnimationStateStore";
obj = {
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    let iter3;
    const guildId = guildId.getGuildId();
    let tmp2 = guildId !== closure_11;
    if (tmp2) {
      tmp2 = null != guildId;
    }
    if (tmp2) {
      closure_11 = guildId;
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
            let tmp5 = tmp9;
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
        let tmp6 = tmp8;
        iter2 = iter3;
      } while (!iter3.done);
    }
    const entries = Object.entries(obj);
    let flag = false;
    let num3 = 0;
    let flag2 = false;
    if (0 < entries.length) {
      do {
        let tmp11 = closure_5;
        let tmp12 = closure_5(entries[num3], 2);
        let tmp13 = closure_19;
        if (closure_19(tmp12[0], tmp12[1])) {
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
    if (guildId === closure_11) {
      return false;
    } else if (null == guildId) {
      return false;
    } else {
      closure_11 = guildId;
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
tmp2 = new tmp2(importDefault(dependencyMap[9]), obj);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/channel/VoiceChannelAnimationStateStore.tsx");

export default tmp2;
export const AnimationStyle = obj;
