// Module ID: 6023
// Function ID: 6024
// Name: CheckpointExperiments
// Dependencies: [1455, 558, 576, 2]
// Exports: getIsCheckpointCardEnabled, getIsCheckpointEnabled

// Module 6023 (CheckpointExperiments)
import react from "react" /* 576 */;
import ApexExperiment_mod from "ApexExperiment" /* 1455 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-09-build-a-bear", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsCheckpointEnabled(location) {
  let tmp2;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_2.useConfig(tmp2).enabled;
}) : (function useIsCheckpointEnabled(location) {
  const obj = { location };
  return closure_2.useConfig(obj).enabled;
});
ApexExperiment = ApexExperiment_mod;
let obj2 = { name: "2026-09-build-a-bear-cards", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointExperiments.tsx");

export const useIsCheckpointEnabled = tmp2;
export const getIsCheckpointEnabled = function getIsCheckpointEnabled(getCheckpointClickable) {
  const obj = { location: getCheckpointClickable };
  return closure_2.getConfig(obj).enabled;
};
export const getIsCheckpointCardEnabled = function getIsCheckpointCardEnabled(transformCheckpoint2026CardComponent) {
  const obj = { location: transformCheckpoint2026CardComponent };
  return config.getConfig(obj).enabled;
};
