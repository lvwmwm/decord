// Module ID: 12650
// Function ID: 97270
// Name: getLowLatencyRateControlExperimentConfig
// Dependencies: []
// Exports: getLowLatencyRateControlExperimentConfig

// Module 12650 (getLowLatencyRateControlExperimentConfig)
const obj = { margin: "OrbsIcon", paddingHorizontal: "png", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
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
