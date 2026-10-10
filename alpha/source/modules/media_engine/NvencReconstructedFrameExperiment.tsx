// Module ID: 14362
// Function ID: 14363
// Name: NvencReconstructedFrameExperiment
// Dependencies: [1454, 2]
// Exports: getNvencReconstructedFrameExperimentConfig

// Module 14362 (NvencReconstructedFrameExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1454 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-07-nvenc-reconstructed-frames", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/media_engine/NvencReconstructedFrameExperiment.tsx");

export const getNvencReconstructedFrameExperimentConfig = function getNvencReconstructedFrameExperimentConfig(disable) {
  let defaultConfig;
  let flag = disable.disable;
  const _location = disable.location;
  if (flag === undefined) {
    flag = false;
  }
  if (flag) {
    defaultConfig = obj.definition.defaultConfig;
  } else {
    const obj2 = { location: _location };
    defaultConfig = obj.getConfig(obj2);
  }
  return defaultConfig;
};
