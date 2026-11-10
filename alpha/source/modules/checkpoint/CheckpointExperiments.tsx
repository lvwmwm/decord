// Module ID: 6572
// Function ID: 6573
// Name: CheckpointExperiments
// Dependencies: [1449, 2]
// Exports: getIsCheckpointCardEnabled, getIsCheckpointEnabled, useCheckpointQAMode, useIsCheckpointCardEnabled, useIsCheckpointEnabled

// Module 6572 (CheckpointExperiments)
import ApexExperiment_mod from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-09-build-a-bear", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj2 = { name: "2026-09-build-a-bear-cards", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_1 = ApexExperiment.createApexExperiment(obj2);
ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2026-10-build-a-bear-qa", kind: "user", defaultConfig: { mode: "off" }, variations: { 0: { mode: "off" }, 1: { mode: "all" }, 2: { mode: "reset_only" } } };
let closure_2 = ApexExperiment.createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointExperiments.tsx");

export function useIsCheckpointEnabled(CheckpointProfileEntrypoint) {
  const obj = { location: CheckpointProfileEntrypoint };
  return closure_0.useConfig(obj).enabled;
}
export function getIsCheckpointEnabled(getCheckpointClickable) {
  const obj = { location: getCheckpointClickable };
  return closure_0.getConfig(obj).enabled;
}
export function useIsCheckpointCardEnabled(Checkpoint2026ForwardPreview) {
  const obj = { location: Checkpoint2026ForwardPreview };
  return closure_1.useConfig(obj).enabled;
}
export function getIsCheckpointCardEnabled(transformCheckpointCardToRowGeneratedComponent) {
  const obj = { location: transformCheckpointCardToRowGeneratedComponent };
  return closure_1.getConfig(obj).enabled;
}
export function useCheckpointQAMode(CheckpointProfileEntrypoint) {
  const obj = { location: CheckpointProfileEntrypoint };
  return closure_2.useConfig(obj).mode;
}
