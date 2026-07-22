// Module ID: 4951
// Function ID: 42516
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4951 (_isNativeReflectConstruct)
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
function isSpeaker(id, id2) {
  const voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(id2, id);
  const audienceRequestToSpeakState = id2(dependencyMap[11]).getAudienceRequestToSpeakState(voiceStateForChannel);
  return audienceRequestToSpeakState === id2(dependencyMap[11]).RequestToSpeakStates.ON_STAGE;
}
function isModerator(id, id2, channel) {
  let obj = importAll(dependencyMap[12]);
  obj = { permission: id2(dependencyMap[13]).MODERATE_STAGE_CHANNEL_PERMISSIONS, user: id, context: id2, overwrites: channel.permissionOverwrites, roles: unsafeMutableRoles.getUnsafeMutableRoles(id2.id) };
  return obj.can(obj);
}
function buildStageChannelUserRoles(id, channelId) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (null == closure_16[channelId]) {
    closure_16[channelId] = {};
  }
  if (flag === undefined) {
    flag = false;
  }
  const channel = store.getChannel(channelId);
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  const guild = guild.getGuild(guildId);
  if (null != guild) {
    if (null != channel) {
      if (channel.isGuildStageVoice()) {
        const obj = {};
        obj[obj.SPEAKER] = isSpeaker(id, channelId);
        let tmp8 = null;
        if (flag) {
          tmp8 = isModerator(id, guild, channel);
        }
        obj[obj.MODERATOR] = tmp8;
        let tmp4 = obj;
      }
      closure_16[channelId][id] = tmp4;
      return tmp4;
    }
  }
  tmp4 = obj;
}
function resetStageChannelRolesForGuild(guildId) {
  let done;
  const values = Object.values(store.getMutableGuildChannelsForGuild(guildId));
  const found = values.filter((isGuildStageVoice) => isGuildStageVoice.isGuildStageVoice());
  const tmp = _createForOfIteratorHelperLoose(found);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = closure_16;
      let id = iter.value.id;
      delete r6[r1];
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return found.length > 0;
}
function handleGuildMemberUpdate(arg0) {
  let guildId;
  let user;
  ({ guildId, user } = arg0);
  let flag = null != user && null != guildId;
  if (flag) {
    const id = user.id;
    flag = true;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag = true;
      while (keys[tmp] !== undefined) {
        let tmp8 = tmp4;
        let tmp9 = store;
        let basicChannel = store.getBasicChannel(tmp4);
        let tmp5 = null != basicChannel && basicChannel.guild_id === guildId;
        if (!tmp5) {
          continue;
        } else {
          let tmp6 = closure_16;
          let tmp7 = closure_16[tmp4];
          delete r11[r8];
          // continue
        }
        continue;
      }
    }
  }
  return flag;
}
function handleGuildCreateOrDelete(arg0) {
  for (const key10005 in closure_16) {
    let tmp4 = key10005;
    let tmp5 = closure_9;
    let basicChannel = closure_9.getBasicChannel(key10005);
    let tmp2 = null != basicChannel;
    if (tmp2) {
      tmp2 = basicChannel.guild_id !== tmp.id;
    }
    if (tmp2) {
      continue;
    } else {
      let tmp3 = closure_16;
      delete r8[r9];
      // continue
    }
    continue;
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
let obj = { SPEAKER: "speaker", MODERATOR: "moderator" };
let closure_16 = {};
obj = { [obj.SPEAKER]: false, [obj.MODERATOR]: false };
let tmp2 = (Store) => {
  class StageChannelRoleStore {
    constructor() {
      self = this;
      tmp = closure_4(this, StageChannelRoleStore);
      obj = closure_7(StageChannelRoleStore);
      tmp2 = closure_6;
      if (closure_18()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = StageChannelRoleStore;
  callback2(StageChannelRoleStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10, closure_9, closure_12, closure_13, closure_14, closure_11);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isSpeaker",
    value(arg0, arg1) {
      return this.getPermissionsForUser(arg0, arg1)[closure_15.SPEAKER];
    }
  };
  items[1] = obj;
  obj = {
    key: "isModerator",
    value(arg0, arg1) {
      const tmp = this.getPermissionsForUser(arg0, arg1, true)[closure_15.MODERATOR];
      return null != tmp && tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isAudienceMember",
    value(arg0, arg1) {
      const permissionsForUser = this.getPermissionsForUser(arg0, arg1);
      let tmp2 = !permissionsForUser[closure_15.SPEAKER];
      if (tmp2) {
        tmp2 = !permissionsForUser[closure_15.MODERATOR];
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "getPermissionsForUser",
    value(arg0, arg1) {
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      if (null != arg0) {
        if (null != arg1) {
          const currentUser = currentUser.getCurrentUser();
          let id;
          if (null != currentUser) {
            id = currentUser.id;
          }
          if (arg0 === id) {
            if (obj.isStageSpeakingDisabledForCurrentUser()) {
              return closure_17;
            }
            const obj = StageChannelRoleStore(closure_3[15]);
          }
          let tmp6;
          if (null != closure_16[arg1]) {
            tmp6 = tmp5[arg0];
          }
          if (null != tmp6) {
            let tmp9 = tmp6;
            if (flag) {
              tmp9 = tmp6;
              if (null == tmp6[closure_15.MODERATOR]) {
                tmp9 = callback4(arg0, arg1, true);
              }
            }
            let tmp8 = tmp9;
          } else {
            tmp8 = callback4(arg0, arg1, flag);
          }
          return tmp8;
        }
      }
      return closure_17;
    }
  };
  return callback(StageChannelRoleStore, items);
}(importDefault(dependencyMap[16]).Store);
tmp2.displayName = "StageChannelRoleStore";
obj = {
  CHANNEL_UPDATES: function handleChannelUpdate(channels) {
    let done;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    let iter = tmp();
    if (!iter.done) {
      do {
        let tmp2 = closure_16;
        let id = iter.value.id;
        delete r5[r1];
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_16 = {};
  },
  GUILD_MEMBER_REMOVE: handleGuildMemberUpdate,
  GUILD_MEMBER_UPDATE: handleGuildMemberUpdate,
  GUILD_ROLE_UPDATE: function handleGuildRoleUpdate(guildId) {
    resetStageChannelRolesForGuild(guildId.guildId);
  },
  PASSIVE_UPDATE_V2: function handlePassiveUpdateV2(guildId) {
    return resetStageChannelRolesForGuild(guildId.guildId);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    let reduced = !importDefault(dependencyMap[14]).isEmpty(closure_16);
    if (reduced) {
      reduced = voiceStates.reduce((arg0, arg1) => {
        let channelId;
        let userId;
        ({ userId, channelId } = arg1);
        let flag = false;
        if (null != channelId) {
          const channel = channel.getChannel(channelId);
          let num = null == channel || !channel.isGuildStageVoice();
          if (!num) {
            num = 0;
            if (null != closure_16[channelId]) {
              delete r4[r5];
              num = 0;
            }
          }
          flag = !num;
        }
        if (!flag) {
          flag = arg0;
        }
        return flag;
      }, false);
    }
    return reduced;
  },
  GUILD_CREATE: handleGuildCreateOrDelete,
  GUILD_DELETE: handleGuildCreateOrDelete
};
tmp2 = new tmp2(importDefault(dependencyMap[17]), obj);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/stage_channels/StageChannelRoleStore.tsx");

export default tmp2;
export const StagePermissionBuckets = obj;
export const NO_PERMISSIONS = obj;
