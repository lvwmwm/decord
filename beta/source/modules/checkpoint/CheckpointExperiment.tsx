// Module ID: 5082
// Function ID: 5083
// Name: CheckpointExperiment
// Dependencies: [1435, 2]
// Exports: getIsCheckpointEnabled, useIsCheckpointEnabled

// Module 5082 (CheckpointExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-09-build-a-bear", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointExperiment.tsx");

export const useIsCheckpointEnabled = function useIsCheckpointEnabled(DevToolsQuickActionsScreen) {
  const obj = { location: DevToolsQuickActionsScreen };
  return closure_0.useConfig(obj).enabled;
};
export const getIsCheckpointEnabled = function getIsCheckpointEnabled(transformCheckpoint2026CardComponent) {
  const obj = { location: transformCheckpoint2026CardComponent };
  return closure_0.getConfig(obj).enabled;
};
