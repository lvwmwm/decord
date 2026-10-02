// Module ID: 13550
// Function ID: 13551
// Name: MuteAwareNoiseCancellationExperiment
// Dependencies: [1441, 2]
// Exports: getMuteAwareNoiseCancellationConfig

// Module 13550 (MuteAwareNoiseCancellationExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-08-mute-aware-noise-cancellation", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/MuteAwareNoiseCancellationExperiment.tsx");

export const getMuteAwareNoiseCancellationConfig = function getMuteAwareNoiseCancellationConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
};
