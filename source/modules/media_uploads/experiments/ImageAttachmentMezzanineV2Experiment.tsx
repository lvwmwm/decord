// Module ID: 4708
// Function ID: 40914
// Name: getImageAttachmentMezzanineV2Config
// Dependencies: []
// Exports: getImageAttachmentMezzanineV2Config

// Module 4708 (getImageAttachmentMezzanineV2Config)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { -9223372036854775808: true, 0: true }, [2]: {} } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_uploads/experiments/ImageAttachmentMezzanineV2Experiment.tsx");

export const getImageAttachmentMezzanineV2Config = function getImageAttachmentMezzanineV2Config(location) {
  return config.getConfig({ location: location.location });
};
