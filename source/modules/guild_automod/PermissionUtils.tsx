// Module ID: 15517
// Function ID: 119647
// Name: getHasAutomodAccess
// Dependencies: [1838, 3758, 653, 566, 2]
// Exports: canCurrentUserManageAutomod, canCurrentUserManageMessageFilters, useCanCurrentUserManageAutomod, useIsUserProfileRuleEnabled

// Module 15517 (getHasAutomodAccess)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function getHasAutomodAccess(guild_id) {
  let obj = arg1;
  let obj2 = arg2;
  if (arg1 === undefined) {
    obj = _createForOfIteratorHelperLoose;
  }
  if (obj2 === undefined) {
    obj2 = _isNativeReflectConstruct;
  }
  const guild = obj.getGuild(guild_id);
  let canResult = null != guild;
  if (canResult) {
    canResult = obj2.can(constants.MANAGE_GUILD, guild);
  }
  return canResult;
}
({ GuildFeatures: closure_4, Permissions: closure_5 } = ME);
const result = require("ME").fileFinishedImporting("modules/guild_automod/PermissionUtils.tsx");

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
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => outer1_6(closure_0, outer1_2, outer1_3), items1);
};
export const useIsUserProfileRuleEnabled = function useIsUserProfileRuleEnabled(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => {
    const guild = outer1_2.getGuild(closure_0);
    let flag;
    if (null != guild) {
      const features = guild.features;
      flag = features.has(outer1_4.COMMUNITY);
    }
    if (!flag) {
      flag = false;
    }
    return flag;
  }, items1);
};
