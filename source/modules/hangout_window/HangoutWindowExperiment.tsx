// Module ID: 15624
// Function ID: 120297
// Name: items
// Dependencies: [4080, 4077, 2]
// Exports: getHangoutWindowExperiment, useHangoutWindowExperiment

// Module 15624 (items)
import createExperiment from "createExperiment";

let obj = { kind: "guild", id: "2026-02_hangout_window", label: "Hangout Window", defaultConfig: { enableHangoutWindow: false }, commonTriggerPoint: require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL };
obj = { id: 1, label: "Enable Hangout Window", config: { enableHangoutWindow: true } };
const items = [obj];
obj.treatments = items;
const experiment = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/hangout_window/HangoutWindowExperiment.tsx");

export const HangoutWindowExperiment = experiment;
export const useHangoutWindowExperiment = function useHangoutWindowExperiment(guildId) {
  return experiment.useExperiment({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};
export const getHangoutWindowExperiment = function getHangoutWindowExperiment(guildId) {
  return experiment.getCurrentConfig({ guildId: guildId.guildId, location: guildId.location }, { autoTrackExposure: true });
};
