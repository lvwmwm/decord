// Module ID: 4142
// Function ID: 34848
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4142 (_isNativeReflectConstruct)
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
  const arg1 = arg0;
  let obj = closure_16[closure_12];
  if (null == obj) {
    obj = {};
  }
  importDefault(dependencyMap[9]).each(obj, (channelId) => {
    if (channelId.channelId === channelId) {
      callback(closure_12, arg1, () => null);
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
  let tmp = guildId;
  let tmp4 = guildId;
  if (null == guildId) {
    tmp4 = ME;
  }
  const tmp2Result = getRecords(closure_16, tmp4);
  const tmp7 = arg2(tmp2Result[closure_3]);
  if (tmp2Result[closure_3] === tmp7) {
    const items = [false, tmp7, tmp6];
    let items1 = items;
  } else {
    if (null != tmp6) {
      delete r1[r5];
      if (null != tmp6.channelId) {
        getRecords(closure_19, tmp6.channelId);
        delete r8[r5];
        getRecords(closure_20, tmp6.channelId);
        delete r8[r5];
      }
      if (null != tmp6.sessionId) {
        getRecords(closure_21, closure_3);
        const sessionId = tmp6.sessionId;
        delete r9[r8];
      }
      let tmp16 = tmp;
      if (null == tmp) {
        tmp16 = ME;
      }
      const obj = getOrCreateUsersWithVideo(tmp16);
      if (obj.has(closure_3)) {
        const _Set = Set;
        const set = new Set(obj);
        set.delete(closure_3);
        if (0 === set.size) {
          map.delete(tmp16);
        } else {
          const result = map.set(tmp16, set);
        }
      }
    }
    if (null != tmp7) {
      tmp2Result[closure_3] = tmp7;
      if (null != tmp7.channelId) {
        getRecords(closure_19, tmp7.channelId)[closure_3] = tmp7;
        if (tmp7.selfVideo) {
          getRecords(closure_20, tmp7.channelId)[closure_3] = tmp7;
          if (null == tmp) {
            tmp = ME;
          }
          const obj3 = getOrCreateUsersWithVideo(tmp);
          if (!obj3.has(closure_3)) {
            const _Set2 = Set;
            const set1 = new Set(obj3);
            set1.add(closure_3);
            const result1 = map.set(tmp, set1);
          }
        }
      }
      if (null != tmp7.sessionId) {
        getRecords(closure_21, closure_3)[tmp7.sessionId] = tmp7;
      }
    }
    items1 = [true, tmp7, tmp6];
  }
  return items1;
}
function mergeVoiceState(guildId, userId) {
  return updateVoiceState(guildId, userId.userId, (merge) => {
    if (null == arg1.channelId) {
      return null;
    } else {
      const obj = {};
      ({ channelId: obj.channelId, deaf: obj.deaf, mute: obj.mute, requestToSpeakTimestamp: obj.requestToSpeakTimestamp, selfDeaf: obj.selfDeaf, selfMute: obj.selfMute, selfStream: obj.selfStream, selfVideo: obj.selfVideo, sessionId: obj.sessionId, suppress: obj.suppress, userId: obj.userId, discoverable: obj.discoverable, connectedAt: obj.connectedAt } = arg1);
      if (null != merge) {
        let mergeResult = merge.merge(obj);
      } else {
        const prototype = ctor.prototype;
        mergeResult = new ctor(obj);
      }
      return mergeResult;
    }
  });
}
function handleGuildCreateOrDelete(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const item = importDefault(dependencyMap[9]).forEach(closure_16[guild.id], (userId) => {
    callback(guild.id, userId.userId, () => null);
  });
  delete r2[r1];
}
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
const ME = arg1(dependencyMap[7]).ME;
const VoicePlatforms = arg1(dependencyMap[8]).VoicePlatforms;
let closure_14 = 0;
let closure_15 = 0;
let closure_16 = {};
const set = new Set();
const map = new Map();
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let closure_22 = {};
let tmp4 = (Store) => {
  class VoiceStateStore {
    constructor() {
      self = this;
      tmp = closure_5(this, VoiceStateStore);
      obj = closure_8(VoiceStateStore);
      tmp2 = closure_7;
      if (closure_23()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_8;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_8(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = VoiceStateStore;
  callback2(VoiceStateStore, Store);
  let obj = {
    key: "getAllVoiceStates",
    value() {
      return closure_16;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getVoiceStateVersion",
    value() {
      return closure_15;
    }
  };
  items[1] = obj;
  obj = {
    key: "getVoiceStates",
    value(arg0) {
      let tmp = arg0;
      if (null == arg0) {
        tmp = closure_12;
      }
      return closure_27(closure_16, tmp);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getVoiceStatesForChannel",
    value(arg0) {
      return callback4(closure_19, arg0);
    }
  };
  items[4] = {
    key: "getVideoVoiceStatesForChannel",
    value(arg0) {
      return callback4(closure_20, arg0);
    }
  };
  items[5] = {
    key: "getVoiceState",
    value(guildId) {
      return this.getVoiceStates(guildId)[arg1];
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
        tmp = closure_3;
      }
      const tmp2 = callback4(closure_19, arg0);
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
      return Object.values(callback4(closure_21, arg0))[0];
    }
  };
  items[9] = {
    key: "getDiscoverableVoiceStateForUser",
    value(arg0) {
      const values = Object.values(callback4(closure_21, arg0));
      return values.find((discoverable) => false !== discoverable.discoverable);
    }
  };
  items[10] = {
    key: "getVoiceStateForSession",
    value(arg0, arg1) {
      let tmp = null;
      if (null != arg1) {
        let tmp4;
        const tmp6 = callback4(closure_21, arg0);
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
      const voiceState = this.getVoiceState(arg0, closure_3);
      let channelId = null;
      if (null != voiceState) {
        channelId = null;
        if (null != closure_4) {
          channelId = null;
          if (voiceState.sessionId === closure_4) {
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
      let value = closure_18.get(arg0);
      if (null == value) {
        value = closure_17;
      }
      return value;
    }
  };
  items[14] = {
    key: "isCurrentClientInVoiceChannel",
    value() {
      let tmp = null != closure_4;
      if (tmp) {
        let tmp5;
        if (null != closure_21[closure_3]) {
          tmp5 = tmp4[closure_4];
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
        tmp = closure_3;
      }
      if (null == arg0) {
        return false;
      } else {
        const voiceStateForChannel = self.getVoiceStateForChannel(arg0, tmp);
        let tmp3 = null != voiceStateForChannel;
        if (tmp3) {
          let tmp5 = tmp !== closure_3;
          if (!tmp5) {
            let tmp7 = null != closure_4;
            if (tmp7) {
              tmp7 = voiceStateForChannel.sessionId === closure_4;
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
      return Object.values(callback4(closure_20, arg0)).length > 0;
    }
  };
  items[17] = {
    key: "getVoicePlatformForChannel",
    value(arg0, arg1) {
      let tmp = null != closure_4;
      if (tmp) {
        let channelId;
        if (null != closure_21[closure_3]) {
          if (null != tmp4[closure_4]) {
            channelId = tmp7.channelId;
          }
        }
        tmp = channelId;
      }
      if (arg1 === closure_3) {
        if (arg0 === tmp) {
          VoiceStateStore(closure_2[10]).isMetaQuest() ? closure_13.QUEST : closure_13.MOBILE;
          const obj = VoiceStateStore(closure_2[10]);
        }
      }
      return closure_22[closure_26(undefined, arg1, arg0)];
    }
  };
  items[18] = {
    key: "userHasBeenMovedVersion",
    get() {
      return closure_14;
    }
  };
  return callback(VoiceStateStore, items);
}(importDefault(dependencyMap[11]).Store);
tmp4.displayName = "VoiceStateStore";
tmp4 = new tmp4(importDefault(dependencyMap[12]), {
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
    const id = user.id;
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
    let closure_1;
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
        callback(closure_0, closure_1, () => new closure_11(arg0));
      }
      let entries1 = Object.entries(tmp2[1]);
      let num2 = 0;
      if (0 < entries1.length) {
        do {
          let tmp3 = closure_10;
          let tmp4 = closure_10(entries1[num2], 2);
          closure_1 = tmp4[0];
          let _loopResult = _loop(tmp4[1]);
          num2 = num2 + 1;
          let length = entries1.length;
        } while (num2 < length);
      }
    }
    const id = user.id;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    const arg1 = channelId.channelId;
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
      const tmp = callback(callback2(guildId.guildId, guildId), 3);
      if (tmp[0]) {
        let tmp5 = guildId.sessionId === closure_4;
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
          closure_14 = closure_14 + 1;
        }
        closure_15 = closure_15 + 1;
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
        let tmp2 = closure_31;
        let tmp3 = closure_10;
        if (!flag) {
          flag = closure_10(closure_31(voiceStates.guildId, iter2.value), 1)[0];
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
        let tmp5 = closure_30;
        let tmp6 = closure_30(voiceStates.guildId, iter4.value, () => null);
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
const result = arg1(dependencyMap[13]).fileFinishedImporting("stores/VoiceStateStore.tsx");

export default tmp4;
