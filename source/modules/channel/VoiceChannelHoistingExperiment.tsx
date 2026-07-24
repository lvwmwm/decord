// Module ID: 16057
// Function ID: 124207
// Name: items
// Dependencies: [4045, 4042, 2]
// Exports: useVoiceChannelHoistingExperiment

// Module 16057 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2025-12_voice_channel_hoisting", label: "Voice Channel Hoisting", commonTriggerPoint: require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, defaultConfig: { enableWaveformIcon: false, enableHighlight: false } };
obj = { id: 1, label: "Both waveform and highlight", config: { enableWaveformIcon: true, enableHighlight: true } };
const items = [obj, ];
const obj1 = { id: 2, label: "Waveform icon only", config: { enableWaveformIcon: true, enableHighlight: false } };
items[1] = obj1;
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/channel/VoiceChannelHoistingExperiment.tsx");

export const VoiceChannelHoistingExperiment = experiment;
export const useVoiceChannelHoistingExperiment = function useVoiceChannelHoistingExperiment(guildId, location) {
  return experiment.useExperiment({ guildId, location }, { autoTrackExposure: false });
};
