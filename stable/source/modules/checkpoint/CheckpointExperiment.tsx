// Module ID: 15965
// Function ID: 15966
// Name: CheckpointExperiment
// Dependencies: [1434, 2]
// Exports: useIsCheckpointEnabled

// Module 15965 (CheckpointExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-09-build-a-bear", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointExperiment.tsx");

export const useIsCheckpointEnabled = function useIsCheckpointEnabled(DevToolsQuickActionsScreen) {
  return closure_0.useConfig({ location: DevToolsQuickActionsScreen }).enabled;
};
