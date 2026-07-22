// Module ID: 15893
// Function ID: 121712
// Name: experiment
// Dependencies: []
// Exports: useVoiceChannelHoistingExperiment

// Module 15893 (experiment)
const _module = require(dependencyMap[1]);
const items = [{ config: { 1385720913: null, 1352505702: null } }, { config: { 1385720913: "<string:1040334421>", 1352505702: "<string:1040334338>" } }];
const experiment = _module.createExperiment({ commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL, defaultConfig: { 1385720913: true, 1352505702: true }, treatments: items });
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/channel/VoiceChannelHoistingExperiment.tsx");

export const VoiceChannelHoistingExperiment = experiment;
export const useVoiceChannelHoistingExperiment = function useVoiceChannelHoistingExperiment(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false });
};
