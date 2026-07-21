// Module ID: 5642
// Function ID: 48231
// Name: getContextForPermission
// Dependencies: []
// Exports: canBulkBanUser, canPruneGuildMembers, useCanAccessBulkBanningFeature, useCanAccessInviteCodeFeature, useCanBulkBanUser

// Module 5642 (getContextForPermission)
function getContextForPermission(guildId, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_7, closure_8];
    tmp = items;
  }
  const tmp4 = callback(tmp, 2);
  const first = tmp4[0];
  const guild = first.getGuild(guildId);
  const currentUser = tmp4[1].getCurrentUser();
}
function canAccessMemberSafetyPage(guildId) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_5, closure_7];
    tmp = items;
  }
  getContextForPermission(guildId, tmp);
  return false;
}
function hasBulkBanningPermissions(guildId) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_5, closure_7];
    tmp = items;
  }
  getContextForPermission(guildId, tmp);
  return false;
}
function useCanAccessMemberSafetyPage(id) {
  const arg1 = id;
  const items = [closure_5, closure_7];
  const items1 = [id];
  return arg1(dependencyMap[9]).useStateFromStores(items, () => {
    const items = [closure_5, closure_7];
    callback(arg0, items);
    return false;
  }, items1);
}
let closure_3 = importDefault(dependencyMap[0]);
const isGuildOwner = arg1(dependencyMap[1]).isGuildOwner;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).MemberSafetyPagePermissions;
({ GuildFeatures: closure_9, Permissions: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx");

export { getContextForPermission };
export { canAccessMemberSafetyPage };
export { hasBulkBanningPermissions };
export const canPruneGuildMembers = function canPruneGuildMembers(guild, currentUser, callback1) {
  let obj = callback1;
  if (callback1 === undefined) {
    obj = closure_6;
  }
  const features = guild.features;
  if (features.has(constants.PRUNE_REQUIRES_ADMIN)) {
    let canResult = isGuildOwner(guild, currentUser);
    if (!canResult) {
      canResult = obj.can(constants2.ADMINISTRATOR, guild);
    }
    let canResult1 = canResult;
  } else {
    canResult1 = obj.can(importAll(dependencyMap[7]).combine(constants2.MANAGE_GUILD, constants2.KICK_MEMBERS), guild);
    const obj2 = importAll(dependencyMap[7]);
  }
  return canResult1;
};
export { useCanAccessMemberSafetyPage };
export const useCanAccessBulkBanningFeature = function useCanAccessBulkBanningFeature(id) {
  const arg1 = id;
  let stateFromStores = useCanAccessMemberSafetyPage(id);
  const items = [closure_5, closure_7];
  const items1 = [id];
  if (stateFromStores) {
    stateFromStores = obj.useStateFromStores(items, () => {
      const items = [closure_5, closure_7];
      callback(arg0, items);
      return false;
    }, items1);
  }
  return stateFromStores;
};
export const useCanAccessInviteCodeFeature = function useCanAccessInviteCodeFeature(arg0) {
  const arg1 = arg0;
  const items = [closure_5, closure_6];
  const items1 = [arg0];
  return arg1(dependencyMap[9]).useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    let canResult = null != guild;
    if (canResult) {
      canResult = closure_6.can(constants.MANAGE_GUILD, guild);
    }
    return canResult;
  }, items1);
};
export const useCanBulkBanUser = function useCanBulkBanUser(arg0, arg1, arg2) {
  arg1 = arg0;
  const importAll = arg1;
  const dependencyMap = arg2;
  const items = [closure_6, closure_5];
  const items1 = [arg1, arg0, arg2];
  return arg1(dependencyMap[9]).useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    let tmp2 = null != guild;
    if (tmp2) {
      let canManageUserResult = arg1;
      if (arg1) {
        canManageUserResult = closure_6.canManageUser(constants.BAN_MEMBERS, arg2, guild);
      }
      tmp2 = canManageUserResult;
    }
    return tmp2;
  }, items1);
};
export const canBulkBanUser = function canBulkBanUser(guildId) {
  let canManageUserResult = arg1;
  const guild = guild.getGuild(guildId);
  let tmp3 = null != guild;
  if (tmp3) {
    if (canManageUserResult) {
      canManageUserResult = closure_6.canManageUser(constants2.BAN_MEMBERS, arg2, guild);
    }
    tmp3 = canManageUserResult;
  }
  return tmp3;
};
