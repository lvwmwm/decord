// Module ID: 12640
// Function ID: 97253
// Name: getAGC2ExperimentConfig
// Dependencies: []
// Exports: getAGC2ExperimentConfig

// Module 12640 (getAGC2ExperimentConfig)
let obj = { "Null": null, "Null": "19.1.0", "Null": "angle", "Null": 90, "Null": null, "Null": 1, "Null": "text-xs/medium", "Null": "text-muted", "Null": 1 };
const _module = require(dependencyMap[0]);
obj = { friend_add_type: "isArray", source_page: "isArray", fontSize: "isArray" };
obj.noiseCancellationConfig = obj;
let closure_0 = _module.createApexExperiment({ defaultConfig: { noiseCancellationDuringProcessing: false, noiseCancellationConfig: { useAGC2: false } }, variations: { [1]: { noiseCancellationDuringProcessing: true, noiseCancellationConfig: { useAGC2: false } }, [2]: { noiseCancellationConfig: obj }, [3]: obj, [4]: { noiseCancellationConfig: obj }, [5]: { noiseCancellationConfig: obj }, [6]: { noiseCancellationConfig: obj } } });
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
