// Module ID: 15894
// Function ID: 121714
// Name: experiment
// Dependencies: []
// Exports: isPastVcActivityMessagesEnabled, useIsPastVcActivityMessagesEnabled

// Module 15894 (experiment)
const _module = require(dependencyMap[1]);
const items = [{ config: { enabled: true } }];
const experiment = _module.createExperiment({ commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items });
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/voice_calls/PastVcActivityMessagesExperiment.tsx");

export default experiment;
export const isPastVcActivityMessagesEnabled = function isPastVcActivityMessagesEnabled(id, GuildSettingsModalOverview) {
  return experiment.getCurrentConfig({ guildId: id, location: GuildSettingsModalOverview }, { autoTrackExposure: true }).enabled;
};
export const useIsPastVcActivityMessagesEnabled = function useIsPastVcActivityMessagesEnabled(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: true }).enabled;
};
