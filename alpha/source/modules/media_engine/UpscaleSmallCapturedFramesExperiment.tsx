// Module ID: 13553
// Function ID: 13554
// Name: UpscaleSmallCapturedFramesExperiment
// Dependencies: [1435, 2]

// Module 13553 (UpscaleSmallCapturedFramesExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-06-upscale-small-captured-frames", kind: "user", defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 }, variations: null };
const obj2 = { 1: null };
obj2[1] = { minCaptureWidth: 130, minCaptureHeight: 130 };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/UpscaleSmallCapturedFramesExperiment.tsx");

export const UpscaleSmallCapturedFramesExperiment = apexExperiment;
