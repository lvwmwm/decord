// Module ID: 12649
// Function ID: 97308
// Name: getAGC2ExperimentConfig
// Dependencies: []
// Exports: getAGC2ExperimentConfig

// Module 12649 (getAGC2ExperimentConfig)
let obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
const _module = require(dependencyMap[0]);
obj = { "Bool(false)": true, "Bool(false)": true, defaultConfig: { noiseCancellationDuringProcessing: false, noiseCancellationConfig: { useAGC2: false } } };
obj = { <string:1515281568>: "isArray", <string:3439027534>: "isArray", <string:1365503153>: "isArray" };
obj.noiseCancellationConfig = obj;
obj.variations = { [1]: { noiseCancellationDuringProcessing: true, noiseCancellationConfig: { useAGC2: false } }, [2]: { noiseCancellationConfig: obj }, [3]: obj, [4]: { noiseCancellationConfig: obj }, [5]: { noiseCancellationConfig: obj }, [6]: { noiseCancellationConfig: obj } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/AGC2Experiment.tsx");

export const getAGC2ExperimentConfig = function getAGC2ExperimentConfig(disable) {
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
