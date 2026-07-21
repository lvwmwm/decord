// Module ID: 12715
// Function ID: 97607
// Name: apexExperiment
// Dependencies: []

// Module 12715 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 844175713: null, 1387159956: null, defaultConfig: { overrideDeviceReuse: false }, variations: { [1]: { overrideDeviceReuse: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/VideoCaptureDeviceNoReuse.tsx");

export const VideoCaptureDeviceNoReuseExperiment = apexExperiment;
