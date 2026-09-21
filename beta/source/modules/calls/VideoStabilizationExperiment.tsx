// Module ID: 14080
// Function ID: 14081
// Name: VideoStabilizationExperiment
// Dependencies: [1439, 2]

// Module 14080 (VideoStabilizationExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

const obj = { kind: "user", name: "2026-05-ios-video-stabilization", defaultConfig: { mode: "off" }, variations: null };
const obj2 = { 1: null, 2: { mode: "standard" } };
obj2[2] = { mode: "low_latency" };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/VideoStabilizationExperiment.tsx");

export default apex_ApexExperimentDefault(obj);
