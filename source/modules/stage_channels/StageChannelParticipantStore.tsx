// Module ID: 4951
// Function ID: 42453
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4149, 1194, 1348, 1838, 3758, 3767, 4952, 1849, 4146, 4203, 4954, 1353, 3754, 22, 4957, 4194, 636, 566, 686, 2]

// Module 4951 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import sortedInsert from "sortedInsert";
import apply from "apply";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
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
function getGuildId(getGuildId) {
  let guildId = getGuildId.getGuildId();
  if (null == guildId) {
    guildId = NO_GUILD;
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
    const tmp5 = importDefault(22);
    const values = importDefault(22)(store.getMutableGuildChannelsForGuild(guild_id)).values();
    const item = values.forEach((id) => {
      if (outer1_33(id)) {
        const result = outer1_21.set(id.id, id);
      }
    });
    const tmp5Result = importDefault(22)(store.getMutableGuildChannelsForGuild(guild_id));
  }
}
function maybeGetParticipants(channelId) {
  if (null != dependencyMap[channelId]) {
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
function getOrCreateParticipants(value) {
  let tmp = dependencyMap[value];
  if (null == tmp) {
    let tmp4 = importDefault(4957);
    const prototype = tmp4.prototype;
    tmp4 = new tmp4(value);
    dependencyMap[value] = tmp4;
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
  let closure_0 = arg0;
  if (arg1 === undefined) {
    arr = getActiveStageChannelIds();
  }
  return arr.reduce((arg0, channelId) => {
    let flag = arg0;
    const obj = outer1_32(channelId);
    if (callback(obj)) {
      const channel = outer1_10.getChannel(channelId);
      if (null != channel) {
        if (channel.isGuildStageVoice()) {
          if (0 === obj.size()) {
            outer1_36(channel.id);
            flag = true;
          } else {
            flag = true;
            if (null == outer1_21.get(channel.id)) {
              const result = outer1_21.set(channel.id, channel);
              flag = true;
            }
          }
        }
      }
      outer1_36(channelId);
      flag = true;
    }
    return flag;
  }, false);
}
function updateParticipant(arg0) {
  let tmp = arg1;
  let closure_0 = arg0;
  if (arg1 === undefined) {
    tmp = getActiveStageChannelIds();
  }
  return updateParticipants((updateParticipant) => updateParticipant.updateParticipant(closure_0), tmp);
}
function clearChannel(arg0) {
  let flag = null != arg0;
  if (flag) {
    delete tmp[tmp2];
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
        if (null == dependencyMap[channelId]) {
          has.add(channelId);
        }
      }
      tmp2 = null != channel && channel.isGuildStageVoice();
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
  const tmp3 = _createForOfIteratorHelperLoose(secondaryIndexMap.values(id));
  let iter = tmp3();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp4 = secondaryIndexMap;
      let deleteResult = secondaryIndexMap.delete(value.id);
      let tmp6 = closure_23;
      let id2 = value.id;
      delete tmp2[tmp];
      let iter2 = tmp3();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  set.delete(id);
}
function handleStreamClose(streamKey) {
  let channelId;
  let ownerId;
  const decodeStreamKeyResult = require(4194) /* isStreamKey */.decodeStreamKey(streamKey.streamKey);
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
const NO_GUILD = "NO_GUILD";
const secondaryIndexMap = new require("sortedInsert").SecondaryIndexMap((arg0) => {
  const items = [getGuildId(arg0)];
  return items;
}, (id) => id.id);
let set = new Set();
let closure_23 = {};
let closure_24 = [];
let tmp4 = ((Store) => {
  class StageChannelParticipantStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, StageChannelParticipantStore);
      obj = outer1_6(StageChannelParticipantStore);
      tmp2 = outer1_5;
      if (outer1_25()) {
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
  callback2(StageChannelParticipantStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_15, outer1_10, outer1_14, outer1_16, outer1_12, outer1_17, outer1_11, outer1_18, outer1_13, outer1_19, outer1_8);
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
        const tmp3 = outer1_31(arg0);
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
        let toArrayResult = outer1_24;
      } else {
        toArrayResult = undefined;
        const obj = outer1_31(arg0);
        if (null != obj) {
          toArrayResult = obj.toArray(arg1);
        }
        if (null == toArrayResult) {
          toArrayResult = outer1_24;
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
      const obj = outer1_31(arg0);
      if (null != obj) {
        requestToSpeakParticipants = obj.getRequestToSpeakParticipants();
      }
      if (null == requestToSpeakParticipants) {
        requestToSpeakParticipants = outer1_24;
      }
      return requestToSpeakParticipants;
    }
  };
  items[4] = {
    key: "getRequestToSpeakParticipantsVersion",
    value(arg0) {
      let prop;
      const tmp2 = outer1_31(arg0);
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
      const obj = outer1_31(arg0);
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
        tmp3 = outer1_20;
      }
      outer1_30(tmp3);
      if (null == tmp) {
        tmp = outer1_20;
      }
      return outer1_21.values(tmp);
    }
  };
  items[7] = {
    key: "getChannelsVersion",
    value() {
      return outer1_21.version;
    }
  };
  items[8] = {
    key: "getParticipant",
    value(arg0, arg1) {
      let participant;
      const obj = outer1_31(arg0);
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
})(require("initialize").Store);
tmp4.displayName = "StageChannelParticipantStore";
tmp4 = new tmp4(require("dispatcher"), {
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
            id = id.getId();
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
    let set = new Set();
    return voiceStates.reduce((arg0, guildId) => {
      if (null != guildId.guildId) {
        if (outer1_22.has(guildId.guildId)) {
          const _Set = Set;
          const set = new Set();
          outer1_37(set, set, guildId.oldChannelId);
          outer1_37(set, set, guildId.channelId);
          let tmp10 = arg0;
          if (0 !== set.size) {
            const _Array = Array;
            tmp10 = outer1_35(guildId.userId, Array.from(set)) || arg0;
            const tmp12 = outer1_35(guildId.userId, Array.from(set)) || arg0;
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
        let tmp2 = _createForOfIteratorHelperLoose;
        let tmp3 = _createForOfIteratorHelperLoose(iter2.value.members);
        let iter3 = tmp3();
        let tmp4 = flag;
        let iter4 = iter3;
        let tmp5 = flag;
        if (!iter3.done) {
          do {
            let tmp6 = updateParticipant;
            let tmp7 = updateParticipant(iter4.value.user.id) || tmp4;
            iter5 = tmp3();
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
        if (outer1_22.has(isGuildStageVoice.guild_id)) {
          const value = outer1_21.get(isGuildStageVoice.id);
          let tmp5 = null == value;
          if (!tmp5) {
            tmp5 = outer1_1(outer1_2[21])(isGuildStageVoice.permissionOverwrites, value.permissionOverwrites);
          }
          if (!tmp5) {
            arr.push(isGuildStageVoice.id);
            const result = outer1_21.set(isGuildStageVoice.id, isGuildStageVoice);
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
        let tmp2 = getOrCreateParticipants;
        let obj = getOrCreateParticipants(iter2.value);
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
let result = set.fileFinishedImporting("modules/stage_channels/StageChannelParticipantStore.tsx");

export default tmp4;
