// Module ID: 5228
// Function ID: 5229
// Name: VideoStabilizationExperiment
// Dependencies: [1453, 2]

// Module 5228 (VideoStabilizationExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-05-ios-video-stabilization", defaultConfig: { mode: "off" }, variations: obj2 };
obj2 = { 1: null, 2: { mode: "standard" } };
obj2[2] = { mode: "low_latency" };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/calls/VideoStabilizationExperiment.tsx");

export default tmp2;
