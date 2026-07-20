// Module ID: 10964
// Function ID: 85298
// Name: getGuildMemberAgeInRange
// Dependencies: []
// Exports: useCanBanMember, useCanKickMember, useCanManageMessages, useNewMemberBadge

// Module 10964 (getGuildMemberAgeInRange)
function getGuildMemberAgeInRange(guildId, arg1, id) {
  let maxDaysOld;
  let minDaysOld;
  ({ maxDaysOld, minDaysOld } = arg1);
  if (minDaysOld === undefined) {
    minDaysOld = 0;
  }
  const guild = guild.getGuild(guildId);
  let joinedAt;
  if (null != guild) {
    joinedAt = guild.joinedAt;
  }
  if (null != id) {
    const member = member.getMember(guildId, id);
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
      tmp13 = diff <= closure_9 * maxDaysOld;
    }
    if (tmp13) {
      tmp13 = diff >= closure_9 * minDaysOld;
    }
    return tmp13;
  }
}
function useGuildMemberAgeInRange(arg0, arg1, arg2) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const items = [arg1, arg0, arg2];
  return arg1(dependencyMap[6]).useStateFromStores([], () => callback(arg0, arg1, arg2), items);
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const GuildMemberFlags = arg1(dependencyMap[4]).GuildMemberFlags;
const Permissions = arg1(dependencyMap[5]).Permissions;
let closure_9 = 86400000;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_member/GuildMemberUtils.tsx");

export { getGuildMemberAgeInRange };
export { useGuildMemberAgeInRange };
export const useNewMemberBadge = function useNewMemberBadge(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => {
    let flags;
    const member = member.getMember(arg0, arg1);
    if (null != member) {
      flags = member.flags;
    }
    let num = 0;
    if (null != flags) {
      num = flags;
    }
    return arg0(closure_2[8]).hasFlag(num, constants.DID_REJOIN);
  });
  const obj = arg1(dependencyMap[6]);
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[6]).useStateFromStores(items1, () => {
    const guild = guild.getGuild(arg0);
    let tmp2 = null != guild;
    if (tmp2) {
      const _Date = Date;
      const obj = arg1(closure_2[7]);
      tmp2 = Date.now() - arg1(closure_2[7]).extractTimestamp(guild.id) < 604800000;
      const extractTimestampResult = arg1(closure_2[7]).extractTimestamp(guild.id);
    }
    return tmp2;
  });
  const obj2 = arg1(dependencyMap[6]);
  const items2 = [closure_6];
  const stateFromStores2 = arg1(dependencyMap[6]).useStateFromStores(items2, () => {
    const user = user.getUser(arg1);
    let bot;
    if (null != user) {
      bot = user.bot;
    }
    return bot;
  });
  const obj3 = arg1(dependencyMap[6]);
  return useGuildMemberAgeInRange(arg0, { maxDaysOld: 7 }, arg1) && !stateFromStores1 && !stateFromStores2 && !stateFromStores;
};
export const useCanKickMember = function useCanKickMember(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [closure_5];
  return arg1(dependencyMap[6]).useStateFromStores(items, () => {
    const items = [closure_5];
    return callback(arg0, arg1, items);
  });
};
export { canKickMember };
export { hasKickMemberPerms };
export const useCanBanMember = function useCanBanMember(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  return arg1(dependencyMap[6]).useStateFromStores([], () => callback(arg0, arg1));
};
export { canBanMember };
export { hasBanMemberPerms };
export const useCanManageMessages = function useCanManageMessages(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  const items = [closure_5];
  return arg1(dependencyMap[6]).useStateFromStores(items, () => {
    const items = [closure_5];
    return callback(arg0, arg1, items);
  });
};
export { canManageMessages };
