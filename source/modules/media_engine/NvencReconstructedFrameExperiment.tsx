// Module ID: 12887
// Function ID: 100117
// Name: getNvencReconstructedFrameExperimentConfig
// Dependencies: [1325, 2]
// Exports: getNvencReconstructedFrameExperimentConfig

// Module 12887 (getNvencReconstructedFrameExperimentConfig)
let obj = { kind: "user", name: "2026-07-nvenc-reconstructed-frames", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = require("getUnitId")(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/NvencReconstructedFrameExperiment.tsx");

export const getNvencReconstructedFrameExperimentConfig = function getNvencReconstructedFrameExperimentConfig(disable) {
  let flag = disable.disable;
  if (flag === undefined) {
    flag = false;
  }
  let obj = closure_0;
  if (flag) {
    let defaultConfig = obj.definition.defaultConfig;
  } else {
    obj = { location: disable.location };
    defaultConfig = obj.getConfig(obj);
  }
  return defaultConfig;
};
