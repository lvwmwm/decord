// Module ID: 6683
// Function ID: 6684
// Name: MemberSafetyPermissionsUtils
// Dependencies: [32, 2063, 2067, 4469, 1372, 4473, 1074, 1086, 4474, 504, 2]
// Exports: canAccessMemberSafetyPage, canBulkBanUser, canPruneGuildMembers, getContextForPermission, hasBulkBanningPermissions, useCanAccessBulkBanningFeature, useCanAccessInviteCodeFeature, useCanAccessMemberSafetyPage, useCanBulkBanUser

// Module 6683 (MemberSafetyPermissionsUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import GuildRecord from "GuildRecord" /* 2063 */;
import MemberSafetyConstants from "MemberSafetyConstants" /* 4473 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c10;
let c9;
const f82820 = () => {
  let obj;
  let obj2;
  const items = [GuildStore, UserStore];
  [obj, obj2] = items;
  _slicedToArray(items, 2);
  const guild = obj.getGuild(closure_0);
  const currentUser = obj2.getCurrentUser();
  return false;
};
const isGuildOwner = GuildRecord.isGuildOwner;
let closure_8 = MemberSafetyConstants.MemberSafetyPagePermissions;
({ GuildFeatures: c9, Permissions: c10 } = Constants);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx");

export const getContextForPermission = function getContextForPermission(arg0, items) {
  let obj;
  let obj2;
  let tmp = items;
  if (items === undefined) {
    items = [UserStore, closure_8];
    tmp = items;
  }
  [obj, obj2] = tmp;
  _slicedToArray(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
};
export const canAccessMemberSafetyPage = function canAccessMemberSafetyPage(arg0) {
  let obj;
  let obj2;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [GuildStore, UserStore];
    tmp = items;
  }
  if (tmp === undefined) {
    const items1 = [UserStore, closure_8];
    tmp = items1;
  }
  [obj, obj2] = tmp;
  _slicedToArray(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
};
export const hasBulkBanningPermissions = function hasBulkBanningPermissions(arg0) {
  let obj;
  let obj2;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [GuildStore, UserStore];
    tmp = items;
  }
  if (tmp === undefined) {
    const items1 = [UserStore, closure_8];
    tmp = items1;
  }
  [obj, obj2] = tmp;
  _slicedToArray(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
};
export const canPruneGuildMembers = function canPruneGuildMembers(guild, currentUser, PermissionStore) {
  let canResult1;
  let obj = PermissionStore;
  if (PermissionStore === undefined) {
    obj = PermissionStore;
  }
  const features = guild.features;
  if (features.has(constants.PRUNE_REQUIRES_ADMIN)) {
    canResult1 = isGuildOwner(guild, currentUser) || obj.can(constants2.ADMINISTRATOR, guild);
    const canResult = isGuildOwner(guild, currentUser) || obj.can(constants2.ADMINISTRATOR, guild);
  } else {
    const can = obj.can;
    const obj2 = BigFlagUtilsAll;
    canResult1 = can(obj2.combine(constants2.MANAGE_GUILD, constants2.KICK_MEMBERS), guild);
  }
  return canResult1;
};
export const useCanAccessMemberSafetyPage = function useCanAccessMemberSafetyPage(id) {
  _require = id;
  const items = [GuildStore, UserStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f82820, items1);
};
export const useCanAccessBulkBanningFeature = function useCanAccessBulkBanningFeature(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("get initialized");
  let items = [GuildStore, UserStore];
  const items1 = [arg0];
  let stateFromStores = obj.useStateFromStores(items, f82820, items1);
  const obj2 = require("get initialized");
  const items2 = [GuildStore, UserStore];
  const items3 = [arg0];
  if (stateFromStores) {
    stateFromStores = obj2.useStateFromStores(items2, () => {
      let obj;
      let obj2;
      const items = [GuildStore, UserStore];
      [obj, obj2] = items;
      _slicedToArray(items, 2);
      const guild = obj.getGuild(closure_0);
      const currentUser = obj2.getCurrentUser();
      return false;
    }, items3);
  }
  return stateFromStores;
};
export const useCanAccessInviteCodeFeature = function useCanAccessInviteCodeFeature(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    const canResult = null != guild && PermissionStore.can(constants.MANAGE_GUILD, guild);
    return canResult;
  }, items1);
};
export const useCanBulkBanUser = function useCanBulkBanUser(arg0, arg1, arg2) {
  let closure_0;
  let closure_2;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = arg2;
  const items = [PermissionStore, GuildStore];
  const items1 = [arg1, arg0, arg2];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let tmp2 = null != guild;
    if (tmp2) {
      tmp2 = closure_1 && PermissionStore.canManageUser(constants.BAN_MEMBERS, closure_2, guild);
      const canManageUserResult = closure_1 && PermissionStore.canManageUser(constants.BAN_MEMBERS, closure_2, guild);
    }
    return tmp2;
  }, items1);
};
export const canBulkBanUser = function canBulkBanUser(arg0, arg1, user) {
  const guild = GuildStore.getGuild(arg0);
  let tmp2 = null != guild;
  if (tmp2) {
    tmp2 = arg1 && PermissionStore.canManageUser(constants2.BAN_MEMBERS, user, guild);
    const canManageUserResult = arg1 && PermissionStore.canManageUser(constants2.BAN_MEMBERS, user, guild);
  }
  return tmp2;
};
