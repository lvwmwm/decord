// Module ID: 5397
// Function ID: 5398
// Name: ImageAttachmentMezzanineV2Experiment
// Dependencies: [1434, 2]
// Exports: getImageAttachmentMezzanineV2Config

// Module 5397 (ImageAttachmentMezzanineV2Experiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ name: "2025-09-image-attachment-mezzanine-v2", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true, maxFileSizeBytes: 524288 }, 2: { enabled: true, maxFileSizeBytes: 262144 } } });
const result = size.fileFinishedImporting("modules/media_uploads/experiments/ImageAttachmentMezzanineV2Experiment.tsx");

export const getImageAttachmentMezzanineV2Config = function getImageAttachmentMezzanineV2Config(location) {
  return config.getConfig({ location: location.location });
};
