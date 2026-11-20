// Module ID: 6221
// Function ID: 6222
// Name: CheckpointExperiments
// Dependencies: [1450, 2]
// Exports: getIsCheckpointCardEnabled, getIsCheckpointEnabled, isCheckpointCharacterSaveEnabled, useCheckpointQAMode, useIsCheckpointCardEnabled, useIsCheckpointEnabled, useIsCheckpointIntroEnabled

// Module 6221 (CheckpointExperiments)
import ApexExperiment_mod from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-09-build-a-bear", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
let obj2 = { name: "2026-09-build-a-bear-cards", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_1 = ApexExperiment.createApexExperiment(obj2);
ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2026-10-build-a-bear-qa", kind: "user", defaultConfig: { mode: "off" }, variations: { 0: { mode: "off" }, 1: { mode: "all" }, 2: { mode: "reset_only" } } };
let closure_2 = ApexExperiment.createApexExperiment(obj3);
ApexExperiment = ApexExperiment_mod;
const obj4 = { name: "2026-11-checkpoint-intro", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_3 = ApexExperiment.createApexExperiment(obj4);
ApexExperiment = ApexExperiment_mod;
const obj5 = { name: "2026-11-build-a-bear-images", kind: "user", defaultConfig: { canSaveCharacter: false }, variations: { 0: { canSaveCharacter: false }, 1: { canSaveCharacter: true } } };
const config = ApexExperiment.createApexExperiment(obj5);
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
export function useIsCheckpointIntroEnabled(location) {
  const obj = { location };
  return closure_3.useConfig(obj).enabled;
}
export function isCheckpointCharacterSaveEnabled(location) {
  const obj = { location };
  let canSaveCharacter = closure_1.getConfig(obj).enabled;
  if (canSaveCharacter) {
    const obj2 = { location };
    canSaveCharacter = config.getConfig(obj2).canSaveCharacter;
  }
  return canSaveCharacter;
}
