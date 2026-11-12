// Module ID: 8829
// Function ID: 8830
// Name: MobileImageEncodingLadderExperiment
// Dependencies: [1449, 2]
// Exports: getMobileImageEncodingLadderConfig

// Module 8829 (MobileImageEncodingLadderExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-01-image-optimized-encoding-ladder", kind: "user", defaultConfig: { useImageEncodingLadder: false }, variations: { 0: { useImageEncodingLadder: false }, 1: { useImageEncodingLadder: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_uploads/experiments/MobileImageEncodingLadderExperiment.tsx");

export function getMobileImageEncodingLadderConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
}
