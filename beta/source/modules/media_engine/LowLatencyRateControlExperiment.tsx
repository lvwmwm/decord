// Module ID: 14323
// Function ID: 14324
// Name: LowLatencyRateControlExperiment
// Dependencies: [1439, 2]
// Exports: getLowLatencyRateControlExperimentConfig

// Module 14323 (LowLatencyRateControlExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

const obj = { kind: "user", name: "2025-10-low-latency-rate-control", defaultConfig: { enabled: false }, variations: null };
let obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = apex_ApexExperimentDefault(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_engine/LowLatencyRateControlExperiment.tsx");

export const getLowLatencyRateControlExperimentConfig = function getLowLatencyRateControlExperimentConfig(disable) {
  let flag = disable.disable;
  if (flag === undefined) {
    flag = false;
  }
  if (flag) {
    let defaultConfig = obj.definition.defaultConfig;
  } else {
    const obj2 = { location: disable.location };
    defaultConfig = obj.getConfig(obj2);
  }
  return defaultConfig;
};
