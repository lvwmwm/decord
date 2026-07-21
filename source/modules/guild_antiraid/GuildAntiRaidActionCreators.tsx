// Module ID: 10965
// Function ID: 85287
// Name: _setGuildRaidAlerts
// Dependencies: []
// Exports: handleReportRaid, handleResolveRaid, setGuildIncidentActions, setGuildRaidAlerts, trackReportRaidViewed

// Module 10965 (_setGuildRaidAlerts)
function _setGuildRaidAlerts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _setGuildRaidAlerts = obj;
  return obj(...arguments);
}
function _setGuildIncidentActions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _setGuildIncidentActions = obj;
  return obj(...arguments);
}
function _handleResolveRaid() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleResolveRaid = obj;
  return obj(...arguments);
}
function _handleReportRaid() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _handleReportRaid = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const DEFAULT_LOCKDOWN_DURATION = arg1(dependencyMap[2]).DEFAULT_LOCKDOWN_DURATION;
({ AnalyticEvents: closure_6, Endpoints: closure_7, GuildFeatures: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidActionCreators.tsx");

export const trackReportRaidViewed = function trackReportRaidViewed(closure_1, closure_2) {
  let items = closure_2;
  if (closure_2 === undefined) {
    items = [];
  }
  if (0 !== items.length) {
    let obj = importDefault(dependencyMap[4]);
    obj = {};
    const merged = Object.assign(closure_2(dependencyMap[5]).collectGuildAnalyticsMetadata(closure_1));
    obj["guild_id"] = closure_1;
    obj["raid_types"] = items;
    obj.track(constants.GUILD_RAID_REPORTED, obj);
    const obj3 = closure_2(dependencyMap[5]);
  }
};
export const setGuildRaidAlerts = function setGuildRaidAlerts() {
  return _setGuildRaidAlerts(...arguments);
};
export const setGuildIncidentActions = function setGuildIncidentActions(id, pauseInvites, pauseDms, time) {
  return _setGuildIncidentActions(...arguments);
};
export const handleResolveRaid = function handleResolveRaid(closure_0, closure_1, mostImportantRaidResolutionType) {
  return _handleResolveRaid(...arguments);
};
export const handleReportRaid = function handleReportRaid(closure_1) {
  return _handleReportRaid(...arguments);
};
