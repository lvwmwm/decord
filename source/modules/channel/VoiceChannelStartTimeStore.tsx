// Module ID: 9478
// Function ID: 73838
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4808, 664, 669, 566, 686, 2]

// Module 9478 (_isNativeReflectConstruct)
import closure_3 from "set";
import closure_4 from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

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
function _toTimestampMs(voiceStartTime) {
  return new Date(voiceStartTime * importDefault(664).Millis.SECOND).getTime();
}
function handleConnectionReset() {
  set.clear();
}
function handleGuildReset(guild) {
  set.delete(guild.guild.id);
}
let set = new Set();
let closure_10 = {};
let tmp3 = ((Store) => {
  class VoiceChannelStartTimeStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, VoiceChannelStartTimeStore);
      obj = outer1_6(VoiceChannelStartTimeStore);
      tmp2 = outer1_5;
      if (outer1_11()) {
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
  callback2(VoiceChannelStartTimeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getStartTime",
    value(guild_id) {
      if (null != guild_id) {
        if (null != guild_id.guild_id) {
          if (guild_id.type === VoiceChannelStartTimeStore(outer1_2[7]).ChannelTypes.GUILD_VOICE) {
            let tmp5;
            if (null != outer1_10[guild_id.guild_id]) {
              tmp5 = tmp4[guild_id.id];
            }
            return tmp5;
          }
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "hasRequestedStartTimes",
    value(arg0) {
      return outer1_9.has(arg0);
    }
  };
  items[2] = obj;
  return callback(VoiceChannelStartTimeStore, items);
})(require("initialize").Store);
tmp3.displayName = "VoiceChannelStartTimeStore";
tmp3 = new tmp3(require("dispatcher"), {
  GUILD_CREATE: handleGuildReset,
  GUILD_DELETE: handleGuildReset,
  CONNECTION_RESUMED: handleConnectionReset,
  CONNECTION_OPEN: handleConnectionReset,
  VOICE_CHANNEL_START_TIME_UPDATE: function handleVoiceChannelStartTimeUpdate(id) {
    let guildId;
    let voiceStartTime;
    ({ guildId, voiceStartTime } = id);
    if (null == dependencyMap[guildId]) {
      dependencyMap[guildId] = {};
    }
    let tmp2;
    if (null != voiceStartTime) {
      tmp2 = _toTimestampMs(voiceStartTime);
    }
    dependencyMap[guildId][id.id] = tmp2;
  },
  CHANNEL_INFO: function handleStartTimes(guildId) {
    let iter2;
    guildId = guildId.guildId;
    dependencyMap[guildId] = {};
    const tmp = _createForOfIteratorHelperLoose(guildId.channels);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let voiceStartTime = value.voiceStartTime;
        let tmp2 = dependencyMap;
        let tmp3;
        if (null != voiceStartTime) {
          let tmp4 = _toTimestampMs;
          tmp3 = _toTimestampMs(voiceStartTime);
        }
        dependencyMap[guildId][value.id] = tmp3;
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  FETCH_CHANNEL_INFO: function handleFetchChannelInfo(guildId) {
    set.add(guildId.guildId);
  }
});
let result = set.fileFinishedImporting("modules/channel/VoiceChannelStartTimeStore.tsx");

export default tmp3;
