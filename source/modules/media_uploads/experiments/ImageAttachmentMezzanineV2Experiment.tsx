// Module ID: 5005
// Function ID: 5006
// Name: getImageAttachmentMezzanineV2Config
// Dependencies: [1472, 2]
// Exports: getImageAttachmentMezzanineV2Config

// Module 5005 (getImageAttachmentMezzanineV2Config)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-09-image-attachment-mezzanine-v2", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true, maxFileSizeBytes: 524288 }, 2: { enabled: true, maxFileSizeBytes: 262144 } } });
const result = set.fileFinishedImporting("modules/media_uploads/experiments/ImageAttachmentMezzanineV2Experiment.tsx");

export const getImageAttachmentMezzanineV2Config = function getImageAttachmentMezzanineV2Config(location) {
  return config.getConfig({ location: location.location });
};
