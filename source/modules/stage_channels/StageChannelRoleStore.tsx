// Module ID: 4954
// Function ID: 42538
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 1917, 1910, 1838, 1849, 4146, 4314, 3763, 1356, 22, 4955, 566, 686, 2]

// Module 4954 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import useIsStageSpeakingDisabledForCurrentUser from "useIsStageSpeakingDisabledForCurrentUser";
import dispatcher from "dispatcher";
import set from "set";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_createForOfIteratorHelperLoose";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";

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
function isSpeaker(id, id2) {
  voiceStateForChannel = voiceStateForChannel.getVoiceStateForChannel(id2, id);
  const audienceRequestToSpeakState = require(4314) /* getAudienceRequestToSpeakState */.getAudienceRequestToSpeakState(voiceStateForChannel);
  return audienceRequestToSpeakState === require(4314) /* getAudienceRequestToSpeakState */.RequestToSpeakStates.ON_STAGE;
}
function isModerator(id, id2, channel) {
  let obj = importAll(3763);
  obj = { permission: require(1356) /* Permissions */.MODERATE_STAGE_CHANNEL_PERMISSIONS, user: id, context: id2, overwrites: channel.permissionOverwrites, roles: unsafeMutableRoles.getUnsafeMutableRoles(id2.id) };
  return obj.can(obj);
}
function buildStageChannelUserRoles(id, channelId) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (null == dependencyMap[channelId]) {
    dependencyMap[channelId] = {};
  }
  if (flag === undefined) {
    flag = false;
  }
  const channel = store.getChannel(channelId);
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  guild = guild.getGuild(guildId);
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
      dependencyMap[channelId][id] = tmp4;
      return tmp4;
    }
  }
  tmp4 = obj;
}
function resetStageChannelRolesForGuild(guildId) {
  let done;
  const values = Object.values(store.getMutableGuildChannelsForGuild(guildId));
  const found = values.filter((isGuildStageVoice) => isGuildStageVoice.isGuildStageVoice());
  const tmp3 = _createForOfIteratorHelperLoose(found);
  let iter = tmp3();
  if (!iter.done) {
    do {
      let tmp4 = closure_16;
      let id = iter.value.id;
      delete tmp2[tmp];
      let iter2 = tmp3();
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
        let tmp10 = tmp6;
        let tmp11 = store;
        let basicChannel = store.getBasicChannel(tmp6);
        let tmp7 = null != basicChannel && basicChannel.guild_id === guildId;
        if (!tmp7) {
          continue;
        } else {
          let tmp8 = dependencyMap;
          let tmp9 = dependencyMap[tmp6];
          delete tmp3[tmp2];
          continue;
        }
        continue;
      }
    }
  }
  return flag;
}
function handleGuildCreateOrDelete(arg0) {
  for (const key10005 in closure_16) {
    let tmp6 = key10005;
    let tmp7 = store;
    let basicChannel = store.getBasicChannel(key10005);
    let tmp4 = null != basicChannel;
    if (tmp4) {
      tmp4 = basicChannel.guild_id !== tmp3.id;
    }
    if (tmp4) {
      continue;
    } else {
      let tmp5 = closure_16;
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
}
let obj = { SPEAKER: "speaker", MODERATOR: "moderator" };
let closure_16 = {};
obj = { [obj.SPEAKER]: false, [obj.MODERATOR]: false };
let tmp2 = ((Store) => {
  class StageChannelRoleStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, StageChannelRoleStore);
      obj = outer1_7(StageChannelRoleStore);
      tmp2 = outer1_6;
      if (outer1_18()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(StageChannelRoleStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10, outer1_9, outer1_12, outer1_13, outer1_14, outer1_11);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "isSpeaker",
    value(arg0, arg1) {
      return this.getPermissionsForUser(arg0, arg1)[outer1_15.SPEAKER];
    }
  };
  items[1] = obj;
  obj = {
    key: "isModerator",
    value(arg0, arg1) {
      const tmp = this.getPermissionsForUser(arg0, arg1, true)[outer1_15.MODERATOR];
      return null != tmp && tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isAudienceMember",
    value(arg0, arg1) {
      const permissionsForUser = this.getPermissionsForUser(arg0, arg1);
      let tmp2 = !permissionsForUser[outer1_15.SPEAKER];
      if (tmp2) {
        tmp2 = !permissionsForUser[outer1_15.MODERATOR];
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
          const currentUser = outer1_13.getCurrentUser();
          let id;
          if (null != currentUser) {
            id = currentUser.id;
          }
          if (arg0 === id) {
            if (obj.isStageSpeakingDisabledForCurrentUser()) {
              return outer1_17;
            }
            obj = StageChannelRoleStore(outer1_3[15]);
          }
          let tmp6;
          if (null != outer1_16[arg1]) {
            tmp6 = tmp5[arg0];
          }
          if (null != tmp6) {
            let tmp9 = tmp6;
            if (flag) {
              tmp9 = tmp6;
              if (null == tmp6[outer1_15.MODERATOR]) {
                tmp9 = outer1_23(arg0, arg1, true);
              }
            }
            let tmp8 = tmp9;
          } else {
            tmp8 = outer1_23(arg0, arg1, flag);
          }
          return tmp8;
        }
      }
      return outer1_17;
    }
  };
  return callback(StageChannelRoleStore, items);
})(require("initialize").Store);
tmp2.displayName = "StageChannelRoleStore";
obj = {
  CHANNEL_UPDATES: function handleChannelUpdate(channels) {
    let done;
    const tmp3 = _createForOfIteratorHelperLoose(channels.channels);
    let iter = tmp3();
    if (!iter.done) {
      do {
        let tmp4 = closure_16;
        let id = iter.value.id;
        delete tmp2[tmp];
        let iter2 = tmp3();
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
    let reduced = !importDefault(22).isEmpty(closure_16);
    if (reduced) {
      reduced = voiceStates.reduce((arg0, arg1) => {
        let channelId;
        let userId;
        ({ userId, channelId } = arg1);
        let flag = false;
        if (null != channelId) {
          const channel = outer1_9.getChannel(channelId);
          let num = null == channel || !channel.isGuildStageVoice();
          if (!num) {
            num = 0;
            if (null != outer1_16[channelId]) {
              delete tmp[tmp2];
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
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/stage_channels/StageChannelRoleStore.tsx");

export default tmp2;
export const StagePermissionBuckets = obj;
export const NO_PERMISSIONS = obj;
