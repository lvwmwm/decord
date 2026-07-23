// Module ID: 4343
// Function ID: 38376
// Name: useIsStageVoicePanelEnabled
// Dependencies: [1428, 2]
// Exports: isStageVoicePanelEnabled, useIsStageVoicePanelEnabled

// Module 4343 (useIsStageVoicePanelEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2026-03-stage-voice-panel", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/stage_channels/StageVoicePanelExperiment.tsx");

export const useIsStageVoicePanelEnabled = function useIsStageVoicePanelEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isStageVoicePanelEnabled = function isStageVoicePanelEnabled(voice_panel_utils) {
  return closure_0.getConfig({ location: voice_panel_utils }).enabled;
};
