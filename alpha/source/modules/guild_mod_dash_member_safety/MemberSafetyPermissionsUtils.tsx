// Module ID: 7282
// Function ID: 7283
// Name: MemberSafetyPermissionsUtils
// Dependencies: [32, 5173, 5177, 5238, 1388, 5242, 1072, 1084, 5243, 504, 7283, 2]
// Exports: canAccessMemberSafetyPage, canBulkBanUser, canPruneGuildMembers, getContextForPermission, hasBulkBanningPermissions, useCanAccessBulkActions, useCanAccessBulkBanningFeature, useCanAccessInviteCodeFeature, useCanAccessMemberSafetyPage, useCanBulkBanUser

// Module 7282 (MemberSafetyPermissionsUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import GuildRecord from "GuildRecord" /* 5173 */;
import MemberSafetyConstants from "MemberSafetyConstants" /* 5242 */;
import BulkRoleActionsExperimentDefault from "BulkRoleActionsExperiment" /* 7283 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildStore from "GuildStore" /* 5177 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import UserStore from "UserStore" /* 1388 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let unpackModuleId;
const f93701 = () => {
  let obj;
  let obj2;
  const items = [GuildStore, UserStore];
  [obj, obj2] = items;
  _slicedToArray(items, 2);
  const guild = obj.getGuild(closure_0);
  const currentUser = obj2.getCurrentUser();
  return false;
};
const f93702 = () => {
  let obj;
  let obj2;
  const items = [GuildStore, UserStore];
  [obj, obj2] = items;
  _slicedToArray(items, 2);
  const guild = obj.getGuild(guildId);
  const currentUser = obj2.getCurrentUser();
  return false;
};
const isGuildOwner = GuildRecord.isGuildOwner;
let closure_9 = MemberSafetyConstants.MemberSafetyPagePermissions;
({ GuildFeatures: c10, Permissions: unpackModuleId } = Constants);
const result = size.fileFinishedImporting("modules/guild_mod_dash_member_safety/MemberSafetyPermissionsUtils.tsx");

export function getContextForPermission(arg0, items) {
  let obj;
  let obj2;
  let tmp = items;
  if (items === undefined) {
    items = [UserStore, closure_9];
    tmp = items;
  }
  [obj, obj2] = tmp;
  _slicedToArray(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
}
export function canAccessMemberSafetyPage(arg0) {
  let obj;
  let obj2;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [GuildStore, UserStore];
    tmp = items;
  }
  if (tmp === undefined) {
    const items1 = [UserStore, closure_9];
    tmp = items1;
  }
  [obj, obj2] = tmp;
  _slicedToArray(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
}
export function hasBulkBanningPermissions(arg0) {
  let obj;
  let obj2;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [GuildStore, UserStore];
    tmp = items;
  }
  if (tmp === undefined) {
    const items1 = [UserStore, closure_9];
    tmp = items1;
  }
  [obj, obj2] = tmp;
  _slicedToArray(tmp, 2);
  const guild = obj.getGuild(arg0);
  const currentUser = obj2.getCurrentUser();
  return false;
}
export function canPruneGuildMembers(guild, currentUser, PermissionStore) {
  let canResult1;
  let obj = PermissionStore;
  if (PermissionStore === undefined) {
    obj = PermissionStore;
  }
  const features = guild.features;
  if (features.has(constants.PRUNE_REQUIRES_ADMIN)) {
    canResult1 = isGuildOwner(guild, currentUser) || obj.can(unpackModuleId.ADMINISTRATOR, guild);
    const canResult = isGuildOwner(guild, currentUser) || obj.can(unpackModuleId.ADMINISTRATOR, guild);
  } else {
    const can = obj.can;
    const obj2 = BigFlagUtilsAll;
    canResult1 = can(obj2.combine(unpackModuleId.MANAGE_GUILD, unpackModuleId.KICK_MEMBERS), guild);
  }
  return canResult1;
}
export function useCanAccessMemberSafetyPage(id) {
  _require = id;
  const items = [GuildStore, UserStore];
  const items1 = [id];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f93701, items1);
}
export function useCanAccessBulkBanningFeature(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore, UserStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, f93701, items1);
  const items2 = [GuildStore, UserStore];
  const items3 = [arg0];
  const obj2 = require("get initialized");
  if (stateFromStores) {
    stateFromStores = obj2.useStateFromStores(items2, f93702, items3);
  }
  return stateFromStores;
}
export function useCanAccessInviteCodeFeature(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore, PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    const canResult = null != guild && PermissionStore.can(unpackModuleId.MANAGE_GUILD, guild);
    return canResult;
  }, items1);
}
export function canBulkBanUser(arg0, user) {
  const guild = GuildStore.getGuild(arg0);
  const canManageUserResult = null != guild && PermissionStore.canManageUser(unpackModuleId.BAN_MEMBERS, user, guild);
  return canManageUserResult;
}
export function useCanBulkBanUser(arg0, arg1) {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const items = [PermissionStore, GuildStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    const canManageUserResult = null != guild && PermissionStore.canManageUser(unpackModuleId.BAN_MEMBERS, closure_1, guild);
    return canManageUserResult;
  }, items1);
}
export function useCanAccessBulkActions(guildId) {
  _require = guildId;
  const tmp = _require;
  const obj = require("get initialized");
  let items = [GuildStore, UserStore];
  const items1 = [guildId];
  let canAccessBulkBan = obj.useStateFromStores(items, f93701, items1);
  const obj2 = require("get initialized");
  const items2 = [GuildStore, UserStore];
  const items3 = [guildId];
  if (canAccessBulkBan) {
    canAccessBulkBan = obj2.useStateFromStores(items2, f93702, items3);
  }
  const obj3 = BulkRoleActionsExperimentDefault;
  const obj4 = { guildId, location: "Members page bulk actions" };
  let canAccessBulkRole = obj3.useConfig(obj4).enabled;
  _require = guildId;
  const items4 = [GuildStore, UserStore];
  const items5 = [guildId];
  const tmpResult = tmp(504);
  const stateFromStores1 = tmpResult.useStateFromStores(items4, f93701, items5);
  const items6 = [GuildStore, UserStore];
  const items7 = [guildId];
  const tmpResult2 = tmp(504);
  const stateFromStores2 = tmpResult2.useStateFromStores(items6, () => {
    let obj;
    let obj2;
    const items = [GuildStore, UserStore];
    [obj, obj2] = items;
    _slicedToArray(items, 2);
    const guild = obj.getGuild(closure_0);
    const currentUser = obj2.getCurrentUser();
    return false;
  }, items7);
  if (canAccessBulkRole) {
    canAccessBulkRole = stateFromStores1;
  }
  if (canAccessBulkRole) {
    canAccessBulkRole = stateFromStores2;
  }
  const canAccessBulkActions = canAccessBulkBan || canAccessBulkRole;
  return { canAccessBulkActions, canAccessBulkBan, canAccessBulkRole };
}
