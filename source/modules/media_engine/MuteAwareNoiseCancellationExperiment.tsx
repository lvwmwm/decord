// Module ID: 14002
// Function ID: 14003
// Name: getMuteAwareNoiseCancellationConfig
// Dependencies: [1433, 2]
// Exports: getMuteAwareNoiseCancellationConfig

// Module 14002 (getMuteAwareNoiseCancellationConfig)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

let closure_0 = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-mute-aware-noise-cancellation", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/media_engine/MuteAwareNoiseCancellationExperiment.tsx");

export const getMuteAwareNoiseCancellationConfig = function getMuteAwareNoiseCancellationConfig(location) {
  return config.getConfig({ location: location.location });
};
