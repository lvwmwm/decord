// Module ID: 1826
// Function ID: 20016
// Name: getForceSdrEmojisStickersConfig
// Dependencies: [1428, 2]
// Exports: getForceSdrEmojisStickersConfig

// Module 1826 (getForceSdrEmojisStickersConfig)
import ApexExperiment from "ApexExperiment";

const obj = { kind: "user", name: "2025-10-force-sdr-emojis-stickers", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/image_upload/ForceSdrEmojisStickersExperiment.tsx");

export const getForceSdrEmojisStickersConfig = function getForceSdrEmojisStickersConfig(location) {
  return config.getConfig({ location: location.location });
};
