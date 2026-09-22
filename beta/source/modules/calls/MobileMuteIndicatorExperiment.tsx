// Module ID: 17646
// Function ID: 17647
// Name: MobileMuteIndicatorExperiment
// Dependencies: [1439, 2]

// Module 17646 (MobileMuteIndicatorExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

const obj = { kind: "user", name: "2026-02-mobile-mute-indicator", defaultConfig: { enableMuteWarning: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enableMuteWarning: true };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/MobileMuteIndicatorExperiment.tsx");

export default apex_ApexExperimentDefault(obj);
