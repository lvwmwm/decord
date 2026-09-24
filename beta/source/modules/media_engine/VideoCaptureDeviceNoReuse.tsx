// Module ID: 14387
// Function ID: 14388
// Name: VideoCaptureDeviceNoReuse
// Dependencies: [1438, 2]

// Module 14387 (VideoCaptureDeviceNoReuse)
import ApexExperiment from "ApexExperiment" /* 1438 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-03-video-capture-device-no-reuse", kind: "user", defaultConfig: { overrideDeviceReuse: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { overrideDeviceReuse: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VideoCaptureDeviceNoReuse.tsx");

export const VideoCaptureDeviceNoReuseExperiment = apexExperiment;
