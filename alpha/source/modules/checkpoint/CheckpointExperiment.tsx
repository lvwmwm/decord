// Module ID: 5456
// Function ID: 5457
// Name: CheckpointExperiment
// Dependencies: [1452, 558, 576, 2]
// Exports: getIsCheckpointEnabled

// Module 5456 (CheckpointExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

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
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointExperiment.tsx");

export const useIsCheckpointEnabled = tmp2;
export const getIsCheckpointEnabled = function getIsCheckpointEnabled(transformCheckpoint2026CardComponent) {
  const obj = { location: transformCheckpoint2026CardComponent };
  return closure_2.getConfig(obj).enabled;
};
