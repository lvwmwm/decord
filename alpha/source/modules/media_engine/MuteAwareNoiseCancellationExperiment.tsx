// Module ID: 14141
// Function ID: 14142
// Name: MuteAwareNoiseCancellationExperiment
// Dependencies: [1452, 2]
// Exports: getMuteAwareNoiseCancellationConfig

// Module 14141 (MuteAwareNoiseCancellationExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-08-mute-aware-noise-cancellation", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/MuteAwareNoiseCancellationExperiment.tsx");

export const getMuteAwareNoiseCancellationConfig = function getMuteAwareNoiseCancellationConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
