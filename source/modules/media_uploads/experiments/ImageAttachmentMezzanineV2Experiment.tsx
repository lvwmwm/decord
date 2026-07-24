// Module ID: 4712
// Function ID: 40993
// Name: getImageAttachmentMezzanineV2Config
// Dependencies: [1428, 2]
// Exports: getImageAttachmentMezzanineV2Config

// Module 4712 (getImageAttachmentMezzanineV2Config)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-09-image-attachment-mezzanine-v2", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true, maxFileSizeBytes: 524288 }, [2]: { enabled: true, maxFileSizeBytes: 262144 } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_uploads/experiments/ImageAttachmentMezzanineV2Experiment.tsx");

export const getImageAttachmentMezzanineV2Config = function getImageAttachmentMezzanineV2Config(location) {
  return config.getConfig({ location: location.location });
};
