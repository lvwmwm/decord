// Module ID: 13536
// Function ID: 13537
// Name: GlobalFramePoolLockExperiment
// Dependencies: [1435, 2]
// Exports: getGlobalFramePoolLockExperimentConfig

// Module 13536 (GlobalFramePoolLockExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1435 */;

const obj = { kind: "user", name: "2025-11-global-frame-pool-lock", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = apex_ApexExperimentDefault(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/GlobalFramePoolLockExperiment.tsx");

export const getGlobalFramePoolLockExperimentConfig = function getGlobalFramePoolLockExperimentConfig(disable) {
  let flag = disable.disable;
  if (flag === undefined) {
    flag = false;
  }
  if (flag) {
    let defaultConfig = obj.definition.defaultConfig;
  } else {
    const obj2 = { location: disable.location };
    defaultConfig = obj.getConfig(obj2);
  }
  return defaultConfig;
};
