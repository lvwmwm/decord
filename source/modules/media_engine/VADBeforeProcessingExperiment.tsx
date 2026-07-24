// Module ID: 12813
// Function ID: 99783
// Name: getVADBeforeProcessingExperimentConfig
// Dependencies: [1325, 2]
// Exports: getVADBeforeProcessingExperimentConfig

// Module 12813 (getVADBeforeProcessingExperimentConfig)
let obj = { kind: "user", name: "2025-10-vad-before-processing", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = require("getUnitId")(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/VADBeforeProcessingExperiment.tsx");

export const getVADBeforeProcessingExperimentConfig = function getVADBeforeProcessingExperimentConfig(disable) {
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
