// Module ID: 7905
// Function ID: 62918
// Name: items
// Dependencies: []
// Exports: getVoiceChannelBadgeExperiment, useVoiceChannelBadgeExperiment

// Module 7905 (items)
const _module = require(dependencyMap[1]);
let obj = { "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, "Bool(false)": false, commonTriggerPoint: require(dependencyMap[0]).CommonTriggerPoints.VOICE_CALL, defaultConfig: { enabled: false } };
obj = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: null, 炖锅: null, config: { enabled: false } };
const items = [obj, ];
const obj1 = { ../discord_assets/assets/mana/asset-library/generated/RulebookSpotIllustration-2x.png.js: 1728.0014084726577, 炖锅: 1100880349551385000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, config: { enabled: true } };
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
