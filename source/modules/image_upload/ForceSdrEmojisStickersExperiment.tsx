// Module ID: 1878
// Function ID: 1879
// Name: getForceSdrEmojisStickersConfig
// Dependencies: [1452, 2]
// Exports: getForceSdrEmojisStickersConfig

// Module 1878 (getForceSdrEmojisStickersConfig)
import ApexExperiment from "ApexExperiment";

let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-10-force-sdr-emojis-stickers", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/image_upload/ForceSdrEmojisStickersExperiment.tsx");

export const getForceSdrEmojisStickersConfig = function getForceSdrEmojisStickersConfig(location) {
  return config.getConfig({ location: location.location });
};
