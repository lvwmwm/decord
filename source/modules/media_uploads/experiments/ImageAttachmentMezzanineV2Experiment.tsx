// Module ID: 4709
// Function ID: 40962
// Name: getImageAttachmentMezzanineV2Config
// Dependencies: []
// Exports: getImageAttachmentMezzanineV2Config

// Module 4709 (getImageAttachmentMezzanineV2Config)
const _module = require(dependencyMap[0]);
const obj = { 844175713: null, 1387159956: null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { -843730793: 848494596, -1219677227: -79495167 }, [2]: {} } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_uploads/experiments/ImageAttachmentMezzanineV2Experiment.tsx");

export const getImageAttachmentMezzanineV2Config = function getImageAttachmentMezzanineV2Config(location) {
  return config.getConfig({ location: location.location });
};
