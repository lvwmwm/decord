// Module ID: 5646
// Function ID: 48276
// Name: getContextForPermission
// Dependencies: [57, 1391, 1838, 3758, 1849, 3762, 653, 483, 3763, 566, 2]
// Exports: canBulkBanUser, canPruneGuildMembers, useCanAccessBulkBanningFeature, useCanAccessInviteCodeFeature, useCanBulkBanUser

// Module 5646 (getContextForPermission)
import _slicedToArray from "_slicedToArray";
import { isGuildOwner } from "isGuildOwner";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { MemberSafetyPagePermissions as closure_8 } from "MemberSafetyPagePermissions";
import ME from "ME";

let closure_10;
let closure_9;
const require = arg1;
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
    const items = [_createForOfIteratorHelperLoose, closure_7];
    tmp = items;
  }
  getContextForPermission(guildId, tmp);
  return false;
}
function hasBulkBanningPermissions(guildId) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [_createForOfIteratorHelperLoose, closure_7];
    tmp = items;
  }
  getContextForPermission(guildId, tmp);
  return false;
}
function useCanAccessMemberSafetyPage(id) {
  const _require = id;
  let items = [_createForOfIteratorHelperLoose, closure_7];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => {
    const items = [outer1_5, outer1_7];
    outer1_12(closure_0, items);
    return false;
  }, items1);
}
({ GuildFeatures: closure_9, Permissions: closure_10 } = ME);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx");

export { getContextForPermission };
export { canAccessMemberSafetyPage };
export { hasBulkBanningPermissions };
export const canPruneGuildMembers = function canPruneGuildMembers(guild, currentUser, callback1) {
  let obj = callback1;
  if (callback1 === undefined) {
    obj = _isNativeReflectConstruct;
  }
  const features = guild.features;
  if (features.has(constants.PRUNE_REQUIRES_ADMIN)) {
    let canResult = isGuildOwner(guild, currentUser);
    if (!canResult) {
      canResult = obj.can(constants2.ADMINISTRATOR, guild);
    }
    let canResult1 = canResult;
  } else {
    canResult1 = obj.can(importAll(483).combine(constants2.MANAGE_GUILD, constants2.KICK_MEMBERS), guild);
    const obj2 = importAll(483);
  }
  return canResult1;
};
export { useCanAccessMemberSafetyPage };
export const useCanAccessBulkBanningFeature = function useCanAccessBulkBanningFeature(id) {
  const _require = id;
  let stateFromStores = useCanAccessMemberSafetyPage(id);
  let items = [_createForOfIteratorHelperLoose, closure_7];
  const items1 = [id];
  if (stateFromStores) {
    stateFromStores = obj.useStateFromStores(items, () => {
      const items = [outer1_5, outer1_7];
      outer1_13(closure_0, items);
      return false;
    }, items1);
  }
  return stateFromStores;
};
export const useCanAccessInviteCodeFeature = function useCanAccessInviteCodeFeature(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => {
    const guild = outer1_5.getGuild(closure_0);
    let canResult = null != guild;
    if (canResult) {
      canResult = outer1_6.can(outer1_10.MANAGE_GUILD, guild);
    }
    return canResult;
  }, items1);
};
export const useCanBulkBanUser = function useCanBulkBanUser(arg0, arg1, arg2) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const items = [_isNativeReflectConstruct, _createForOfIteratorHelperLoose];
  const items1 = [arg1, arg0, arg2];
  return _require(566).useStateFromStores(items, () => {
    const guild = outer1_5.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      let canManageUserResult = closure_1;
      if (closure_1) {
        canManageUserResult = outer1_6.canManageUser(outer1_10.BAN_MEMBERS, closure_2, guild);
      }
      tmp2 = canManageUserResult;
    }
    return tmp2;
  }, items1);
};
export const canBulkBanUser = function canBulkBanUser(guildId) {
  let canManageUserResult = arg1;
  guild = guild.getGuild(guildId);
  let tmp3 = null != guild;
  if (tmp3) {
    if (canManageUserResult) {
      canManageUserResult = _isNativeReflectConstruct.canManageUser(constants2.BAN_MEMBERS, arg2, guild);
    }
    tmp3 = canManageUserResult;
  }
  return tmp3;
};
