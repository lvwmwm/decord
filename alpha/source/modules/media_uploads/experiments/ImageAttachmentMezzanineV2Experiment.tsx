// Module ID: 8235
// Function ID: 8236
// Name: ImageAttachmentMezzanineV2Experiment
// Dependencies: [1453, 2]
// Exports: getImageAttachmentMezzanineV2Config

// Module 8235 (ImageAttachmentMezzanineV2Experiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj = { name: "2025-09-image-attachment-mezzanine-v2", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true, maxFileSizeBytes: 524288 }, 2: { enabled: true, maxFileSizeBytes: 262144 } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/ImageAttachmentMezzanineV2Experiment.tsx");

export function getImageAttachmentMezzanineV2Config(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
}
