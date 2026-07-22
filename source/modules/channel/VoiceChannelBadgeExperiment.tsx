// Module ID: 7905
// Function ID: 62928
// Name: items
// Dependencies: []
// Exports: getVoiceChannelBadgeExperiment, useVoiceChannelBadgeExperiment

// Module 7905 (items)
const _module = require(dependencyMap[1]);
let obj = { "Bool(false)": 231584282385006940000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007534477813443604, "Bool(false)": -504174744500473500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 152149109490599420000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false } };
obj = { displayNameStylesEnabled: null, submitButtonEnabled: null, config: { enabled: false } };
const items = [obj, { config: { enabled: true } }];
obj.treatments = items;
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
