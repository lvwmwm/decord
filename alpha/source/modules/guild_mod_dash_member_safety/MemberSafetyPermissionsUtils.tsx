// Module ID: 6887
// Function ID: 6888
// Name: MemberSafetyPermissionsUtils
// Dependencies: [32, 4780, 4784, 4845, 1386, 4849, 1071, 1083, 4850, 504, 6888, 2]
// Exports: canAccessMemberSafetyPage, canBulkBanUser, canPruneGuildMembers, getContextForPermission, hasBulkBanningPermissions, useCanAccessBulkActions, useCanAccessBulkBanningFeature, useCanAccessInviteCodeFeature, useCanAccessMemberSafetyPage, useCanBulkBanUser

// Module 6887 (MemberSafetyPermissionsUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1083 */;
import GuildRecord from "GuildRecord" /* 4780 */;
import MemberSafetyConstants from "MemberSafetyConstants" /* 4849 */;
import BulkRoleActionsExperimentDefault from "BulkRoleActionsExperiment" /* 6888 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import GuildStore from "GuildStore" /* 4784 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import UserStore from "UserStore" /* 1386 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let unpackModuleId;
const f89816 = () => {
  let obj;
  let obj2;
  const items = [GuildStore, UserStore];
  [obj, obj2] = items;
  _slicedToArray(items, 2);
  const guild = obj.getGuild(closure_0);
  const currentUser = obj2.getCurrentUser();
  return false;
};
const f89817 = () => {
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
  return obj.useStateFromStores(items, f89816, items1);
}
export function useCanAccessBulkBanningFeature(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore, UserStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, f89816, items1);
  const items2 = [GuildStore, UserStore];
  const items3 = [arg0];
  const obj2 = require("get initialized");
  if (stateFromStores) {
    stateFromStores = obj2.useStateFromStores(items2, f89817, items3);
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
  const stateFromStores = obj.useStateFromStores(items, f89816, items1);
  const obj2 = require("get initialized");
  const items2 = [GuildStore, UserStore];
  const items3 = [guildId];
  const canAccessBulkBan = stateFromStores && obj2.useStateFromStores(items2, f89817, items3);
  let obj3 = BulkRoleActionsExperimentDefault;
  let obj4 = { guildId, location: "Members page bulk actions" };
  let canAccessBulkTimeout = obj3.useConfig(obj4).enabled;
  _require = guildId;
  const items4 = [GuildStore, UserStore];
  const items5 = [guildId];
  const tmpResult = tmp(504);
  const stateFromStores1 = tmpResult.useStateFromStores(items4, f89816, items5);
  const items6 = [GuildStore, PermissionStore, UserStore];
  const items7 = [guildId];
  const tmpResult2 = tmp(504);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(items6, () => {
    let can;
    let can2;
    let obj;
    let obj2;
    let obj4;
    let obj5;
    const items = [GuildStore, UserStore];
    [obj, obj2] = items;
    _slicedToArray(items, 2);
    const guild = obj.getGuild(closure_0);
    const currentUser = obj2.getCurrentUser();
    const obj3 = { role: PermissionStore.can(constants.MANAGE_ROLES, undefined), kick: can(obj4.combine(constants.MANAGE_GUILD, constants.KICK_MEMBERS), undefined), timeout: can2(obj5.combine(constants.MANAGE_GUILD, constants.MODERATE_MEMBERS), undefined) };
    can = PermissionStore.can;
    can2 = PermissionStore.can;
    obj4 = BigFlagUtilsAll;
    obj5 = BigFlagUtilsAll;
    return obj3;
  }, items7);
  if (canAccessBulkTimeout) {
    canAccessBulkTimeout = stateFromStores1;
  }
  const canAccessBulkRole = canAccessBulkTimeout && stateFromStoresObject.role;
  const canAccessBulkKick = canAccessBulkTimeout && stateFromStoresObject.kick;
  if (canAccessBulkTimeout) {
    canAccessBulkTimeout = stateFromStoresObject.timeout;
  }
  const canSelectAnyMember = canAccessBulkRole || canAccessBulkKick || canAccessBulkTimeout;
  const canAccessBulkActions = canAccessBulkBan || canSelectAnyMember;
  return { canAccessBulkActions, canAccessBulkBan, canAccessBulkRole, canAccessBulkKick, canAccessBulkTimeout, canSelectAnyMember };
}
