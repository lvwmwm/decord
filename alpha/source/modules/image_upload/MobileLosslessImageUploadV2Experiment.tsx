// Module ID: 8234
// Function ID: 8235
// Name: MobileLosslessImageUploadV2Experiment
// Dependencies: [1447, 2]
// Exports: useMobileLosslessImageUploadV2Experiment

// Module 8234 (MobileLosslessImageUploadV2Experiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2025-12-mobile-lossless-image-upload-v2", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/image_upload/MobileLosslessImageUploadV2Experiment.tsx");

export function useMobileLosslessImageUploadV2Experiment(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
}
