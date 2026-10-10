// Module ID: 7782
// Function ID: 7783
// Name: MobileLosslessImageUploadV2Experiment
// Dependencies: [1453, 2]
// Exports: useMobileLosslessImageUploadV2Experiment

// Module 7782 (MobileLosslessImageUploadV2Experiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2025-12-mobile-lossless-image-upload-v2", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/image_upload/MobileLosslessImageUploadV2Experiment.tsx");

export const useMobileLosslessImageUploadV2Experiment = function useMobileLosslessImageUploadV2Experiment(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
