// Module ID: 9972
// Function ID: 9973
// Name: useCanRing
// Dependencies: [502, 5497, 2045, 2109, 5632, 4399, 4798, 4409, 4777, 1078, 558, 568, 504, 9973, 5635, 5221, 2]
// Exports: canRingUsersInChannel

// Module 9972 (useCanRing)
import useChannelRoleSubscriptionStatusDefault from "useChannelRoleSubscriptionStatus" /* 5221 */;
import canJoinVoiceChannelDefault from "canJoinVoiceChannel" /* 5635 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5497 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5632 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import PresenceStore from "PresenceStore" /* 4798 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;
import VoiceStateStore from "VoiceStateStore" /* 4777 */;

const require = globalThis.__r;

const GuildVoiceRingingExperimentDefault = tmp4(9973);
const require = fn;
const Constants = fn(1078);
({ ChannelTypes: closure_12, ChannelTypesSets: map1, StatusTypes: closure_14 } = Constants);
fn(558);
const ReactCompilerGating = fn(558);
tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  const _require = arg0;
  importDefault = arg2;
  const cResult = require("c").c(10);
  let str = "useCanRingToGuildVoiceChannel";
  if (undefined !== arg1) {
    str = arg1;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg2) {
    class S {
      constructor() {
        tmp2 = null != closure_1;
        if (tmp2) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_8;
          tmp2 = closure_1(closure_2[14])(tmp, closure_8);
        }
        return tmp2;
      }
    }
    cResult[1] = arg2;
    cResult[2] = S;
    const tmp6 = S;
  } else {
    class S {
      constructor() {
        tmp2 = null != closure_1;
        if (tmp2) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_8;
          tmp2 = closure_1(closure_2[14])(tmp, closure_8);
        }
        return tmp2;
      }
    }
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        tmp2 = null != closure_1;
        if (tmp2) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_8;
          tmp2 = closure_1(closure_2[14])(tmp, closure_8);
        }
        return tmp2;
      }
    }
    const items1 = [GuildMemberStore, GuildVerificationStore];
    cResult[3] = items1;
    const tmp8 = items1;
  } else {
    class S {
      constructor() {
        tmp2 = null != closure_1;
        if (tmp2) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_8;
          tmp2 = closure_1(closure_2[14])(tmp, closure_8);
        }
        return tmp2;
      }
    }
  }
  if (arg2 != null) {
    class S {
      constructor() {
        tmp2 = null != closure_1;
        if (tmp2) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_8;
          tmp2 = closure_1(closure_2[14])(tmp, closure_8);
        }
        return tmp2;
      }
    }
  }
  if (cResult[4] === undefined) {
    class S {
      constructor() {
        tmp2 = null != closure_1;
        if (tmp2) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_8;
          tmp2 = closure_1(closure_2[14])(tmp, closure_8);
        }
        return tmp2;
      }
    }
    const stateFromStores1 = tmp(504).useStateFromStores(tmp8, fn);
    const tmp11 = importDefault;
    const tmpResult2 = tmp(504);
    if (arg2 != null) {
      class S {
        constructor() {
          tmp2 = null != closure_1;
          if (tmp2) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            tmp5 = closure_8;
            tmp2 = closure_1(closure_2[14])(tmp, closure_8);
          }
          return tmp2;
        }
      }
    }
    const needSubscriptionToAccess = useChannelRoleSubscriptionStatusDefault(tmp13).needSubscriptionToAccess;
    if (arg2 != null) {
      class S {
        constructor() {
          tmp2 = null != closure_1;
          if (tmp2) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            tmp5 = closure_8;
            tmp2 = closure_1(closure_2[14])(tmp, closure_8);
          }
          return tmp2;
        }
      }
    }
    if (cResult[7] === str) {
      class S {
        constructor() {
          tmp2 = null != closure_1;
          if (tmp2) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            tmp5 = closure_8;
            tmp2 = closure_1(closure_2[14])(tmp, closure_8);
          }
          return tmp2;
        }
      }
      const enabled = tmp11(9973).useExperiment(tmp15).enabled;
      if (arg2 != null) {
        class S {
          constructor() {
            tmp2 = null != closure_1;
            if (tmp2) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp5 = closure_8;
              tmp2 = closure_1(closure_2[14])(tmp, closure_8);
            }
            return tmp2;
          }
        }
      }
      if (enabled) {
        class S {
          constructor() {
            tmp2 = null != closure_1;
            if (tmp2) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp5 = closure_8;
              tmp2 = closure_1(closure_2[14])(tmp, closure_8);
            }
            return tmp2;
          }
        }
      }
      if (enabled) {
        class S {
          constructor() {
            tmp2 = null != closure_1;
            if (tmp2) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp5 = closure_8;
              tmp2 = closure_1(closure_2[14])(tmp, closure_8);
            }
            return tmp2;
          }
        }
      }
      if (enabled) {
        class S {
          constructor() {
            tmp2 = null != closure_1;
            if (tmp2) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp5 = closure_8;
              tmp2 = closure_1(closure_2[14])(tmp, closure_8);
            }
            return tmp2;
          }
        }
      }
      if (enabled) {
        class S {
          constructor() {
            tmp2 = null != closure_1;
            if (tmp2) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp5 = closure_8;
              tmp2 = closure_1(closure_2[14])(tmp, closure_8);
            }
            return tmp2;
          }
        }
      }
      return enabled;
    }
    const obj2 = { guildId: undefined, location: str };
    cResult[7] = str;
    cResult[8] = undefined;
    cResult[9] = obj2;
    tmp15 = obj2;
  }
  if (arg2 != null) {
    class S {
      constructor() {
        tmp2 = null != closure_1;
        if (tmp2) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          tmp5 = closure_8;
          tmp2 = closure_1(closure_2[14])(tmp, closure_8);
        }
        return tmp2;
      }
    }
  }
  fn = function b() {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    if (null == guild_id) {
      return false;
    } else {
      let canChat = null != GuildMemberStore.getMember(guild_id, id.id);
      if (canChat) {
        canChat = GuildVerificationStore.getCheck(guild_id).canChat;
      }
      return canChat;
    }
  };
  cResult[4] = undefined;
  cResult[5] = arg0;
  cResult[6] = fn;
}) : ((arg0, arg1, id) => {
  const _require = arg0;
  let str = arg1;
  if (arg1 === undefined) {
    str = "useCanRingToGuildVoiceChannel";
  }
  importDefault = id;
  const items = [PermissionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_1;
    if (tmp2) {
      tmp2 = canJoinVoiceChannelDefault(tmp, PermissionStore);
    }
    return tmp2;
  });
  const obj = require("initialize");
  const items1 = [GuildMemberStore, GuildVerificationStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    if (null == guild_id) {
      return false;
    } else {
      let canChat = null != GuildMemberStore.getMember(guild_id, id.id);
      if (canChat) {
        canChat = GuildVerificationStore.getCheck(guild_id).canChat;
      }
      return canChat;
    }
  });
  id = undefined;
  const obj2 = require("initialize");
  if (id != null) {
    id = id.id;
  }
  const tmp5 = useChannelRoleSubscriptionStatusDefault;
  let guild_id;
  if (id != null) {
    guild_id = id.guild_id;
  }
  let enabled = GuildVoiceRingingExperimentDefault.useExperiment({ guildId: guild_id, location: str }).enabled;
  if (id != null) {
    const type = id.type;
  }
  if (enabled) {
    enabled = type === constants.GUILD_VOICE;
  }
  if (enabled) {
    enabled = stateFromStores1;
  }
  if (enabled) {
    enabled = stateFromStores;
  }
  if (enabled) {
    enabled = !tmp5(id).needSubscriptionToAccess;
  }
  return enabled;
});
let closure_15 = tmp4;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/useCanRing.tsx");

export const useCanRing = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1, arg2) => {
  const _require = id;
  closure_1 = arg2;
  const cResult = require("c").c(15);
  const str = "useCanRing";
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg2) {
    class C {
      constructor() {
        return closure_5.getChannel(closure_1);
      }
    }
    cResult[1] = arg2;
    cResult[2] = C;
    const tmp6 = C;
  } else {
    class C {
      constructor() {
        return closure_5.getChannel(closure_1);
      }
    }
  }
  const obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_5.getChannel(closure_1);
      }
    }
    const items1 = [AuthenticationStore];
    cResult[3] = items1;
    const tmp8 = items1;
  } else {
    class C {
      constructor() {
        return closure_5.getChannel(closure_1);
      }
    }
  }
  if (cResult[4] !== id.id) {
    class C {
      constructor() {
        return closure_5.getChannel(closure_1);
      }
    }
    cResult[4] = id.id;
    cResult[5] = tmp10;
    const tmp9 = tmp10;
  } else {
    class C {
      constructor() {
        return closure_5.getChannel(closure_1);
      }
    }
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp9);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_5.getChannel(closure_1);
      }
    }
    const items2 = [RelationshipStore];
    cResult[6] = items2;
    const tmp12 = items2;
  } else {
    class C {
      constructor() {
        return closure_5.getChannel(closure_1);
      }
    }
  }
  if (cResult[7] !== id.id) {
    class L {
      constructor() {
        return closure_10.isFriend(closure_0.id);
      }
    }
    cResult[7] = id.id;
    cResult[8] = L;
    const tmp13 = L;
  } else {
    class L {
      constructor() {
        return closure_10.isFriend(closure_0.id);
      }
    }
  }
  const tmpResult4 = require("initialize");
  let stateFromStores2 = require("initialize").useStateFromStores(tmp12, tmp13);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return closure_10.isFriend(closure_0.id);
      }
    }
    const items3 = [PresenceStore];
    cResult[9] = items3;
    const tmp15 = items3;
  } else {
    class L {
      constructor() {
        return closure_10.isFriend(closure_0.id);
      }
    }
  }
  if (stateFromStores != null) {
    class L {
      constructor() {
        return closure_10.isFriend(closure_0.id);
      }
    }
  }
  if (cResult[10] === undefined) {
    class L {
      constructor() {
        return closure_10.isFriend(closure_0.id);
      }
    }
    const stateFromStores3 = tmp(tmp2[12]).useStateFromStores(tmp15, A);
    if (stateFromStores != null) {
      class L {
        constructor() {
          return closure_10.isFriend(closure_0.id);
        }
      }
    }
    if (cResult[13] !== undefined) {
      class L {
        constructor() {
          return closure_10.isFriend(closure_0.id);
        }
      }
      if (hasItem) {
        class L {
          constructor() {
            return closure_10.isFriend(closure_0.id);
          }
        }
        const CALLABLE = constants2.CALLABLE;
        hasItem = CALLABLE.has(tmp17);
      }
      cResult[13] = tmp17;
      cResult[14] = hasItem;
    } else {
      class L {
        constructor() {
          return closure_10.isFriend(closure_0.id);
        }
      }
    }
    const tmpResult6 = tmp(tmp2[12]);
    if (stateFromStores2) {
      class L {
        constructor() {
          return closure_10.isFriend(closure_0.id);
        }
      }
    }
    if (stateFromStores2) {
      class L {
        constructor() {
          return closure_10.isFriend(closure_0.id);
        }
      }
    }
    if (stateFromStores2) {
      class L {
        constructor() {
          return closure_10.isFriend(closure_0.id);
        }
      }
    }
    if (stateFromStores2) {
      class L {
        constructor() {
          return closure_10.isFriend(closure_0.id);
        }
      }
    }
    if (stateFromStores2) {
      class L {
        constructor() {
          return closure_10.isFriend(closure_0.id);
        }
      }
    }
    if (stateFromStores2) {
      class L {
        constructor() {
          return closure_10.isFriend(closure_0.id);
        }
      }
      stateFromStores2 = tmp21;
    }
    return stateFromStores2;
  }
  if (stateFromStores != null) {
    class L {
      constructor() {
        return closure_10.isFriend(closure_0.id);
      }
    }
  }
  class A {
    constructor() {
      tmp = closure_9.getStatus(closure_0.id) === StatusTypes.DND;
      if (tmp) {
        tmp2 = null;
        guild_id = undefined;
        if (closure_2 != null) {
          guild_id = closure_2.guild_id;
        }
        tmp = null != guild_id;
      }
      return tmp;
    }
  }
  cResult[10] = undefined;
  cResult[11] = id.id;
  cResult[12] = A;
}) : ((bot) => {
  const _require = bot;
  let str = arg1;
  if (arg1 === undefined) {
    str = "useCanRing";
  }
  closure_1 = arg2;
  let stateFromStores;
  const items = [ChannelStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(closure_1));
  const obj = require("initialize");
  const items1 = [AuthenticationStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => AuthenticationStore.getId() === bot.id);
  const obj2 = require("initialize");
  const items2 = [RelationshipStore];
  let stateFromStores2 = require("initialize").useStateFromStores(items2, () => RelationshipStore.isFriend(bot.id));
  const obj3 = require("initialize");
  const items3 = [PresenceStore];
  let type;
  const stateFromStores3 = require("initialize").useStateFromStores(items3, () => {
    let tmp = PresenceStore.getStatus(bot.id) === constants3.DND;
    if (tmp) {
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      tmp = null != guild_id;
    }
    return tmp;
  });
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let hasItem = null != type;
  if (hasItem) {
    const CALLABLE = constants2.CALLABLE;
    hasItem = CALLABLE.has(type);
  }
  let tmp8 = closure_15(bot, str, stateFromStores);
  if (stateFromStores2) {
    stateFromStores2 = !stateFromStores3;
  }
  if (stateFromStores2) {
    stateFromStores2 = !stateFromStores1;
  }
  if (stateFromStores2) {
    stateFromStores2 = !bot.bot;
  }
  if (stateFromStores2) {
    stateFromStores2 = !bot.system;
  }
  if (stateFromStores2) {
    stateFromStores2 = !bot.isProvisional;
  }
  if (stateFromStores2) {
    if (!tmp8) {
      tmp8 = hasItem;
    }
    stateFromStores2 = tmp8;
  }
  return stateFromStores2;
});
export const canRingUsersInChannel = function canRingUsersInChannel(channel) {
  const CALLABLE = constants2.CALLABLE;
  if (CALLABLE.has(channel.type)) {
    const call = CallStore.getCall(channel.id);
    return null != call && null != call.messageId && !CallStore.isCallUnavailable(channel.id);
  } else if (tmp === tmp2) {
    const obj2 = { guildId: channel.guild_id, location: "ring" };
    let enabled = GuildVoiceRingingExperimentDefault.getCurrentConfig(obj2).enabled;
    const voiceState = VoiceStateStore.getVoiceState(channel.guild_id, AuthenticationStore.getId());
    if (enabled) {
      enabled = null != voiceState;
    }
    if (enabled) {
      enabled = voiceState.channelId === channel.id;
    }
    return enabled;
  } else {
    return false;
  }
};
export const useCanRingToGuildVoiceChannel = tmp4;
