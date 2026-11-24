// Module ID: 2024
// Function ID: 2025
// Name: ForceSdrEmojisStickersExperiment
// Dependencies: [1450, 2]
// Exports: getForceSdrEmojisStickersConfig

// Module 2024 (ForceSdrEmojisStickersExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2025-10-force-sdr-emojis-stickers", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/image_upload/ForceSdrEmojisStickersExperiment.tsx");

export function getForceSdrEmojisStickersConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
}
