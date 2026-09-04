// Module ID: 13768
// Function ID: 13769
// Name: getGlobalFramePoolLockExperimentConfig
// Dependencies: [1469, 2]
// Exports: getGlobalFramePoolLockExperimentConfig

// Module 13768 (getGlobalFramePoolLockExperimentConfig)
import getUnitIdDefault from "getUnitId" /* 1469 */;

let obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = getUnitIdDefault({ kind: "user", name: "2025-11-global-frame-pool-lock", defaultConfig: { enabled: false }, variations: obj });
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
    obj = { location: null };
    obj[0] = disable.location;
    defaultConfig = obj.getConfig(obj);
  }
  return defaultConfig;
};
