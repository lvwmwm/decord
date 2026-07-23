// Module ID: 10980
// Function ID: 85392
// Name: getGuildMemberAgeInRange
// Dependencies: [1917, 1838, 3758, 1849, 3746, 653, 566, 21, 1360, 2]
// Exports: useCanBanMember, useCanKickMember, useCanManageMessages, useNewMemberBadge

// Module 10980 (getGuildMemberAgeInRange)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { GuildMemberFlags } from "GuildMemberFlags";
import { Permissions } from "ME";

const require = arg1;
function getGuildMemberAgeInRange(guildId, arg1, id) {
  let maxDaysOld;
  let minDaysOld;
  ({ maxDaysOld, minDaysOld } = arg1);
  if (minDaysOld === undefined) {
    minDaysOld = 0;
  }
  guild = guild.getGuild(guildId);
  let joinedAt;
  if (null != guild) {
    joinedAt = guild.joinedAt;
  }
  if (null != id) {
    member = member.getMember(guildId, id);
    let joinedAt1;
    if (null != member) {
      joinedAt1 = member.joinedAt;
    }
    let date = null;
    if (null != joinedAt1) {
      const _Date = Date;
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
    let tmp13 = null == maxDaysOld;
    if (!tmp13) {
      tmp13 = diff <= c9 * maxDaysOld;
    }
    if (tmp13) {
      tmp13 = diff >= c9 * minDaysOld;
    }
    return tmp13;
  }
}
function useGuildMemberAgeInRange(arg0, arg1, arg2) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const items = [arg1, arg0, arg2];
  return _require(566).useStateFromStores([], () => outer1_10(closure_0, closure_1, closure_2), items);
}
function canKickMember(user, guild) {
  let tmp3;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_5];
    tmp = items;
  }
  [tmp3] = tmp;
  let tmp4 = null != guild;
  if (tmp4) {
    const items1 = [tmp3];
    tmp4 = hasKickMemberPerms(user, guild, items1);
  }
  if (tmp4) {
    tmp4 = !user.isProvisional;
  }
  return tmp4;
}
function hasKickMemberPerms(isNonUserBot, guild, items1) {
  let obj;
  let tmp = items1;
  if (items1 === undefined) {
    const items = [closure_5];
    tmp = items;
  }
  [obj] = tmp;
  let canManageUserResult = null != guild;
  if (canManageUserResult) {
    canManageUserResult = obj.canManageUser(Permissions.KICK_MEMBERS, isNonUserBot, guild);
  }
  if (canManageUserResult) {
    canManageUserResult = !isNonUserBot.isNonUserBot();
  }
  return canManageUserResult;
}
function canBanMember(user, guild) {
  let tmp3;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_5];
    tmp = items;
  }
  [tmp3] = tmp;
  let tmp4 = null != guild;
  if (tmp4) {
    const items1 = [tmp3];
    tmp4 = hasBanMemberPerms(user, guild, items1);
  }
  if (tmp4) {
    tmp4 = !user.isProvisional;
  }
  return tmp4;
}
function hasBanMemberPerms(isNonUserBot, guild, items1) {
  let obj;
  let tmp = items1;
  if (items1 === undefined) {
    const items = [closure_5];
    tmp = items;
  }
  [obj] = tmp;
  let canManageUserResult = null != guild;
  if (canManageUserResult) {
    canManageUserResult = obj.canManageUser(Permissions.BAN_MEMBERS, isNonUserBot, guild);
  }
  if (canManageUserResult) {
    canManageUserResult = !isNonUserBot.isNonUserBot();
  }
  if (canManageUserResult) {
    canManageUserResult = !isNonUserBot.bot;
  }
  return canManageUserResult;
}
function canManageMessages(isNonUserBot) {
  let obj;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_5];
    tmp = items;
  }
  [obj] = tmp;
  let canManageUserResult = null != isNonUserBot && null != arg1;
  if (canManageUserResult) {
    canManageUserResult = obj.canManageUser(Permissions.MANAGE_MESSAGES, isNonUserBot, arg1);
  }
  if (canManageUserResult) {
    canManageUserResult = !isNonUserBot.isNonUserBot();
  }
  return canManageUserResult;
}
let c9 = 86400000;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_member/GuildMemberUtils.tsx");

export { getGuildMemberAgeInRange };
export { useGuildMemberAgeInRange };
export const useNewMemberBadge = function useNewMemberBadge(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    let flags;
    const member = outer1_3.getMember(callback, closure_1);
    if (null != member) {
      flags = member.flags;
    }
    let num = 0;
    if (null != flags) {
      num = flags;
    }
    return callback(outer1_2[8]).hasFlag(num, outer1_7.DID_REJOIN);
  });
  let obj = _require(566);
  const items1 = [_createForOfIteratorHelperLoose];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => {
    const guild = outer1_4.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      const _Date = Date;
      const obj = callback2(outer1_2[7]);
      tmp2 = Date.now() - callback2(outer1_2[7]).extractTimestamp(guild.id) < 604800000;
      const extractTimestampResult = callback2(outer1_2[7]).extractTimestamp(guild.id);
    }
    return tmp2;
  });
  const obj2 = _require(566);
  const items2 = [closure_6];
  const stateFromStores2 = _require(566).useStateFromStores(items2, () => {
    const user = outer1_6.getUser(closure_1);
    let bot;
    if (null != user) {
      bot = user.bot;
    }
    return bot;
  });
  const obj3 = _require(566);
  return useGuildMemberAgeInRange(arg0, { maxDaysOld: 7 }, arg1) && !stateFromStores1 && !stateFromStores2 && !stateFromStores;
};
export const useCanKickMember = function useCanKickMember(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let items = [closure_5];
  return _require(566).useStateFromStores(items, () => {
    const items = [outer1_5];
    return outer1_12(closure_0, closure_1, items);
  });
};
export { canKickMember };
export { hasKickMemberPerms };
export const useCanBanMember = function useCanBanMember(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  return _require(566).useStateFromStores([], () => outer1_14(closure_0, closure_1));
};
export { canBanMember };
export { hasBanMemberPerms };
export const useCanManageMessages = function useCanManageMessages(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let items = [closure_5];
  return _require(566).useStateFromStores(items, () => {
    const items = [outer1_5];
    return outer1_16(closure_0, closure_1, items);
  });
};
export { canManageMessages };
