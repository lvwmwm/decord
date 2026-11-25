// Module ID: 15514
// Function ID: 15515
// Name: VideoCaptureDeviceNoReuse
// Dependencies: [1450, 2]

// Module 15514 (VideoCaptureDeviceNoReuse)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-03-video-capture-device-no-reuse", kind: "user", defaultConfig: { overrideDeviceReuse: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { overrideDeviceReuse: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/VideoCaptureDeviceNoReuse.tsx");

export const VideoCaptureDeviceNoReuseExperiment = apexExperiment;
