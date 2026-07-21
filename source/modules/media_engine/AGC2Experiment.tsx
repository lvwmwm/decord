// Module ID: 12642
// Function ID: 97275
// Name: getAGC2ExperimentConfig
// Dependencies: []
// Exports: getAGC2ExperimentConfig

// Module 12642 (getAGC2ExperimentConfig)
let obj = { guildId: true, userId: true, onCancel: true, flexDirection: true, justifyContent: true, width: true, height: true, marginBottom: true, kicking: true };
const _module = require(dependencyMap[0]);
obj = { marginLeft: false, marginRight: false, borderRadius: false };
obj.noiseCancellationConfig = obj;
obj = { marginLeft: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000039873323606451113, marginRight: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042721418146003455, borderRadius: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004556951274888411 };
obj.noiseCancellationConfig = obj;
let closure_0 = _module.createApexExperiment({ defaultConfig: { noiseCancellationDuringProcessing: false, noiseCancellationConfig: { useAGC2: false } }, variations: { [1]: { noiseCancellationDuringProcessing: true, noiseCancellationConfig: { useAGC2: false } }, [2]: obj, [3]: { noiseCancellationConfig: obj }, [4]: { noiseCancellationConfig: obj }, [5]: { noiseCancellationConfig: obj }, [6]: obj } });
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
