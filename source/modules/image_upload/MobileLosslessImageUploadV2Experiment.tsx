// Module ID: 4697
// Function ID: 40915
// Name: useMobileLosslessImageUploadV2Experiment
// Dependencies: []
// Exports: useMobileLosslessImageUploadV2Experiment

// Module 4697 (useMobileLosslessImageUploadV2Experiment)
const _module = require(dependencyMap[0]);
const obj = { "Bool(false)": null, "Bool(false)": null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/image_upload/MobileLosslessImageUploadV2Experiment.tsx");

export const useMobileLosslessImageUploadV2Experiment = function useMobileLosslessImageUploadV2Experiment(location) {
  return config.getConfig({ location: location.location });
};
