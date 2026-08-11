// Module ID: 1897
// Function ID: 1898
// Name: getForceSdrEmojisStickersConfig
// Dependencies: [1471, 2]
// Exports: getForceSdrEmojisStickersConfig

// Module 1897 (getForceSdrEmojisStickersConfig)
import ApexExperiment from "ApexExperiment";

let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2025-10-force-sdr-emojis-stickers", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/image_upload/ForceSdrEmojisStickersExperiment.tsx");

export const getForceSdrEmojisStickersConfig = function getForceSdrEmojisStickersConfig(location) {
  return config.getConfig({ location: location.location });
};
