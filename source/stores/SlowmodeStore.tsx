// Module ID: 6923
// Function ID: 55223
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6923 (_isNativeReflectConstruct)
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
function setCooldown(channel, SendMessage, cooldownMs) {
  SendMessage = channel;
  const importDefault = SendMessage;
  if (null != closure_11[SendMessage][channel.id]) {
    const timer = closure_11[SendMessage][channel.id].timer;
    timer.stop();
    const id = channel.id;
    delete r5[r0];
  }
  let obj = SendMessage(dependencyMap[7]);
  if (!obj.canBypassSlowmode(channel, SendMessage)) {
    if (cooldownMs > 0) {
      const _Date = Date;
      const sum = cooldownMs + Date.now();
      const dependencyMap = sum;
      obj = { rateLimitPerUser: channel.rateLimitPerUser, cooldownMs, cooldownEndTimestamp: sum };
      const Timeout = SendMessage(dependencyMap[8]).Timeout;
      const prototype = Timeout.prototype;
      const timeout = new Timeout();
      obj.timer = timeout;
      closure_11[SendMessage][channel.id] = obj;
      const timer2 = closure_11[SendMessage][channel.id].timer;
      timer2.start(1000, () => {
        let obj = arg1(sum[9]);
        obj = { type: "SLOWMODE_SET_COOLDOWN", channelId: arg0.id, slowmodeType: arg1, cooldownMs: Math.max(sum - Date.now(), 0) };
        obj.dispatch(obj);
      }, true);
    }
  }
}
function resetCooldown(channelId, SendMessage) {
  const channel = store.getChannel(channelId);
  if (null == channel) {
    return false;
  } else {
    let num = 0;
    if (0 !== channel.rateLimitPerUser) {
      num = channel.rateLimitPerUser * importDefault(dependencyMap[10]).Millis.SECOND + 100;
    }
    setCooldown(channel, SendMessage, num);
  }
}
function handleUploadCancel(channelId) {
  const channel = store.getChannel(channelId.channelId);
  if (null != channel) {
    setCooldown(channel, obj.SendMessage, 0);
  }
  return null != channel;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let obj = { SendMessage: 0, [0]: "SendMessage", CreateThread: 1, [1]: "CreateThread" };
let closure_11 = { [obj.SendMessage]: {}, [obj.CreateThread]: {} };
let tmp2 = (Store) => {
  class SlowmodeStore {
    constructor() {
      self = this;
      tmp = closure_3(this, SlowmodeStore);
      obj = closure_6(SlowmodeStore);
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
  const arg1 = SlowmodeStore;
  callback2(SlowmodeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getSlowmodeCooldownGuess",
    value(arg0, arg1) {
      let SendMessage = arg1;
      if (null == arg1) {
        SendMessage = SendMessage.SendMessage;
      }
      let num = 0;
      if (null != closure_11[SendMessage][arg0]) {
        num = tmp3.cooldownMs;
      }
      return num;
    }
  };
  items[1] = obj;
  obj = {
    key: "isChannelOnCooldown",
    value(id) {
      return this.getSlowmodeCooldownGuess(id.id, arg1) > 0 && id.rateLimitPerUser > 0;
    }
  };
  items[2] = obj;
  return callback(SlowmodeStore, items);
}(importDefault(dependencyMap[11]).Store);
tmp2.displayName = "SlowmodeStore";
obj = {
  SLOWMODE_RESET_COOLDOWN: function handleSlowmodeResetCooldown(channelId) {
    return resetCooldown(channelId.channelId, channelId.slowmodeType);
  },
  SLOWMODE_SET_COOLDOWN: function handleSlowmodeSetCooldown(cooldownMs) {
    cooldownMs = cooldownMs.cooldownMs;
    const channel = store.getChannel(cooldownMs.channelId);
    if (null == channel) {
      return false;
    } else {
      let num = 0;
      if (0 !== cooldownMs) {
        num = cooldownMs + 100;
      }
      setCooldown(channel, cooldownMs.slowmodeType, num);
    }
  },
  UPLOAD_START: function handleUploadStart(channelId) {
    return resetCooldown(channelId.channelId, obj.SendMessage);
  },
  UPLOAD_FAIL: handleUploadCancel,
  UPLOAD_CANCEL_REQUEST: handleUploadCancel,
  CHANNEL_UPDATES: function handleUpdateCooldown(channels) {
    const arg1 = channels.channels;
    const items = [obj.SendMessage, obj.CreateThread];
    const item = items.forEach((arg0) => {
      let iter3;
      const tmp = callback(channels);
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp3 = closure_11;
          let tmp4 = closure_11[arg0][value.id];
          let rateLimitPerUser = value.rateLimitPerUser;
          let tmp5 = tmp2;
          if (null != tmp4) {
            tmp5 = tmp2;
            if (tmp4.rateLimitPerUser !== rateLimitPerUser) {
              let cooldownMs;
              let tmp6 = closure_15;
              if (null != tmp4) {
                cooldownMs = tmp4.cooldownMs;
              }
              let num = 0;
              if (null != cooldownMs) {
                num = cooldownMs;
              }
              let tmp8 = closure_1;
              let tmp9 = closure_2;
              let tmp6Result = tmp6(value, arg0, Math.min(num, rateLimitPerUser * closure_1(closure_2[10]).Millis.SECOND));
              tmp5 = cooldownMs;
            }
          }
          iter3 = tmp();
          let tmp2 = tmp5;
          iter2 = iter3;
        } while (!iter3.done);
      }
    });
  },
  LOGOUT: function clear() {
    const items = [obj.SendMessage, obj.CreateThread];
    const item = items.forEach((arg0) => {
      const keys = Object.keys(closure_11[arg0]);
      const item = keys.forEach((arg0) => {
        const timer = closure_11[closure_0][arg0].timer;
        return timer.stop();
      });
      closure_11[arg0] = {};
    });
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[9]), obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("stores/SlowmodeStore.tsx");

export default tmp2;
export const SlowmodeType = obj;
