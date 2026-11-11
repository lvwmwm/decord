// Module ID: 6128
// Function ID: 6129
// Name: ProportionalVadIndicatorExperiment
// Dependencies: [1450, 2]

// Module 6128 (ProportionalVadIndicatorExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2025-12-proportional-vad-indicator", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true }, 3: { enabled: true, disableUI: true }, 4: { enabled: true, disableUI: true, swallowVolumeOnlySpeakingEvents: true } };
obj2[4] = { enabled: true, disableUI: true, dontEmitVolumeOnlySpeakingEvents: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/calls/ProportionalVadIndicatorExperiment.tsx");

export default tmp2;
