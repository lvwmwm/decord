// Module ID: 10227
// Function ID: 79033
// Name: canReportRaid
// Dependencies: []
// Exports: useCanEnableRaidAlerts, useCanReportRaid, useShowMentionRaidLimitUpsell

// Module 10227 (canReportRaid)
function canReportRaid(guild, closure_6) {
  let obj = closure_6;
  if (closure_6 === undefined) {
    obj = closure_2;
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
    obj = closure_2;
  }
  return obj.can(constants.MANAGE_GUILD, channel);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_4, Permissions: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidPermissionsUtils.tsx");

export { canReportRaid };
export const useCanReportRaid = function useCanReportRaid(guild) {
  const arg1 = guild;
  const items = [closure_2];
  const items1 = [guild];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => callback(arg0, closure_2), items1);
  const obj = arg1(dependencyMap[3]);
  const items2 = [closure_3];
  const items3 = [guild];
  const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items2, () => {
    let guildIncident = null;
    if (null != arg0) {
      guildIncident = guildIncident.getGuildIncident(arg0.id);
    }
    return guildIncident;
  }, items3);
  let hasDetectedActivityResult = null != stateFromStores1;
  if (hasDetectedActivityResult) {
    hasDetectedActivityResult = arg1(dependencyMap[4]).hasDetectedActivity(stateFromStores1);
    const obj3 = arg1(dependencyMap[4]);
  }
  return !hasDetectedActivityResult && stateFromStores;
};
export { canEnableRaidAlerts };
export const useCanEnableRaidAlerts = function useCanEnableRaidAlerts(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => callback(arg0, closure_2), items1);
};
export const useShowMentionRaidLimitUpsell = function useShowMentionRaidLimitUpsell(id) {
  const arg1 = id;
  id = undefined;
  const items = [closure_2];
  const items1 = [id];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let obj = closure_2;
    if (closure_2 === undefined) {
      obj = closure_2;
    }
    return obj.can(constants.MANAGE_GUILD, arg0);
  }, items1);
  const obj = arg1(dependencyMap[3]);
  if (null != id) {
    id = id.id;
  }
  if (null == id) {
    id = closure_4;
  }
  const obj2 = arg1(dependencyMap[5]);
  return arg1(dependencyMap[5]).useIsMentionRaidExperimentEnabled(id, false) && stateFromStores;
};
