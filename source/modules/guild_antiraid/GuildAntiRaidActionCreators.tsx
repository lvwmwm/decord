// Module ID: 11003
// Function ID: 85538
// Name: _setGuildRaidAlerts
// Dependencies: [5, 1838, 7792, 653, 675, 4324, 8482, 3712, 507, 10273, 2]
// Exports: handleReportRaid, handleResolveRaid, setGuildIncidentActions, setGuildRaidAlerts, trackReportRaidViewed

// Module 11003 (_setGuildRaidAlerts)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_createForOfIteratorHelperLoose";
import { DEFAULT_LOCKDOWN_DURATION } from "GUILD_REPORT_RAID_MOBILE_KEY";
import ME from "ME";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function _setGuildRaidAlerts() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _setGuildIncidentActions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleResolveRaid() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _handleReportRaid() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticEvents: closure_6, Endpoints: closure_7, GuildFeatures: closure_8 } = ME);
const result = require("GUILD_REPORT_RAID_MOBILE_KEY").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidActionCreators.tsx");

export const trackReportRaidViewed = function trackReportRaidViewed(outer1_1, outer1_2) {
  let items = outer1_2;
  if (outer1_2 === undefined) {
    items = [];
  }
  if (0 !== items.length) {
    let obj = importDefault(675);
    obj = {};
    const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(outer1_1));
    obj["guild_id"] = outer1_1;
    obj["raid_types"] = items;
    obj.track(constants.GUILD_RAID_REPORTED, obj);
    const obj3 = require(4324) /* _createForOfIteratorHelperLoose */;
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
export const handleReportRaid = function handleReportRaid(outer1_1) {
  return _handleReportRaid(...arguments);
};
