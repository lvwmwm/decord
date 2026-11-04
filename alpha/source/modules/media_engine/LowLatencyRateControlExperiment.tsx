// Module ID: 16188
// Function ID: 16189
// Name: LowLatencyRateControlExperiment
// Dependencies: [1450, 2]
// Exports: getLowLatencyRateControlExperimentConfig

// Module 16188 (LowLatencyRateControlExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2025-10-low-latency-rate-control", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/media_engine/LowLatencyRateControlExperiment.tsx");

export function getLowLatencyRateControlExperimentConfig(disable) {
  let defaultConfig;
  let flag = disable.disable;
  const _location = disable.location;
  if (flag === undefined) {
    flag = false;
  }
  if (flag) {
    defaultConfig = obj.definition.defaultConfig;
  } else {
    const obj2 = { location: _location };
    defaultConfig = obj.getConfig(obj2);
  }
  return defaultConfig;
}
