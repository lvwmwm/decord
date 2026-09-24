// Module ID: 5666
// Function ID: 5667
// Name: StageChannelPermissionUtils
// Dependencies: [4432, 2063, 502, 2045, 2067, 4431, 2050, 1078, 1090, 4436, 2053, 558, 568, 504, 2]
// Exports: canLurkerListen, createModeratorOverwrite, createOrUpdateModeratorOverwrite, isEmptyOverwrite, removeModeratorOverwrite

// Module 5666 (StageChannelPermissionUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1090 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2053 */;
import PermissionUtilsAll from "PermissionUtils" /* 4436 */;
import LurkingStore from "LurkingStore" /* 4432 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4431 */;
import StageInstanceStore from "StageInstanceStore" /* 2050 */;

const require = globalThis.__r;

require = fn;
const isGuildOwner = fn(2063).isGuildOwner;
const Constants = fn(1078);
({ GuildFeatures: c10, Permissions: closure_11 } = Constants);
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, AuthenticationStore, GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class E {
      constructor() {
        id = closure_5.getId();
        guild = closure_7.getGuild(closure_0);
        tmp3 = null != guild;
        if (tmp3) {
          features = guild.features;
          tmp4 = GuildFeatures;
          tmp5 = features.has(GuildFeatures.COMMUNITY);
          if (tmp5) {
            tmp6 = isGuildOwner;
            tmp7 = isGuildOwner(guild, id);
            if (!tmp7) {
              tmp8 = closure_8;
              tmp9 = closure_0;
              tmp10 = closure_2;
              tmp7 = closure_8.can(closure_0(closure_2[10]).CREATE_STAGE_CHANNEL_PERMISSIONS, guild);
            }
            tmp5 = tmp7;
          }
          tmp3 = tmp5;
        }
        return tmp3;
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = E;
    cResult[3] = items1;
    let tmp9 = items1;
    const tmp8 = E;
  } else {
    class E {
      constructor() {
        id = closure_5.getId();
        guild = closure_7.getGuild(closure_0);
        tmp3 = null != guild;
        if (tmp3) {
          features = guild.features;
          tmp4 = GuildFeatures;
          tmp5 = features.has(GuildFeatures.COMMUNITY);
          if (tmp5) {
            tmp6 = isGuildOwner;
            tmp7 = isGuildOwner(guild, id);
            if (!tmp7) {
              tmp8 = closure_8;
              tmp9 = closure_0;
              tmp10 = closure_2;
              tmp7 = closure_8.can(closure_0(closure_2[10]).CREATE_STAGE_CHANNEL_PERMISSIONS, guild);
            }
            tmp5 = tmp7;
          }
          tmp3 = tmp5;
        }
        return tmp3;
      }
    }
    tmp9 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp8, tmp9);
}) : ((arg0) => {
  _require = arg0;
  const items = [PermissionStore, AuthenticationStore, GuildStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const id = AuthenticationStore.getId();
    guild = GuildStore.getGuild(closure_0);
    let tmp3 = null != guild;
    if (tmp3) {
      const features = guild.features;
      let hasItem = features.has(constants.COMMUNITY);
      if (hasItem) {
        let canResult = isGuildOwner(guild, id);
        if (!canResult) {
          canResult = PermissionStore.can(StageChannelPermissions.CREATE_STAGE_CHANNEL_PERMISSIONS, guild);
        }
        hasItem = canResult;
      }
      tmp3 = hasItem;
    }
    return tmp3;
  }, items1);
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore, GuildStore, ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const channel = ChannelStore.getChannel(closure_0);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      const canResult = PermissionStore.can(constants2.ADMINISTRATOR, GuildStore.getGuild(guildId));
      let tmp5 = !canResult;
      if (!canResult) {
        tmp5 = !obj2.can(constants2.MANAGE_ROLES, channel, undefined, undefined, true);
      }
      let canResult1 = !tmp5;
      if (tmp5) {
        canResult1 = obj2.can(StageChannelPermissions.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, channel);
      }
      return canResult1;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp8, tmp9);
}) : ((arg0) => {
  _require = arg0;
  const items = [PermissionStore, GuildStore, ChannelStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const canResult = PermissionStore.can(constants2.ADMINISTRATOR, GuildStore.getGuild(guildId));
    let tmp5 = !canResult;
    if (!canResult) {
      tmp5 = !obj2.can(constants2.MANAGE_ROLES, channel, undefined, undefined, true);
    }
    let canResult1 = !tmp5;
    if (tmp5) {
      canResult1 = obj2.can(StageChannelPermissions.UPDATE_STAGE_CHANNEL_MODERATOR_PERMISSIONS, channel);
    }
    return canResult1;
  }, items1);
});
function createOrUpdateModeratorOverwrite(id, type, deny) {
  const obj = { id, type, deny: null, allow: null };
  deny = undefined;
  if (deny != null) {
    deny = deny.deny;
  }
  if (deny == null) {
    deny = tmp(4436).NONE;
  }
  obj.deny = BigFlagUtilsAll.remove(deny, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS);
  let allow;
  if (deny != null) {
    allow = deny.allow;
  }
  if (allow == null) {
    allow = tmp(4436).NONE;
  }
  obj.allow = BigFlagUtilsAll.combine(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, allow);
  return obj;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageChannelPermissionUtils.tsx");

export const createModeratorOverwrite = function createModeratorOverwrite(id, MEMBER, arg2) {
  let tmp;
  if (arg2 != null) {
    tmp = arg2.permissionOverwrites[id];
  }
  const obj = { id, type: MEMBER, deny: null, allow: null };
  let deny;
  if (tmp != null) {
    deny = tmp.deny;
  }
  if (deny == null) {
    deny = tmp2(4436).NONE;
  }
  obj.deny = BigFlagUtilsAll.remove(deny, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS);
  let allow;
  if (tmp != null) {
    allow = tmp.allow;
  }
  if (allow == null) {
    allow = tmp2(4436).NONE;
  }
  obj.allow = BigFlagUtilsAll.combine(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, allow);
  return obj;
};
export { createOrUpdateModeratorOverwrite };
export const removeModeratorOverwrite = function removeModeratorOverwrite(id, MEMBER, name) {
  let tmp;
  if (name != null) {
    tmp = name.permissionOverwrites[id];
  }
  const obj = { id, type: MEMBER, deny: null, allow: null };
  let deny;
  if (tmp != null) {
    deny = tmp.deny;
  }
  if (deny == null) {
    deny = PermissionUtilsAll.NONE;
  }
  obj.deny = deny;
  let allow;
  if (tmp != null) {
    allow = tmp.allow;
  }
  if (allow == null) {
    allow = PermissionUtilsAll.NONE;
  }
  obj.allow = BigFlagUtilsAll.remove(allow, StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS);
  return obj;
};
export const isEmptyOverwrite = function isEmptyOverwrite(arg0) {
  ({ allow, deny } = arg0);
  let equalsResult = BigFlagUtilsAll.equals(allow, PermissionUtilsAll.NONE);
  if (equalsResult) {
    equalsResult = tmp(1090).equals(deny, tmp(4436).NONE);
    const tmpResult = tmp(1090);
  }
  return equalsResult;
};
export const useCanCreateStageChannelByGuild = tmp3;
export const useCanUpdateStageChannelModerators = tmp4;
export const useCanModerateRequestToSpeak = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let canResult = null != closure_0;
      if (canResult) {
        canResult = PermissionStore.can(constants2.MUTE_MEMBERS, ChannelStore.getChannel(tmp));
      }
      return canResult;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  _require = arg0;
  const items = [ChannelStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = PermissionStore.can(constants2.MUTE_MEMBERS, ChannelStore.getChannel(tmp));
    }
    return canResult;
  }, items1);
});
export const canLurkerListen = function canLurkerListen(channel) {
  const tmp = null == channel || !channel.isGuildStageVoice();
  let tmp2 = !tmp;
  if (!tmp) {
    let isLurkingResult = LurkingStore.isLurking(channel.guild_id);
    if (isLurkingResult) {
      let canResult = StageInstanceStore.isPublic(channel.id);
      if (canResult) {
        canResult = PermissionStore.can(StageChannelPermissions.JOIN_VOCAL_CHANNEL_PERMISSIONS, channel);
      }
      isLurkingResult = canResult;
    }
    tmp2 = isLurkingResult;
  }
  return tmp2;
};
