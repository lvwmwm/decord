// Module ID: 13106
// Function ID: 13107
// Name: apexExperiment
// Dependencies: [1452, 2]

// Module 13106 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { overrideDeviceReuse: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-video-capture-device-no-reuse", kind: "user", defaultConfig: { overrideDeviceReuse: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/VideoCaptureDeviceNoReuse.tsx");

export const VideoCaptureDeviceNoReuseExperiment = apexExperiment;
