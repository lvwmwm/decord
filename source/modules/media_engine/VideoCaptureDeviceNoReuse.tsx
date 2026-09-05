// Module ID: 14077
// Function ID: 14078
// Name: apexExperiment
// Dependencies: [1433, 2]

// Module 14077 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

const obj = { 1: null };
obj[1] = { overrideDeviceReuse: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-video-capture-device-no-reuse", kind: "user", defaultConfig: { overrideDeviceReuse: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/VideoCaptureDeviceNoReuse.tsx");

export const VideoCaptureDeviceNoReuseExperiment = apexExperiment;
