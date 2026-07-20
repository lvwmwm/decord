// Module ID: 4698
// Function ID: 40861
// Name: getIosJpegliConfig
// Dependencies: []
// Exports: getIosJpegliConfig

// Module 4698 (getIosJpegliConfig)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { useJpegliEncoder: false }, variations: { [0]: { useJpegliEncoder: false }, [1]: { useJpegliEncoder: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_uploads/experiments/IosJpegliExperiment.tsx");

export const getIosJpegliConfig = function getIosJpegliConfig(location) {
  return config.getConfig({ location: location.location });
};
