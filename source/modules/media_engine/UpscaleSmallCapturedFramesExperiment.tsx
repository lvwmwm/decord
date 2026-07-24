// Module ID: 12821
// Function ID: 99797
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12821 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-upscale-small-captured-frames", kind: "user", defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 }, variations: { [1]: { minCaptureWidth: 130, minCaptureHeight: 130 } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/UpscaleSmallCapturedFramesExperiment.tsx");

export const UpscaleSmallCapturedFramesExperiment = apexExperiment;
