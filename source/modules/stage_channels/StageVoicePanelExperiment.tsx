// Module ID: 4401
// Function ID: 4402
// Name: useIsStageVoicePanelEnabled
// Dependencies: [1452, 2]
// Exports: isStageVoicePanelEnabled, useIsStageVoicePanelEnabled

// Module 4401 (useIsStageVoicePanelEnabled)
import ApexExperiment from "ApexExperiment";

let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-stage-voice-panel", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/stage_channels/StageVoicePanelExperiment.tsx");

export const useIsStageVoicePanelEnabled = function useIsStageVoicePanelEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isStageVoicePanelEnabled = function isStageVoicePanelEnabled(stage_channel_action_creator_extras) {
  return closure_0.getConfig({ location: stage_channel_action_creator_extras }).enabled;
};
