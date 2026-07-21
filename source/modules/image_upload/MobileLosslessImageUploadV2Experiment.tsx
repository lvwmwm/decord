// Module ID: 4698
// Function ID: 40899
// Name: useMobileLosslessImageUploadV2Experiment
// Dependencies: []
// Exports: useMobileLosslessImageUploadV2Experiment

// Module 4698 (useMobileLosslessImageUploadV2Experiment)
const _module = require(dependencyMap[0]);
const obj = { margin: null, paddingHorizontal: null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/image_upload/MobileLosslessImageUploadV2Experiment.tsx");

export const useMobileLosslessImageUploadV2Experiment = function useMobileLosslessImageUploadV2Experiment(location) {
  return config.getConfig({ location: location.location });
};
