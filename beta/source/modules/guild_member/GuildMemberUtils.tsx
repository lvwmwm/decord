// Module ID: 11313
// Function ID: 11314
// Name: GuildMemberUtils
// Dependencies: [2108, 2067, 4469, 1372, 4455, 1074, 504, 11, 1385, 2]
// Exports: canManageMessages, hasBanMemberPerms, hasKickMemberPerms, useCanBanMember, useCanKickMember, useCanManageMessages, useGuildMemberAgeInRange, useNewMemberBadge

// Module 11313 (GuildMemberUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Constants from "Constants" /* 1074 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4455 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

function getGuildMemberAgeInRange(arg0, arg1, arg2) {
  let maxDaysOld;
  let minDaysOld;
  ({ maxDaysOld, minDaysOld } = arg1);
  if (minDaysOld === undefined) {
    minDaysOld = 0;
  }
  const guild = GuildStore.getGuild(arg0);
  let joinedAt;
  if (guild != null) {
    joinedAt = guild.joinedAt;
  }
  if (null != arg2) {
    const member = GuildMemberStore.getMember(arg0, arg2);
    let joinedAt1;
    if (member != null) {
      joinedAt1 = member.joinedAt;
    }
    let date = null;
    if (null != joinedAt1) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(member.joinedAt);
    }
    joinedAt = date;
  }
  if (null == joinedAt) {
    return false;
  } else {
    const _Date2 = Date;
    const timestamp = Date.now();
    const diff = timestamp - joinedAt.getTime();
    return (null == maxDaysOld || diff <= c9 * maxDaysOld) && diff >= c9 * minDaysOld;
  }
}
function canKickMember(user, guild, items) {
  let obj;
  let tmp3;
  let tmp = items;
  if (items === undefined) {
    items = [PermissionStore];
    tmp = items;
  }
  [tmp3] = tmp;
  let tmp4 = null != guild;
  if (tmp4) {
    const items1 = [tmp3];
    [obj] = items1;
    tmp4 = null != guild && obj.canManageUser(Permissions.KICK_MEMBERS, user, guild) && !user.isNonUserBot();
    const canManageUserResult = null != guild && obj.canManageUser(Permissions.KICK_MEMBERS, user, guild) && !user.isNonUserBot();
  }
  if (tmp4) {
    tmp4 = !user.isProvisional;
  }
  return tmp4;
}
function canBanMember(user, guild) {
  let obj;
  let tmp3;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [PermissionStore];
    tmp = items;
  }
  [tmp3] = tmp;
  let tmp4 = null != guild;
  if (tmp4) {
    const items1 = [tmp3];
    [obj] = items1;
    tmp4 = null != guild && obj.canManageUser(Permissions.BAN_MEMBERS, user, guild) && !user.isNonUserBot() && !user.bot;
    const canManageUserResult = null != guild && obj.canManageUser(Permissions.BAN_MEMBERS, user, guild) && !user.isNonUserBot() && !user.bot;
  }
  if (tmp4) {
    tmp4 = !user.isProvisional;
  }
  return tmp4;
}
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const Permissions = Constants.Permissions;
let c9 = 86400000;
const result = size.fileFinishedImporting("modules/guild_member/GuildMemberUtils.tsx");

export { getGuildMemberAgeInRange };
export const useGuildMemberAgeInRange = function useGuildMemberAgeInRange(arg0, arg1, arg2) {
  let closure_0;
  let closure_2;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  const items = [arg1, arg0, arg2];
  const obj = require("get initialized");
  return obj.useStateFromStores([], () => getGuildMemberAgeInRange(closure_0, obj4, closure_2), items);
};
export const useNewMemberBadge = function useNewMemberBadge(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const hasFlag = FlagUtils.hasFlag;
    FlagUtils;
    const member = GuildMemberStore.getMember(closure_0, closure_1);
    let num;
    if (member != null) {
      num = member.flags;
    }
    if (num == null) {
      num = 0;
    }
    return hasFlag(num, GuildMemberFlags.DID_REJOIN);
  });
  const items1 = [GuildStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      const _Date = Date;
      const obj = SnowflakeUtilsDefault;
      const extractTimestampResult = obj.extractTimestamp(guild.id);
      tmp2 = Date.now() - extractTimestampResult < 604800000;
    }
    return tmp2;
  });
  const items2 = [UserStore];
  const obj4 = { maxDaysOld: 7 };
  const obj3 = require("get initialized");
  _require = arg0;
  let closure_2 = arg1;
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const user = UserStore.getUser(closure_1);
    let bot;
    if (user != null) {
      bot = user.bot;
    }
    return bot;
  });
  const items3 = [obj4, arg0, arg1];
  const obj5 = require("get initialized");
  const tmp4 = obj5.useStateFromStores([], () => getGuildMemberAgeInRange(closure_0, obj4, closure_2), items3) && !stateFromStores1 && !stateFromStores2 && !stateFromStores;
  return tmp4;
};
export const useCanKickMember = function useCanKickMember(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const items = [PermissionStore];
    return canKickMember(closure_0, closure_1, items);
  });
};
export { canKickMember };
export const hasKickMemberPerms = function hasKickMemberPerms(isNonUserBot, stateFromStores) {
  let obj;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [PermissionStore];
    tmp = items;
  }
  [obj] = tmp;
  const canManageUserResult = null != stateFromStores && obj.canManageUser(Permissions.KICK_MEMBERS, isNonUserBot, stateFromStores) && !isNonUserBot.isNonUserBot();
  return canManageUserResult;
};
export const useCanBanMember = function useCanBanMember(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const obj = require("get initialized");
  return obj.useStateFromStores([], () => canBanMember(closure_0, closure_1));
};
export { canBanMember };
export const hasBanMemberPerms = function hasBanMemberPerms(isNonUserBot, stateFromStores) {
  let obj;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [PermissionStore];
    tmp = items;
  }
  [obj] = tmp;
  const canManageUserResult = null != stateFromStores && obj.canManageUser(Permissions.BAN_MEMBERS, isNonUserBot, stateFromStores) && !isNonUserBot.isNonUserBot() && !isNonUserBot.bot;
  return canManageUserResult;
};
export const useCanManageMessages = function useCanManageMessages(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const obj = require("get initialized");
  let items = [PermissionStore];
  return obj.useStateFromStores(items, () => {
    let obj2;
    const items = [PermissionStore];
    [obj2] = items;
    const canManageUserResult = null != obj && null != tmp && obj2.canManageUser(Permissions.MANAGE_MESSAGES, obj, tmp) && !obj.isNonUserBot();
    return canManageUserResult;
  });
};
export const canManageMessages = function canManageMessages(isNonUserBot, stateFromStores) {
  let obj;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [PermissionStore];
    tmp = items;
  }
  [obj] = tmp;
  const canManageUserResult = null != isNonUserBot && null != stateFromStores && obj.canManageUser(Permissions.MANAGE_MESSAGES, isNonUserBot, stateFromStores) && !isNonUserBot.isNonUserBot();
  return canManageUserResult;
};
