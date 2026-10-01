// Module ID: 5477
// Function ID: 5478
// Name: MobileLosslessImageUploadV2Experiment
// Dependencies: [1435, 2]
// Exports: useMobileLosslessImageUploadV2Experiment

// Module 5477 (MobileLosslessImageUploadV2Experiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2025-12-mobile-lossless-image-upload-v2", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/image_upload/MobileLosslessImageUploadV2Experiment.tsx");

export const useMobileLosslessImageUploadV2Experiment = function useMobileLosslessImageUploadV2Experiment(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
