// Module ID: 12888
// Function ID: 100119
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12888 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-video-capture-device-no-reuse", kind: "user", defaultConfig: { overrideDeviceReuse: false }, variations: { [1]: { overrideDeviceReuse: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/VideoCaptureDeviceNoReuse.tsx");

export const VideoCaptureDeviceNoReuseExperiment = apexExperiment;
