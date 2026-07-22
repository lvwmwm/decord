// Module ID: 12657
// Function ID: 97321
// Name: getGlobalFramePoolLockExperimentConfig
// Dependencies: []
// Exports: getGlobalFramePoolLockExperimentConfig

// Module 12657 (getGlobalFramePoolLockExperimentConfig)
let closure_0 = importDefault(dependencyMap[0])({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/media_engine/GlobalFramePoolLockExperiment.tsx");

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
