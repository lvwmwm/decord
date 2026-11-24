// Module ID: 18619
// Function ID: 18620
// Name: HangoutWindowExperiment
// Dependencies: [5535, 5918, 2]
// Exports: getHangoutWindowExperiment, useHangoutWindowExperiment

// Module 18619 (HangoutWindowExperiment)
import ExperimentConstants from "ExperimentConstants" /* 5535 */;
import createExperiment from "module_5918" /* 5918 */;
import size from "module_2" /* 2 */;

let items;
const CommonTriggerPoints = ExperimentConstants.CommonTriggerPoints;
let obj = { kind: "guild", id: "2026-02_hangout_window", label: "Hangout Window", defaultConfig: { enableHangoutWindow: false }, commonTriggerPoint: CommonTriggerPoints.VOICE_CALL, treatments: items };
items = [{ id: 1, label: "Enable Hangout Window", config: { enableHangoutWindow: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/hangout_window/HangoutWindowExperiment.tsx");

export const HangoutWindowExperiment = experiment;
export function useHangoutWindowExperiment(guildId) {
  const obj = { guildId: guildId.guildId, location: guildId.location };
  return experiment.useExperiment(obj, { autoTrackExposure: true });
}
export function getHangoutWindowExperiment(guildId) {
  const obj = { guildId: guildId.guildId, location: guildId.location };
  return experiment.getCurrentConfig(obj, { autoTrackExposure: true });
}
