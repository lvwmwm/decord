// Module ID: 15392
// Function ID: 117430
// Name: getHasAutomodAccess
// Dependencies: []
// Exports: canCurrentUserManageAutomod, canCurrentUserManageMessageFilters, useCanCurrentUserManageAutomod, useIsUserProfileRuleEnabled

// Module 15392 (getHasAutomodAccess)
function getHasAutomodAccess(guild_id) {
  let obj = arg1;
  let obj2 = arg2;
  if (arg1 === undefined) {
    obj = closure_2;
  }
  if (obj2 === undefined) {
    obj2 = closure_3;
  }
  const guild = obj.getGuild(guild_id);
  let canResult = null != guild;
  if (canResult) {
    canResult = obj2.can(constants.MANAGE_GUILD, guild);
  }
  return canResult;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ GuildFeatures: closure_4, Permissions: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_automod/PermissionUtils.tsx");

export const canCurrentUserManageMessageFilters = function canCurrentUserManageMessageFilters(guild_id) {
  let tmp = null != guild_id;
  if (tmp) {
    tmp = getHasAutomodAccess(guild_id);
  }
  return tmp;
};
export const canCurrentUserManageAutomod = function canCurrentUserManageAutomod(guild_id) {
  return getHasAutomodAccess(guild_id);
};
export const useCanCurrentUserManageAutomod = function useCanCurrentUserManageAutomod(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_3];
  const items1 = [arg0];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => callback(arg0, closure_2, closure_3), items1);
};
export const useIsUserProfileRuleEnabled = function useIsUserProfileRuleEnabled(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    let flag;
    if (null != guild) {
      const features = guild.features;
      flag = features.has(constants.COMMUNITY);
    }
    if (!flag) {
      flag = false;
    }
    return flag;
  }, items1);
};
