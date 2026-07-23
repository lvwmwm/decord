// Module ID: 10240
// Function ID: 79118
// Name: canReportRaid
// Dependencies: [3758, 10219, 653, 566, 7702, 10241, 2]
// Exports: useCanEnableRaidAlerts, useCanReportRaid, useShowMentionRaidLimitUpsell

// Module 10240 (canReportRaid)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
function canReportRaid(guild, outer1_6) {
  let obj = outer1_6;
  if (outer1_6 === undefined) {
    obj = _isNativeReflectConstruct;
  }
  let canResult = obj.can(constants.BAN_MEMBERS, guild);
  if (!canResult) {
    canResult = obj.can(constants.KICK_MEMBERS, guild);
  }
  if (!canResult) {
    canResult = obj.can(constants.MODERATE_MEMBERS, guild);
  }
  if (!canResult) {
    canResult = obj.can(constants.MANAGE_GUILD, guild);
  }
  return canResult;
}
function canEnableRaidAlerts(channel) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = _isNativeReflectConstruct;
  }
  return obj.can(constants.MANAGE_GUILD, channel);
}
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, Permissions: closure_5 } = ME);
const result = require("ME").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx");

export { canReportRaid };
export const useCanReportRaid = function useCanReportRaid(guild) {
  const _require = guild;
  const items = [_isNativeReflectConstruct];
  const items1 = [guild];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_6(closure_0, outer1_2), items1);
  const obj = _require(566);
  const items2 = [closure_3];
  const items3 = [guild];
  const stateFromStores1 = _require(566).useStateFromStores(items2, () => {
    let guildIncident = null;
    if (null != guild) {
      guildIncident = outer1_3.getGuildIncident(guild.id);
    }
    return guildIncident;
  }, items3);
  let hasDetectedActivityResult = null != stateFromStores1;
  if (hasDetectedActivityResult) {
    hasDetectedActivityResult = _require(7702).hasDetectedActivity(stateFromStores1);
    const obj3 = _require(7702);
  }
  return !hasDetectedActivityResult && stateFromStores;
};
export { canEnableRaidAlerts };
export const useCanEnableRaidAlerts = function useCanEnableRaidAlerts(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => outer1_7(closure_0, outer1_2), items1);
};
export const useShowMentionRaidLimitUpsell = function useShowMentionRaidLimitUpsell(id) {
  const _require = id;
  id = undefined;
  const items = [_isNativeReflectConstruct];
  const items1 = [id];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    let obj = outer1_2;
    if (outer1_2 === undefined) {
      obj = outer1_2;
    }
    return obj.can(outer1_5.MANAGE_GUILD, closure_0);
  }, items1);
  let obj = _require(566);
  if (null != id) {
    id = id.id;
  }
  if (null == id) {
    id = closure_4;
  }
  const obj2 = _require(10241);
  return _require(10241).useIsMentionRaidExperimentEnabled(id, false) && stateFromStores;
};
