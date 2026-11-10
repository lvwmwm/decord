// Module ID: 6088
// Function ID: 6089
// Name: CheckpointExperiments
// Dependencies: [1447, 2]
// Exports: getIsCheckpointCardEnabled, getIsCheckpointEnabled, useIsCheckpointCardEnabled, useIsCheckpointEnabled, useIsCheckpointQAEnabled

// Module 6088 (CheckpointExperiments)
import ApexExperiment_mod from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-09-build-a-bear", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj2 = { name: "2026-09-build-a-bear-cards", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_1 = ApexExperiment.createApexExperiment(obj2);
ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2026-10-build-a-bear-qa", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
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
export function getIsCheckpointCardEnabled(transformCheckpoint2026CardComponent) {
  const obj = { location: transformCheckpoint2026CardComponent };
  return closure_1.getConfig(obj).enabled;
}
export function useIsCheckpointQAEnabled(CheckpointProfileEntrypoint) {
  const obj = { location: CheckpointProfileEntrypoint };
  return closure_2.useConfig(obj).enabled;
}
