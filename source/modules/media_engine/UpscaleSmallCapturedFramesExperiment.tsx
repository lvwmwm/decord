// Module ID: 13187
// Function ID: 13188
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 13187 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { minCaptureWidth: 130, minCaptureHeight: 130 };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-upscale-small-captured-frames", kind: "user", defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/UpscaleSmallCapturedFramesExperiment.tsx");

export const UpscaleSmallCapturedFramesExperiment = apexExperiment;
