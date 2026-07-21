// Module ID: 4339
// Function ID: 38328
// Name: useIsStageVoicePanelEnabled
// Dependencies: []
// Exports: isStageVoicePanelEnabled, useIsStageVoicePanelEnabled

// Module 4339 (useIsStageVoicePanelEnabled)
const _module = require(dependencyMap[0]);
const obj = { margin: null, paddingHorizontal: null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/stage_channels/StageVoicePanelExperiment.tsx");

export const useIsStageVoicePanelEnabled = function useIsStageVoicePanelEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const isStageVoicePanelEnabled = function isStageVoicePanelEnabled(voice_panel_utils) {
  return closure_0.getConfig({ location: voice_panel_utils }).enabled;
};
