// Module ID: 7992
// Function ID: 7993
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 7992 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-02-android-exoplayer-http-engine", kind: "user", defaultConfig: { httpEngine: "default" }, variations: { 0: { httpEngine: "default" }, 1: { httpEngine: "okhttp" }, 2: { httpEngine: "cronet" } } });
const result = require("set").fileFinishedImporting("modules/media_uploads/experiments/AndroidExoPlayerHttpEngineExperiment.tsx");

export const AndroidExoPlayerHttpEngineExperiment = apexExperiment;
