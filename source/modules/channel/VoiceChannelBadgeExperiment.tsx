// Module ID: 7904
// Function ID: 62905
// Name: items
// Dependencies: []
// Exports: getVoiceChannelBadgeExperiment, useVoiceChannelBadgeExperiment

// Module 7904 (items)
const _module = require(dependencyMap[1]);
let obj = { "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000255584446445, "Bool(false)": 0.00222873874008659, "Bool(false)": -9518929528624483000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 13343204691530830000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false } };
obj = { -1174339580: null, -1169096700: null, config: { enabled: false } };
const items = [obj, ];
const obj1 = { -1174339580: false, -1169096700: false, config: { enabled: true } };
items[1] = obj1;
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
