// Module ID: 16037
// Function ID: 16038
// Name: UpscaleSmallCapturedFramesExperiment
// Dependencies: [1449, 2]

// Module 16037 (UpscaleSmallCapturedFramesExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-06-upscale-small-captured-frames", kind: "user", defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { minCaptureWidth: 130, minCaptureHeight: 130 };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/UpscaleSmallCapturedFramesExperiment.tsx");

export const UpscaleSmallCapturedFramesExperiment = apexExperiment;
