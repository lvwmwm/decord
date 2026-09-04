// Module ID: 13767
// Function ID: 13768
// Name: apexExperiment
// Dependencies: [1468, 2]

// Module 13767 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { minCaptureWidth: 130, minCaptureHeight: 130 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-upscale-small-captured-frames", kind: "user", defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/UpscaleSmallCapturedFramesExperiment.tsx");

export const UpscaleSmallCapturedFramesExperiment = apexExperiment;
