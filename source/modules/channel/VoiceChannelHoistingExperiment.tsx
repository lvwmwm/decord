// Module ID: 15885
// Function ID: 121669
// Name: experiment
// Dependencies: []
// Exports: useVoiceChannelHoistingExperiment

// Module 15885 (experiment)
const _module = require(dependencyMap[1]);
const items = [{ config: { right: null, paddingHorizontal: null } }, { config: { right: null, paddingHorizontal: null } }];
const experiment = _module.createExperiment({ commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL, defaultConfig: { right: null, paddingHorizontal: null }, treatments: items });
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/channel/VoiceChannelHoistingExperiment.tsx");

export const VoiceChannelHoistingExperiment = experiment;
export const useVoiceChannelHoistingExperiment = function useVoiceChannelHoistingExperiment(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false });
};
