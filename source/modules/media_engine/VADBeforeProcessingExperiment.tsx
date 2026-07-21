// Module ID: 12641
// Function ID: 97273
// Name: getVADBeforeProcessingExperimentConfig
// Dependencies: []
// Exports: getVADBeforeProcessingExperimentConfig

// Module 12641 (getVADBeforeProcessingExperimentConfig)
const obj = { bottom: true, name: "/assets/images/native/icons", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/media_engine/VADBeforeProcessingExperiment.tsx");

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
