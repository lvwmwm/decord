// Module ID: 9558
// Function ID: 9559
// Name: GuildAntiRaidPermissionsUtils
// Dependencies: [4469, 9540, 1074, 504, 7458, 9559, 2]
// Exports: canEnableRaidAlerts, canReportRaid, useCanEnableRaidAlerts, useCanReportRaid, useShowMentionRaidLimitUpsell

// Module 9558 (GuildAntiRaidPermissionsUtils)
import PermissionStore from "PermissionStore" /* 4469 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 9540 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, Permissions: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx");

export const canReportRaid = function canReportRaid(guild, PermissionStore) {
  let obj = PermissionStore;
  if (PermissionStore === undefined) {
    obj = PermissionStore;
  }
  const canResult = obj.can(hasOwnProperty.BAN_MEMBERS, guild) || obj.can(tmp.KICK_MEMBERS, guild) || obj.can(tmp.MODERATE_MEMBERS, guild) || obj.can(tmp.MANAGE_GUILD, guild);
  return canResult;
};
export const useCanReportRaid = function useCanReportRaid(guild) {
  _require = guild;
  const tmp = _require;
  const items = [PermissionStore];
  const items1 = [guild];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (PermissionStore !== undefined) {
      const tmp3 = PermissionStore.can(hasOwnProperty.BAN_MEMBERS, guild) || PermissionStore.can(hasOwnProperty.KICK_MEMBERS, guild) || PermissionStore.can(hasOwnProperty.MODERATE_MEMBERS, guild) || PermissionStore.can(hasOwnProperty.MANAGE_GUILD, guild);
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
    const tmpResult = tmp(7458);
    hasDetectedActivityResult = tmpResult.hasDetectedActivity(stateFromStores1);
  }
  return !hasDetectedActivityResult && stateFromStores;
};
export const canEnableRaidAlerts = function canEnableRaidAlerts(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = PermissionStore;
  }
  return obj.can(hasOwnProperty.MANAGE_GUILD, arg0);
};
export const useCanEnableRaidAlerts = function useCanEnableRaidAlerts(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [PermissionStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    const obj = PermissionStore;
    if (PermissionStore !== undefined) {
      return obj.can(hasOwnProperty.MANAGE_GUILD, tmp);
    }
  }, items1);
};
export const useShowMentionRaidLimitUpsell = function useShowMentionRaidLimitUpsell(id) {
  _require = id;
  let obj = require("get initialized");
  const items = [PermissionStore];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = PermissionStore;
    if (PermissionStore !== undefined) {
      return obj.can(hasOwnProperty.MANAGE_GUILD, tmp);
    }
  }, items1);
  id = undefined;
  const useIsMentionRaidExperimentEnabled = require("guild_automod/ExperimentUtils").useIsMentionRaidExperimentEnabled;
  const tmp2 = require("guild_automod/ExperimentUtils");
  if (id != null) {
    id = id.id;
  }
  if (id == null) {
    id = closure_4;
  }
  const tmp4 = useIsMentionRaidExperimentEnabled(id, false) && stateFromStores;
  return tmp4;
};
