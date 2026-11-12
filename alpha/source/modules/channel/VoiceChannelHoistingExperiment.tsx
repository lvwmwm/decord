// Module ID: 20041
// Function ID: 20042
// Name: VoiceChannelHoistingExperiment
// Dependencies: [5470, 5467, 2]
// Exports: useVoiceChannelHoistingExperiment

// Module 20041 (VoiceChannelHoistingExperiment)
import ExperimentConstants from "ExperimentConstants" /* 5470 */;
import createExperiment from "module_5467" /* 5467 */;
import size from "module_2" /* 2 */;

let items;
const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
let obj = { kind: "guild", id: "2025-12_voice_channel_hoisting", label: "Voice Channel Hoisting", commonTriggerPoint: CommonTriggerPoints.VOICE_CALL, defaultConfig: { enableWaveformIcon: false, enableHighlight: false }, treatments: items };
items = [{ id: 1, label: "Both waveform and highlight", config: { enableWaveformIcon: true, enableHighlight: true } }, { id: 2, label: "Waveform icon only", config: { enableWaveformIcon: true, enableHighlight: false } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/channel/VoiceChannelHoistingExperiment.tsx");

export const VoiceChannelHoistingExperiment = experiment;
export function useVoiceChannelHoistingExperiment(guildId, location) {
  const obj = { guildId, location };
  return experiment.useExperiment(obj, { autoTrackExposure: false });
}
