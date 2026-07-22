// Module ID: 4948
// Function ID: 42431
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4948 (_isNativeReflectConstruct)
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
function getGuildId(getGuildId) {
  let guildId = getGuildId.getGuildId();
  if (null == guildId) {
    guildId = closure_20;
  }
  return guildId;
}
function getActiveStageChannelIds(guildId) {
  let tmp2;
  if (null != guildId) {
    tmp2 = guildId;
  }
  const values = secondaryIndexMap.values(tmp2, true);
  return values.map((id) => id.id);
}
function buildActiveStageChannelIds(guild_id) {
  if (!set.has(guild_id)) {
    set.add(guild_id);
    const tmp5 = importDefault(dependencyMap[18]);
    const values = importDefault(dependencyMap[18])(store.getMutableGuildChannelsForGuild(guild_id)).values();
    const item = values.forEach((id) => {
      if (callback(id)) {
        const result = closure_21.set(id.id, id);
      }
    });
    const tmp5Result = importDefault(dependencyMap[18])(store.getMutableGuildChannelsForGuild(guild_id));
  }
}
function maybeGetParticipants(channelId) {
  if (null != closure_23[channelId]) {
    return tmp;
  } else {
    const channel = store.getChannel(channelId);
    let tmp3 = null;
    if (null != channel) {
      tmp3 = null;
      if (channel.isGuildStageVoice()) {
        buildActiveStageChannelIds(channel.guild_id);
        let tmp7 = null;
        if (isActiveStageChannel(channel)) {
          tmp7 = getOrCreateParticipants(channelId);
        }
        tmp3 = tmp7;
      }
    }
    return tmp3;
  }
}
function getOrCreateParticipants(channelId) {
  let tmp = closure_23[channelId];
  if (null == tmp) {
    let tmp4 = importDefault(dependencyMap[19]);
    const prototype = tmp4.prototype;
    tmp4 = new tmp4(channelId);
    closure_23[channelId] = tmp4;
    tmp4.rebuild();
    tmp = tmp4;
  }
  return tmp;
}
function isActiveStageChannel(channel) {
  let tmp = null != channel && channel.isGuildStageVoice();
  if (tmp) {
    tmp = closure_17.countVoiceStatesForChannel(channel.id) > 0;
  }
  return tmp;
}
function updateParticipants(arg0) {
  let arr = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    arr = getActiveStageChannelIds();
  }
  return arr.reduce((arg0, channelId) => {
    let flag = arg0;
    const obj = callback(channelId);
    if (arg0(obj)) {
      const channel = channel.getChannel(channelId);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          if (0 === obj.size()) {
            callback2(channel.id);
            flag = true;
          } else {
            flag = true;
            if (null == store.get(channel.id)) {
              const result = store.set(channel.id, channel);
              flag = true;
            }
          }
        }
      }
      callback2(channelId);
      flag = true;
    }
    return flag;
  }, false);
}
function updateParticipant(arg0) {
  let tmp = arg1;
  const arg1 = arg0;
  if (arg1 === undefined) {
    tmp = getActiveStageChannelIds();
  }
  return updateParticipants((updateParticipant) => updateParticipant.updateParticipant(updateParticipant), tmp);
}
function clearChannel(arg0) {
  let flag = null != arg0;
  if (flag) {
    delete r2[r3];
    secondaryIndexMap.delete(arg0);
    flag = true;
  }
  return flag;
}
function handleRebuildActiveStageChannels() {
  set.clear();
  secondaryIndexMap.clear();
  let closure_23 = {};
}
function maybeAddChannelIdToUpdate(has, add, channelId) {
  if (null != channelId) {
    if (!has.has(channelId)) {
      const channel = store.getChannel(channelId);
      if (tmp2) {
        add.add(channelId);
        if (null == closure_23[channelId]) {
          has.add(channelId);
        }
      }
      const tmp2 = null != channel && channel.isGuildStageVoice();
    }
  }
}
function handleUserUpdate(user) {
  return updateParticipant(user.user.id);
}
function handleRelationshipUpdate(relationship) {
  return updateParticipant(relationship.relationship.id);
}
function handleGuildCreateOrDelete(guild) {
  let done;
  const id = guild.guild.id;
  const tmp = _createForOfIteratorHelperLoose(secondaryIndexMap.values(id));
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp2 = closure_21;
      let deleteResult = closure_21.delete(value.id);
      let tmp4 = closure_23;
      let id2 = value.id;
      delete r6[r2];
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  set.delete(id);
}
function handleStreamClose(streamKey) {
  let channelId;
  let ownerId;
  const decodeStreamKeyResult = arg1(dependencyMap[20]).decodeStreamKey(streamKey.streamKey);
  const guildId = decodeStreamKeyResult.guildId;
  let tmp2 = null == guildId;
  ({ channelId, ownerId } = decodeStreamKeyResult);
  if (!tmp2) {
    tmp2 = !set.has(guildId);
  }
  let tmp4 = !tmp2;
  if (!tmp2) {
    const items = [channelId];
    tmp4 = updateParticipant(ownerId, items);
  }
  return tmp4;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
let closure_17 = importDefault(dependencyMap[14]);
let closure_18 = importDefault(dependencyMap[15]);
let closure_19 = importDefault(dependencyMap[16]);
let closure_20 = "NO_GUILD";
const secondaryIndexMap = new arg1(dependencyMap[17]).SecondaryIndexMap((arg0) => {
  const items = [getGuildId(arg0)];
  return items;
}, (id) => id.id);
const set = new Set();
let closure_23 = {};
let closure_24 = [];
let tmp4 = (Store) => {
  class StageChannelParticipantStore {
    constructor() {
      self = this;
      tmp = closure_3(this, StageChannelParticipantStore);
      obj = closure_6(StageChannelParticipantStore);
      tmp2 = closure_5;
      if (closure_25()) {
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
  const arg1 = StageChannelParticipantStore;
  callback2(StageChannelParticipantStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_15, closure_10, closure_14, closure_16, closure_12, closure_17, closure_11, closure_18, closure_13, closure_19, closure_8);
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getParticipantsVersion",
    value(arg0) {
      let num = -1;
      let num2 = -1;
      if (null != arg0) {
        let version;
        const tmp3 = callback4(arg0);
        if (null != tmp3) {
          version = tmp3.version;
        }
        if (null != version) {
          num = version;
        }
        num2 = num;
      }
      return num2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMutableParticipants",
    value(arg0, arg1) {
      if (null == arg0) {
        let toArrayResult = closure_24;
      } else {
        toArrayResult = undefined;
        const obj = callback4(arg0);
        if (null != obj) {
          toArrayResult = obj.toArray(arg1);
        }
        if (null == toArrayResult) {
          toArrayResult = closure_24;
        }
      }
      return toArrayResult;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMutableRequestToSpeakParticipants",
    value(arg0) {
      let requestToSpeakParticipants;
      const obj = callback4(arg0);
      if (null != obj) {
        requestToSpeakParticipants = obj.getRequestToSpeakParticipants();
      }
      if (null == requestToSpeakParticipants) {
        requestToSpeakParticipants = closure_24;
      }
      return requestToSpeakParticipants;
    }
  };
  items[4] = {
    key: "getRequestToSpeakParticipantsVersion",
    value(arg0) {
      let prop;
      const tmp2 = callback4(arg0);
      if (null != tmp2) {
        prop = tmp2.requestToSpeakVersion;
      }
      let num = -1;
      if (null != prop) {
        num = prop;
      }
      return num;
    }
  };
  items[5] = {
    key: "getParticipantCount",
    value(arg0, arg1) {
      let sizeResult;
      const obj = callback4(arg0);
      if (null != obj) {
        sizeResult = obj.size(arg1);
      }
      let num = 0;
      if (null != sizeResult) {
        num = sizeResult;
      }
      return num;
    }
  };
  items[6] = {
    key: "getChannels",
    value(arg0) {
      let tmp = arg0;
      let tmp3 = arg0;
      if (null == arg0) {
        tmp3 = closure_20;
      }
      closure_30(tmp3);
      if (null == tmp) {
        tmp = closure_20;
      }
      return closure_21.values(tmp);
    }
  };
  items[7] = {
    key: "getChannelsVersion",
    value() {
      return closure_21.version;
    }
  };
  items[8] = {
    key: "getParticipant",
    value(arg0, arg1) {
      let participant;
      const obj = callback4(arg0);
      if (null != obj) {
        participant = obj.getParticipant(arg1);
      }
      let tmp3 = null;
      if (null != participant) {
        tmp3 = participant;
      }
      return tmp3;
    }
  };
  return callback(StageChannelParticipantStore, items);
}(importDefault(dependencyMap[22]).Store);
tmp4.displayName = "StageChannelParticipantStore";
tmp4 = new tmp4(importDefault(dependencyMap[23]), {
  CONNECTION_OPEN: handleRebuildActiveStageChannels,
  OVERLAY_INITIALIZE: handleRebuildActiveStageChannels,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(currentVoiceChannelId) {
    currentVoiceChannelId = currentVoiceChannelId.currentVoiceChannelId;
    if (null == currentVoiceChannelId) {
      return false;
    } else {
      const channel = store.getChannel(currentVoiceChannelId);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          if (set.has(channel.guild_id)) {
            const id = id.getId();
            let tmp5 = null != id;
            if (tmp5) {
              const items = [currentVoiceChannelId];
              tmp5 = updateParticipant(id, items);
            }
            return tmp5;
          }
        }
      }
      return false;
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    const arg1 = new Set();
    return voiceStates.reduce((arg0, guildId) => {
      if (null != guildId.guildId) {
        if (set.has(guildId.guildId)) {
          const _Set = Set;
          const set = new Set();
          callback2(set, set, guildId.oldChannelId);
          callback2(set, set, guildId.channelId);
          let tmp10 = arg0;
          if (0 !== set.size) {
            const _Array = Array;
            tmp10 = callback(guildId.userId, Array.from(set)) || arg0;
            const tmp12 = callback(guildId.userId, Array.from(set)) || arg0;
          }
          return tmp10;
        }
      }
      return arg0;
    }, false);
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    return clearChannel(channel.channel.id);
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(chunks) {
    let iter6;
    const tmp = _createForOfIteratorHelperLoose(chunks.chunks);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let tmp2 = closure_26;
        let tmp3 = closure_26(iter2.value.members);
        let iter3 = tmp3();
        let tmp4 = flag;
        let iter4 = iter3;
        let tmp5 = flag;
        if (!iter3.done) {
          do {
            let tmp6 = closure_35;
            let tmp7 = closure_35(iter4.value.user.id) || tmp4;
            let iter5 = tmp3();
            tmp4 = tmp7;
            iter4 = iter5;
            tmp5 = tmp7;
          } while (!iter5.done);
        }
        iter6 = tmp();
        flag = tmp5;
        iter2 = iter6;
        flag2 = tmp5;
      } while (!iter6.done);
    }
    return flag2;
  },
  USER_UPDATE: handleUserUpdate,
  GUILD_MEMBER_REMOVE: handleUserUpdate,
  GUILD_MEMBER_UPDATE: handleUserUpdate,
  CHANNEL_UPDATES: function handleChannelUpdate(channels) {
    channels = channels.channels;
    const reduced = channels.reduce((arr, isGuildStageVoice) => {
      if (isGuildStageVoice.isGuildStageVoice()) {
        if (set.has(isGuildStageVoice.guild_id)) {
          const value = store.get(isGuildStageVoice.id);
          let tmp5 = null == value;
          if (!tmp5) {
            tmp5 = callback(closure_2[21])(isGuildStageVoice.permissionOverwrites, value.permissionOverwrites);
          }
          if (!tmp5) {
            arr.push(isGuildStageVoice.id);
            const result = store.set(isGuildStageVoice.id, isGuildStageVoice);
          }
          return arr;
        }
      }
      return arr;
    }, []);
    updateParticipants((rebuild) => rebuild.rebuild(), reduced);
    return reduced.length > 0;
  },
  GUILD_ROLE_UPDATE: function handleGuildRoleUpdate(guildId) {
    guildId = guildId.guildId;
    if (set.has(guildId)) {
      return updateParticipants((rebuild) => rebuild.rebuild(), getActiveStageChannelIds(guildId));
    }
  },
  RTC_CONNECTION_VIDEO: function handleRTCConnectionVideo(guildId) {
    let channelId;
    let userId;
    guildId = guildId.guildId;
    let tmp = null == guildId;
    ({ channelId, userId } = guildId);
    if (!tmp) {
      tmp = !set.has(guildId);
    }
    let tmp3 = !tmp;
    if (!tmp) {
      const items = [channelId];
      tmp3 = updateParticipant(userId, items);
    }
    return tmp3;
  },
  STREAM_CLOSE: handleStreamClose,
  STREAM_DELETE: handleStreamClose,
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  GUILD_CREATE: handleGuildCreateOrDelete,
  GUILD_DELETE: handleGuildCreateOrDelete,
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(guildId) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(getActiveStageChannelIds(guildId.guildId));
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let tmp2 = closure_32;
        let obj = closure_32(iter2.value);
        let tmp3 = obj.rebuild() || flag;
        iter3 = tmp();
        flag = tmp3;
        iter2 = iter3;
        flag2 = tmp3;
      } while (!iter3.done);
    }
    return flag2;
  }
});
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/stage_channels/StageChannelParticipantStore.tsx");

export default tmp4;
