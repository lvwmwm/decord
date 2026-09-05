// Module ID: 1879
// Function ID: 1880
// Name: getForceSdrEmojisStickersConfig
// Dependencies: [1433, 2]
// Exports: getForceSdrEmojisStickersConfig

// Module 1879 (getForceSdrEmojisStickersConfig)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-10-force-sdr-emojis-stickers", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/image_upload/ForceSdrEmojisStickersExperiment.tsx");

export const getForceSdrEmojisStickersConfig = function getForceSdrEmojisStickersConfig(location) {
  return config.getConfig({ location: location.location });
};
