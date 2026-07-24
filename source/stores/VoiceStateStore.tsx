// Module ID: 4146
// Function ID: 34881
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 4147, 653, 4148, 22, 1553, 566, 686, 2]

// Module 4146 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import closure_11 from "_isNativeReflectConstruct";
import { ME } from "ME";
import { VoicePlatforms } from "ParticipantTypes";
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
function makeParticipantPlatformKey(userId, channelId) {
  return "" + userId + ":" + channelId;
}
function getRecords(closure_19, channelId) {
  let tmp = closure_19[channelId];
  if (null == tmp) {
    const obj = {};
    closure_19[channelId] = obj;
    tmp = obj;
  }
  return tmp;
}
function clearCall(arg0) {
  let closure_0 = arg0;
  let obj = dependencyMap[ME];
  if (null == obj) {
    obj = {};
  }
  importDefault(22).each(obj, (channelId) => {
    if (channelId.channelId === closure_0) {
      outer1_30(outer1_12, arg1, () => null);
    }
  });
}
function getOrCreateUsersWithVideo(guildId) {
  let set = map.get(guildId);
  if (null == set) {
    const _Set = Set;
    set = new Set();
  }
  return set;
}
function updateVoiceState(guildId, closure_3, arg2) {
  let tmp5 = guildId;
  let tmp8 = guildId;
  if (null == guildId) {
    tmp8 = ME;
  }
  const tmp6Result = getRecords(closure_16, tmp8);
  const tmp11 = arg2(tmp6Result[closure_3]);
  if (tmp6Result[closure_3] === tmp11) {
    const items = [false, tmp11, tmp10];
    let items1 = items;
  } else {
    if (null != tmp10) {
      delete tmp[tmp2];
      if (null != tmp10.channelId) {
        getRecords(closure_19, tmp10.channelId);
        delete tmp3[tmp2];
        getRecords(closure_20, tmp10.channelId);
        delete tmp3[tmp2];
      }
      if (null != tmp10.sessionId) {
        getRecords(closure_21, closure_3);
        const sessionId = tmp10.sessionId;
        delete tmp4[tmp3];
      }
      let tmp20 = tmp5;
      if (null == tmp5) {
        tmp20 = ME;
      }
      const obj = getOrCreateUsersWithVideo(tmp20);
      if (obj.has(closure_3)) {
        const _Set = Set;
        const set = new Set(obj);
        set.delete(closure_3);
        if (0 === set.size) {
          map.delete(tmp20);
        } else {
          const result = map.set(tmp20, set);
        }
      }
    }
    if (null != tmp11) {
      tmp6Result[closure_3] = tmp11;
      if (null != tmp11.channelId) {
        getRecords(closure_19, tmp11.channelId)[closure_3] = tmp11;
        if (tmp11.selfVideo) {
          getRecords(closure_20, tmp11.channelId)[closure_3] = tmp11;
          if (null == tmp5) {
            tmp5 = ME;
          }
          const obj3 = getOrCreateUsersWithVideo(tmp5);
          if (!obj3.has(closure_3)) {
            const _Set2 = Set;
            const set1 = new Set(obj3);
            set1.add(closure_3);
            const result1 = map.set(tmp5, set1);
          }
        }
      }
      if (null != tmp11.sessionId) {
        getRecords(closure_21, closure_3)[tmp11.sessionId] = tmp11;
      }
    }
    items1 = [true, tmp11, tmp10];
  }
  return items1;
}
function mergeVoiceState(guildId, value) {
  let closure_0 = value;
  return updateVoiceState(guildId, value.userId, (merge) => {
    if (null == value.channelId) {
      return null;
    } else {
      const obj = {};
      ({ channelId: obj.channelId, deaf: obj.deaf, mute: obj.mute, requestToSpeakTimestamp: obj.requestToSpeakTimestamp, selfDeaf: obj.selfDeaf, selfMute: obj.selfMute, selfStream: obj.selfStream, selfVideo: obj.selfVideo, sessionId: obj.sessionId, suppress: obj.suppress, userId: obj.userId, discoverable: obj.discoverable, connectedAt: obj.connectedAt } = value);
      if (null != merge) {
        let mergeResult = merge.merge(obj);
      } else {
        const prototype = outer1_11.prototype;
        mergeResult = new outer1_11(obj);
      }
      return mergeResult;
    }
  });
}
function handleGuildCreateOrDelete(guild) {
  guild = guild.guild;
  const item = importDefault(22).forEach(dependencyMap[guild.id], (userId) => {
    outer1_30(guild.id, userId.userId, () => null);
  });
  delete tmp2[tmp];
}
let c14 = 0;
let c15 = 0;
let closure_16 = {};
let set = new Set();
const map = new Map();
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let closure_22 = {};
let tmp4 = ((Store) => {
  class VoiceStateStore {
    constructor() {
      self = this;
      tmp = outer1_5(this, VoiceStateStore);
      obj = outer1_8(VoiceStateStore);
      tmp2 = outer1_7;
      if (outer1_23()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_8;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_8(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(VoiceStateStore, Store);
  let obj = {
    key: "getAllVoiceStates",
    value() {
      return outer1_16;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getVoiceStateVersion",
    value() {
      return outer1_15;
    }
  };
  items[1] = obj;
  obj = {
    key: "getVoiceStates",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = outer1_12;
      }
      return outer1_27(outer1_16, tmp);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getVoiceStatesForChannel",
    value(arg0) {
      return outer1_27(outer1_19, arg0);
    }
  };
  items[4] = {
    key: "getVideoVoiceStatesForChannel",
    value(arg0) {
      return outer1_27(outer1_20, arg0);
    }
  };
  items[5] = {
    key: "getVoiceState",
    value(closure_0) {
      return this.getVoiceStates(closure_0)[arg1];
    }
  };
  items[6] = {
    key: "getDiscoverableVoiceState",
    value(arg0, arg1) {
      const voiceState = this.getVoiceState(arg0, arg1);
      let tmp2 = null;
      if (null != voiceState) {
        tmp2 = null;
        if (false !== voiceState.discoverable) {
          tmp2 = voiceState;
        }
      }
      return tmp2;
    }
  };
  items[7] = {
    key: "getVoiceStateForChannel",
    value(arg0) {
      let tmp = arg1;
      if (arg1 === undefined) {
        tmp = outer1_3;
      }
      const tmp2 = outer1_27(outer1_19, arg0);
      let tmp3;
      if (null != tmp2) {
        tmp3 = tmp2[tmp];
      }
      return tmp3;
    }
  };
  items[8] = {
    key: "getVoiceStateForUser",
    value(arg0) {
      return Object.values(outer1_27(outer1_21, arg0))[0];
    }
  };
  items[9] = {
    key: "getDiscoverableVoiceStateForUser",
    value(arg0) {
      const values = Object.values(outer1_27(outer1_21, arg0));
      return values.find((discoverable) => false !== discoverable.discoverable);
    }
  };
  items[10] = {
    key: "getVoiceStateForSession",
    value(arg0, arg1) {
      let tmp = null;
      if (null != arg1) {
        let tmp4;
        const tmp6 = outer1_27(outer1_21, arg0);
        if (null != tmp6) {
          tmp4 = tmp6[arg1];
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[11] = {
    key: "getUserVoiceChannelId",
    value(arg0, arg1) {
      const voiceState = this.getVoiceState(arg0, arg1);
      let channelId;
      if (null != voiceState) {
        channelId = voiceState.channelId;
      }
      return channelId;
    }
  };
  items[12] = {
    key: "getCurrentClientVoiceChannelId",
    value(arg0) {
      const voiceState = this.getVoiceState(arg0, outer1_3);
      let channelId = null;
      if (null != voiceState) {
        channelId = null;
        if (null != outer1_4) {
          channelId = null;
          if (voiceState.sessionId === outer1_4) {
            channelId = voiceState.channelId;
          }
        }
      }
      return channelId;
    }
  };
  items[13] = {
    key: "getUsersWithVideo",
    value(arg0) {
      let value = outer1_18.get(arg0);
      if (null == value) {
        value = outer1_17;
      }
      return value;
    }
  };
  items[14] = {
    key: "isCurrentClientInVoiceChannel",
    value() {
      let tmp = null != outer1_4;
      if (tmp) {
        let tmp5;
        if (null != outer1_21[outer1_3]) {
          tmp5 = tmp4[outer1_4];
        }
        tmp = null != tmp5;
      }
      return tmp;
    }
  };
  items[15] = {
    key: "isInChannel",
    value(arg0) {
      let tmp = arg1;
      const self = this;
      if (arg1 === undefined) {
        tmp = outer1_3;
      }
      if (null == arg0) {
        return false;
      } else {
        const voiceStateForChannel = self.getVoiceStateForChannel(arg0, tmp);
        let tmp3 = null != voiceStateForChannel;
        if (tmp3) {
          let tmp5 = tmp !== outer1_3;
          if (!tmp5) {
            let tmp7 = null != outer1_4;
            if (tmp7) {
              tmp7 = voiceStateForChannel.sessionId === outer1_4;
            }
            tmp5 = tmp7;
          }
          tmp3 = tmp5;
        }
        return tmp3;
      }
    }
  };
  items[16] = {
    key: "hasVideo",
    value(arg0) {
      return Object.values(outer1_27(outer1_20, arg0)).length > 0;
    }
  };
  items[17] = {
    key: "getVoicePlatformForChannel",
    value(arg0, arg1) {
      let tmp = null != outer1_4;
      if (tmp) {
        let channelId;
        if (null != outer1_21[outer1_3]) {
          if (null != tmp4[outer1_4]) {
            channelId = tmp7.channelId;
          }
        }
        tmp = channelId;
      }
      if (arg1 === outer1_3) {
        if (arg0 === tmp) {
          VoiceStateStore(outer1_2[10]).isMetaQuest() ? outer1_13.QUEST : outer1_13.MOBILE;
          const obj = VoiceStateStore(outer1_2[10]);
        }
      }
      return outer1_22[outer1_26(undefined, arg1, arg0)];
    }
  };
  items[18] = {
    key: "userHasBeenMovedVersion",
    get() {
      return outer1_14;
    }
  };
  return callback(VoiceStateStore, items);
})(require("initialize").Store);
tmp4.displayName = "VoiceStateStore";
tmp4 = new tmp4(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(user) {
    user = user.user;
    let tmp = null != id;
    if (tmp) {
      tmp = id !== user.id;
    }
    if (tmp) {
      let closure_16 = {};
      let closure_19 = {};
      let closure_21 = {};
      let closure_20 = {};
      map.clear();
    }
    id = user.id;
    const sessionId = user.sessionId;
    return tmp;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental() {
    let closure_16 = {};
    let closure_19 = {};
    let closure_21 = {};
    let closure_20 = {};
    map.clear();
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(voiceStates) {
    let sessionId;
    let user;
    let closure_0;
    let c1;
    let closure_16 = {};
    let closure_19 = {};
    let closure_21 = {};
    let closure_20 = {};
    ({ user, sessionId } = voiceStates);
    const entries = Object.entries(voiceStates.voiceStates);
    for (let num = 0; num < entries.length; num = num + 1) {
      let tmp = callback3;
      let tmp2 = callback3(entries[num], 2);
      closure_0 = tmp2[0];
      let _Object = Object;
      function _loop(arg0) {
        let closure_0 = arg0;
        outer1_30(closure_0, c1, () => new outer2_11(closure_0));
      }
      let entries1 = Object.entries(tmp2[1]);
      let num2 = 0;
      if (0 < entries1.length) {
        do {
          let tmp3 = callback3;
          let tmp4 = callback3(entries1[num2], 2);
          c1 = tmp4[0];
          let _loopResult = _loop(tmp4[1]);
          num2 = num2 + 1;
          length = entries1.length;
        } while (num2 < length);
      }
    }
    const id = user.id;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    return callback3(updateVoiceState(channelId.guildId, closure_3, (set) => {
      let result;
      if (null != set) {
        result = set.set("channelId", channelId);
      }
      return result;
    }), 1)[0];
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, guildId) => {
      let flag = arg0;
      const tmp = outer1_10(outer1_31(guildId.guildId, guildId), 3);
      if (tmp[0]) {
        let tmp5 = guildId.sessionId === outer1_4;
        if (tmp5) {
          tmp5 = null != tmp2;
        }
        if (tmp5) {
          tmp5 = null != tmp3;
        }
        if (tmp5) {
          tmp5 = tmp3.channelId !== tmp2.channelId;
        }
        if (tmp5) {
          outer1_14 = outer1_14 + 1;
        }
        outer1_15 = outer1_15 + 1;
        flag = true;
      }
      return flag;
    }, false);
  },
  GUILD_DELETE: handleGuildCreateOrDelete,
  GUILD_CREATE: handleGuildCreateOrDelete,
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    clearCall(channel.channel.id);
  },
  CALL_DELETE: function handleCallDelete(channelId) {
    clearCall(channelId.channelId);
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(voiceStates) {
    let done;
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(voiceStates.voiceStates);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let tmp2 = mergeVoiceState;
        let tmp3 = callback3;
        if (!flag) {
          flag = callback3(mergeVoiceState(voiceStates.guildId, iter2.value), 1)[0];
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    const tmp4 = _createForOfIteratorHelperLoose(voiceStates.removedVoiceStateUsers);
    let iter4 = tmp4();
    if (!iter4.done) {
      do {
        let tmp5 = updateVoiceState;
        let tmp6 = updateVoiceState(voiceStates.guildId, iter4.value, () => null);
        let iter5 = tmp4();
        iter4 = iter5;
        flag2 = true;
        done = iter5.done;
      } while (!done);
    }
    if (flag2) {
      closure_15 = closure_15 + 1;
    }
    return flag2;
  },
  RTC_CONNECTION_PLATFORM: function handleRTCConnectionPlatform(userId) {
    closure_22[makeParticipantPlatformKey(userId.userId, userId.channelId)] = userId.platform;
  }
});
let result = set.fileFinishedImporting("stores/VoiceStateStore.tsx");

export default tmp4;
