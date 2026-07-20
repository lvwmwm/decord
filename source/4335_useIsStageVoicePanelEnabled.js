// Module ID: 4335
// Function ID: 38280
// Name: useIsStageVoicePanelEnabled
// Dependencies: []
// Exports: isStageVoicePanelEnabled, useIsStageVoicePanelEnabled

// Module 4335 (useIsStageVoicePanelEnabled)
const _module = require(dependencyMap[0]);
const obj = { "Null": -447004160, "Null": -523763710, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/stage_channels/StageVoicePanelExperiment.tsx");

export const useIsStageVoicePanelEnabled = function useIsStageVoicePanelEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isStageVoicePanelEnabled = function isStageVoicePanelEnabled(voice_panel_utils) {
  return closure_0.getConfig({ location: voice_panel_utils }).enabled;
};
