// Module ID: 11007
// Function ID: 11008
// Name: GuildAntiRaidPermissionsUtils
// Dependencies: [4941, 10991, 1072, 504, 8474, 2]
// Exports: canEnableRaidAlerts, canReportRaid, useCanEnableRaidAlerts, useCanReportRaid

// Module 11007 (GuildAntiRaidPermissionsUtils)
import Constants from "Constants" /* 1072 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10991 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx");

export function canReportRaid(guild, PermissionStore) {
  let obj = PermissionStore;
  if (PermissionStore === undefined) {
    obj = PermissionStore;
  }
  const canResult = obj.can(Permissions.BAN_MEMBERS, guild) || obj.can(tmp.KICK_MEMBERS, guild) || obj.can(tmp.MODERATE_MEMBERS, guild) || obj.can(tmp.MANAGE_GUILD, guild);
  return canResult;
}
export function useCanReportRaid(guild) {
  _require = guild;
  const tmp = _require;
  const items = [PermissionStore];
  const items1 = [guild];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (PermissionStore !== undefined) {
      const tmp3 = PermissionStore.can(Permissions.BAN_MEMBERS, guild) || PermissionStore.can(Permissions.KICK_MEMBERS, guild) || PermissionStore.can(Permissions.MODERATE_MEMBERS, guild) || PermissionStore.can(Permissions.MANAGE_GUILD, guild);
      return tmp3;
    }
  }, items1);
  const items2 = [GuildIncidentsStore];
  const items3 = [guild];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let guildIncident = null;
    if (null != guild) {
      guildIncident = GuildIncidentsStore.getGuildIncident(tmp.id);
    }
    return guildIncident;
  }, items3);
  let hasDetectedActivityResult = null != stateFromStores1;
  if (hasDetectedActivityResult) {
    const tmpResult = tmp(8474);
    hasDetectedActivityResult = tmpResult.hasDetectedActivity(stateFromStores1);
  }
  return !hasDetectedActivityResult && stateFromStores;
}
export function canEnableRaidAlerts(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = PermissionStore;
  }
  return obj.can(Permissions.MANAGE_GUILD, arg0);
}
export function useCanEnableRaidAlerts(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [PermissionStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    const obj = PermissionStore;
    if (PermissionStore !== undefined) {
      return obj.can(Permissions.MANAGE_GUILD, tmp);
    }
  }, items1);
}
