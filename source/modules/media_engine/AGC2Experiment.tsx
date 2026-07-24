// Module ID: 12814
// Function ID: 99785
// Name: getAGC2ExperimentConfig
// Dependencies: [1428, 2]
// Exports: getAGC2ExperimentConfig

// Module 12814 (getAGC2ExperimentConfig)
import ApexExperiment from "ApexExperiment";

let obj = { useAGC2: true, enableAnalog: false, enableDigital: true, headroom_db: 5, max_gain_db: 50, initial_gain_db: 15, max_gain_change_db_per_second: 6, max_output_noise_level_dbfs: -50, fixed_gain_db: 0 };
obj = { kind: "user", name: "2025-09-agc2-v2", defaultConfig: { noiseCancellationDuringProcessing: false, noiseCancellationConfig: { useAGC2: false } } };
obj = { noiseCancellationDuringProcessing: true, noiseCancellationConfig: null, vadKrispActivationThreshold: 0.5 };
obj.noiseCancellationConfig = obj;
const obj1 = { noiseCancellationDuringProcessing: true, noiseCancellationConfig: obj, vadKrispActivationThreshold: 0.55 };
const obj2 = { noiseCancellationDuringProcessing: true, noiseCancellationConfig: obj, vadKrispActivationThreshold: 0.6 };
const obj3 = { noiseCancellationDuringProcessing: true, noiseCancellationConfig: obj, vadKrispActivationThreshold: 0.65 };
const obj4 = { noiseCancellationDuringProcessing: true, noiseCancellationConfig: obj, vadKrispActivationThreshold: 0.7 };
obj.variations = { [1]: { noiseCancellationDuringProcessing: true, noiseCancellationConfig: { useAGC2: false } }, [2]: obj, [3]: obj1, [4]: obj2, [5]: obj3, [6]: obj4 };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/AGC2Experiment.tsx");

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
