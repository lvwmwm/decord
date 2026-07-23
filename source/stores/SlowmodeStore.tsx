// Module ID: 6928
// Function ID: 55268
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 3758, 6929, 4015, 686, 664, 566, 2]

// Module 6928 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import canBypassSlowmodeHelper from "canBypassSlowmodeHelper";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

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
function setCooldown(channel, SendMessage, cooldownMs) {
  const _require = channel;
  let closure_1 = SendMessage;
  if (null != dependencyMap[SendMessage][channel.id]) {
    const timer = dependencyMap[SendMessage][channel.id].timer;
    timer.stop();
    const id = channel.id;
    delete tmp2[tmp];
  }
  let obj = _require(6929);
  if (!obj.canBypassSlowmode(channel, SendMessage)) {
    if (cooldownMs > 0) {
      const _Date = Date;
      const sum = cooldownMs + Date.now();
      dependencyMap = sum;
      obj = { rateLimitPerUser: channel.rateLimitPerUser, cooldownMs, cooldownEndTimestamp: sum };
      const Timeout = _require(4015).Timeout;
      const prototype = Timeout.prototype;
      const timeout = new Timeout();
      obj.timer = timeout;
      dependencyMap[SendMessage][channel.id] = obj;
      const timer2 = dependencyMap[SendMessage][channel.id].timer;
      timer2.start(1000, () => {
        let obj = SendMessage(sum[9]);
        obj = { type: "SLOWMODE_SET_COOLDOWN", channelId: id.id, slowmodeType: SendMessage, cooldownMs: Math.max(closure_2 - Date.now(), 0) };
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
      num = channel.rateLimitPerUser * importDefault(664).Millis.SECOND + 100;
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
let obj = { SendMessage: 0, [0]: "SendMessage", CreateThread: 1, [1]: "CreateThread" };
let closure_11 = { [obj.SendMessage]: {}, [obj.CreateThread]: {} };
let tmp2 = ((Store) => {
  class SlowmodeStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, SlowmodeStore);
      obj = outer1_6(SlowmodeStore);
      tmp2 = outer1_5;
      if (outer1_12()) {
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
  callback2(SlowmodeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getSlowmodeCooldownGuess",
    value(arg0, arg1) {
      let SendMessage = arg1;
      if (null == arg1) {
        SendMessage = outer1_10.SendMessage;
      }
      let num = 0;
      if (null != outer1_11[SendMessage][arg0]) {
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
})(require("initialize").Store);
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
    channels = channels.channels;
    const items = [obj.SendMessage, obj.CreateThread];
    const item = items.forEach((arg0) => {
      let iter3;
      const tmp = outer1_13(channels);
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp3 = outer1_11;
          let tmp4 = outer1_11[arg0][value.id];
          let rateLimitPerUser = value.rateLimitPerUser;
          let tmp5 = tmp2;
          if (null != tmp4) {
            tmp5 = tmp2;
            if (tmp4.rateLimitPerUser !== rateLimitPerUser) {
              let cooldownMs;
              let tmp6 = outer1_15;
              if (null != tmp4) {
                cooldownMs = tmp4.cooldownMs;
              }
              let num = 0;
              if (null != cooldownMs) {
                num = cooldownMs;
              }
              let tmp8 = outer1_1;
              let tmp9 = outer1_2;
              let tmp6Result = tmp6(value, arg0, Math.min(num, rateLimitPerUser * outer1_1(outer1_2[10]).Millis.SECOND));
              tmp5 = cooldownMs;
            }
          }
          iter3 = tmp();
          tmp2 = tmp5;
          iter2 = iter3;
        } while (!iter3.done);
      }
    });
  },
  LOGOUT: function clear() {
    const items = [obj.SendMessage, obj.CreateThread];
    let item = items.forEach((arg0) => {
      let closure_0 = arg0;
      const keys = Object.keys(outer1_11[arg0]);
      const item = keys.forEach((arg0) => {
        const timer = outer2_11[closure_0][arg0].timer;
        return timer.stop();
      });
      outer1_11[arg0] = {};
    });
  }
};
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/SlowmodeStore.tsx");

export default tmp2;
export const SlowmodeType = obj;
