// Module ID: 15046
// Function ID: 15047
// Name: VoiceChannelBadgeExperiment
// Dependencies: [5234, 5231, 2]
// Exports: getVoiceChannelBadgeExperiment, useVoiceChannelBadgeExperiment

// Module 15046 (VoiceChannelBadgeExperiment)
import ExperimentConstants from "ExperimentConstants" /* 5234 */;
import createExperiment from "module_5231" /* 5231 */;
import size from "module_2" /* 2 */;

let items;
const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
let obj = { id: "2026-03_voice_badge", kind: "guild", commonTriggerPoint: CommonTriggerPoints.VOICE_CALL, label: "Display Voice Channel Badge", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 0, label: "Control", config: { enabled: false } }, { id: 1, label: "Show voice badges", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/channel/VoiceChannelBadgeExperiment.tsx");

export const VoiceChannelBadgeExperiment = experiment;
export function useVoiceChannelBadgeExperiment(guildId) {
  const obj = { guildId: guildId.guildId, location: guildId.location };
  return experiment.useExperiment(obj, { autoTrackExposure: true });
}
export function getVoiceChannelBadgeExperiment(guildId) {
  const obj = { guildId: guildId.guildId, location: guildId.location };
  return experiment.getCurrentConfig(obj, { autoTrackExposure: true });
}
