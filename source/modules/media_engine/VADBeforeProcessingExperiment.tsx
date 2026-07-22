// Module ID: 12648
// Function ID: 97306
// Name: getVADBeforeProcessingExperimentConfig
// Dependencies: []
// Exports: getVADBeforeProcessingExperimentConfig

// Module 12648 (getVADBeforeProcessingExperimentConfig)
let closure_0 = importDefault(dependencyMap[0])({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
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
