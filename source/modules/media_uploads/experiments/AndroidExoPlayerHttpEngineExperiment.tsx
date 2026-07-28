// Module ID: 7970
// Function ID: 63249
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 7970 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-02-android-exoplayer-http-engine", kind: "user", defaultConfig: { httpEngine: "default" }, variations: { [0]: { httpEngine: "default" }, [1]: { httpEngine: "okhttp" }, [2]: { httpEngine: "cronet" } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_uploads/experiments/AndroidExoPlayerHttpEngineExperiment.tsx");

export const AndroidExoPlayerHttpEngineExperiment = apexExperiment;
