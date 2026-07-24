// Module ID: 12822
// Function ID: 99798
// Name: getGlobalFramePoolLockExperimentConfig
// Dependencies: [1325, 2]
// Exports: getGlobalFramePoolLockExperimentConfig

// Module 12822 (getGlobalFramePoolLockExperimentConfig)
let obj = { kind: "user", name: "2025-11-global-frame-pool-lock", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = require("getUnitId")(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/GlobalFramePoolLockExperiment.tsx");

export const getGlobalFramePoolLockExperimentConfig = function getGlobalFramePoolLockExperimentConfig(disable) {
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
