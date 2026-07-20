// Module ID: 7900
// Function ID: 62893
// Name: experiment
// Dependencies: []
// Exports: getVoiceChannelBadgeExperiment, useVoiceChannelBadgeExperiment

// Module 7900 (experiment)
const _module = require(dependencyMap[1]);
let obj = { commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false }, treatments: items };
obj = { "Bool(false)": null, "Bool(false)": null, config: { enabled: false } };
const items = [obj, { config: { enabled: true } }];
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/channel/VoiceChannelBadgeExperiment.tsx");

export const VoiceChannelBadgeExperiment = experiment;
export const useVoiceChannelBadgeExperiment = function useVoiceChannelBadgeExperiment(guildId) {
  return experiment.useExperiment({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};
export const getVoiceChannelBadgeExperiment = function getVoiceChannelBadgeExperiment(guildId) {
  return experiment.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};
