// Module ID: 4710
// Function ID: 40955
// Name: getImageAttachmentMezzanineV2Config
// Dependencies: []
// Exports: getImageAttachmentMezzanineV2Config

// Module 4710 (getImageAttachmentMezzanineV2Config)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: null, 0: null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: {}, [2]: {} } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_uploads/experiments/ImageAttachmentMezzanineV2Experiment.tsx");

export const getImageAttachmentMezzanineV2Config = function getImageAttachmentMezzanineV2Config(location) {
  return config.getConfig({ location: location.location });
};
