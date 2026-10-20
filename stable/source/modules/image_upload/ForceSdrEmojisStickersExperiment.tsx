// Module ID: 1900
// Function ID: 1901
// Name: ForceSdrEmojisStickersExperiment
// Dependencies: [1453, 2]
// Exports: getForceSdrEmojisStickersConfig

// Module 1900 (ForceSdrEmojisStickersExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2025-10-force-sdr-emojis-stickers", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/image_upload/ForceSdrEmojisStickersExperiment.tsx");

export const getForceSdrEmojisStickersConfig = function getForceSdrEmojisStickersConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
