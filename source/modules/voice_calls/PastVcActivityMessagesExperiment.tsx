// Module ID: 15882
// Function ID: 121627
// Name: items
// Dependencies: []
// Exports: isPastVcActivityMessagesEnabled, useIsPastVcActivityMessagesEnabled

// Module 15882 (items)
const _module = require(dependencyMap[1]);
let obj = { y: "2026-06-family-center-connection-prereq", createBackgroundHighlight: "user", y: -15, commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false } };
obj = { -1174339580: "/assets/images/native", -1169096700: 38, config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/voice_calls/PastVcActivityMessagesExperiment.tsx");

export default experiment;
export const isPastVcActivityMessagesEnabled = function isPastVcActivityMessagesEnabled(id, GuildSettingsModalOverview) {
  return experiment.getCurrentConfig({ guildId: id, location: GuildSettingsModalOverview }, { autoTrackExposure: true }).enabled;
};
export const useIsPastVcActivityMessagesEnabled = function useIsPastVcActivityMessagesEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: true }).enabled;
};
