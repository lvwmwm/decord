// Module ID: 4709
// Function ID: 40971
// Name: getImageAttachmentMezzanineV2Config
// Dependencies: []
// Exports: getImageAttachmentMezzanineV2Config

// Module 4709 (getImageAttachmentMezzanineV2Config)
const _module = require(dependencyMap[0]);
const obj = { y: null, DateToSystemTimezoneSetter: null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { "Bool(true)": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000019392203330473584, "Bool(true)": 19498315566220677000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }, [2]: {} } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/media_uploads/experiments/ImageAttachmentMezzanineV2Experiment.tsx");

export const getImageAttachmentMezzanineV2Config = function getImageAttachmentMezzanineV2Config(location) {
  return config.getConfig({ location: location.location });
};
