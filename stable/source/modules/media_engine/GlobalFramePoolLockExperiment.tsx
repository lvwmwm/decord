// Module ID: 13555
// Function ID: 13556
// Name: GlobalFramePoolLockExperiment
// Dependencies: [1442, 2]
// Exports: getGlobalFramePoolLockExperimentConfig

// Module 13555 (GlobalFramePoolLockExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1442 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2025-11-global-frame-pool-lock", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/media_engine/GlobalFramePoolLockExperiment.tsx");

export const getGlobalFramePoolLockExperimentConfig = function getGlobalFramePoolLockExperimentConfig(disable) {
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
