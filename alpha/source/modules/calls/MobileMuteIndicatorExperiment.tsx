// Module ID: 17526
// Function ID: 17527
// Name: MobileMuteIndicatorExperiment
// Dependencies: [1435, 2]

// Module 17526 (MobileMuteIndicatorExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1435 */;

const obj = { kind: "user", name: "2026-02-mobile-mute-indicator", defaultConfig: { enableMuteWarning: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enableMuteWarning: true };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/MobileMuteIndicatorExperiment.tsx");

export default apex_ApexExperimentDefault(obj);
