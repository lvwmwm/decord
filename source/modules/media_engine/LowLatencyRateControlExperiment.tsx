// Module ID: 12652
// Function ID: 97292
// Name: getLowLatencyRateControlExperimentConfig
// Dependencies: []
// Exports: getLowLatencyRateControlExperimentConfig

// Module 12652 (getLowLatencyRateControlExperimentConfig)
const obj = { bottom: 24, name: 24, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/media_engine/LowLatencyRateControlExperiment.tsx");

export const getLowLatencyRateControlExperimentConfig = function getLowLatencyRateControlExperimentConfig(disable) {
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
