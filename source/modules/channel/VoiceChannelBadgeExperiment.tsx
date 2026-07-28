// Module ID: 7982
// Function ID: 63343
// Name: items
// Dependencies: [4080, 4077, 2]
// Exports: getVoiceChannelBadgeExperiment, useVoiceChannelBadgeExperiment

// Module 7982 (items)
import createExperiment from "createExperiment";

let obj = { id: "2026-03_voice_badge", kind: "guild", commonTriggerPoint: require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, label: "Display Voice Channel Badge", defaultConfig: { enabled: false } };
obj = { id: 0, label: "Control", config: { enabled: false } };
const items = [obj, ];
const obj1 = { id: 1, label: "Show voice badges", config: { enabled: true } };
items[1] = obj1;
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/channel/VoiceChannelBadgeExperiment.tsx");

export const VoiceChannelBadgeExperiment = experiment;
export const useVoiceChannelBadgeExperiment = function useVoiceChannelBadgeExperiment(guildId) {
  return experiment.useExperiment({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};
export const getVoiceChannelBadgeExperiment = function getVoiceChannelBadgeExperiment(guildId) {
  return experiment.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};
