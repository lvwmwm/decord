// Module ID: 12722
// Function ID: 97640
// Name: apexExperiment
// Dependencies: []

// Module 12722 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { overrideDeviceReuse: false }, variations: { [1]: { overrideDeviceReuse: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/VideoCaptureDeviceNoReuse.tsx");

export const VideoCaptureDeviceNoReuseExperiment = apexExperiment;
