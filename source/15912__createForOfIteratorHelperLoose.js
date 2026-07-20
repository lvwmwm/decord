// Module ID: 15912
// Function ID: 122004
// Name: _createForOfIteratorHelperLoose
// Dependencies: [0, 0, 0, 0]

// Module 15912 (_createForOfIteratorHelperLoose)
import result from "result";
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";

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
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = null;
let closure_13 = null;
let tmp2 = (arg0) => {
  class GuildRoomManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, GuildRoomManager);
      items1 = [...items];
      obj = closure_7(GuildRoomManager);
      tmp2 = closure_6;
      if (closure_16()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.actions = {
        VOICE_STATE_UPDATES(arg0) {
              return tmp2Result.handleVoiceStateUpdates(arg0);
            },
        EMBEDDED_ACTIVITY_LAUNCH_SUCCESS(arg0) {
              return tmp2Result.handleEmbeddedActivityLaunchSuccess(arg0);
            }
      };
      return tmp2Result;
    }
  }
  const importDefault = GuildRoomManager;
  callback3(GuildRoomManager, arg0);
  let obj = {
    key: "isExperimentEnabled",
    value(guildId, location) {
      let obj = GuildRoomManager(closure_2[9]);
      obj = { guildId, location };
      return obj.getCurrentConfig(obj).enabled;
    }
  };
  const items = [obj, , ];
  obj = { key: "handleVoiceStateUpdates" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  obj.value = function handleVoiceStateUpdates() {
    return callback(...arguments);
  };
  items[1] = obj;
  obj = {
    key: "handleEmbeddedActivityLaunchSuccess",
    value(channelId) {
      const self = this;
      if (null != channelId.channelId) {
        const channel = channel.getChannel(channelId.channelId);
        let isExperimentEnabledResult = null != channel;
        if (isExperimentEnabledResult) {
          isExperimentEnabledResult = self.isExperimentEnabled(channel.guild_id, "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS");
        }
        if (isExperimentEnabledResult) {
          isExperimentEnabledResult = visible.isVisible(channelId.channelId);
        }
        if (isExperimentEnabledResult) {
          const result = callback(closure_2[10]).guildRoomToggleLayout(channelId.channelId, true);
          const obj = callback(closure_2[10]);
        }
      }
    }
  };
  items[2] = obj;
  return callback2(GuildRoomManager, items);
}(importDefault(dependencyMap[11]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_rooms/GuildRoomManager.tsx");

export default tmp2;
