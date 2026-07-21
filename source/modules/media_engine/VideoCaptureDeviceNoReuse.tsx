// Module ID: 12713
// Function ID: 97585
// Name: apexExperiment
// Dependencies: []

// Module 12713 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { overrideDeviceReuse: false }, variations: { [1]: { overrideDeviceReuse: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_engine/VideoCaptureDeviceNoReuse.tsx");

export const VideoCaptureDeviceNoReuseExperiment = apexExperiment;
