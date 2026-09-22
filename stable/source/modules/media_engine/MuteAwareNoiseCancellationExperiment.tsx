// Module ID: 14091
// Function ID: 14092
// Name: MuteAwareNoiseCancellationExperiment
// Dependencies: [1433, 2]
// Exports: getMuteAwareNoiseCancellationConfig

// Module 14091 (MuteAwareNoiseCancellationExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-mute-aware-noise-cancellation", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/media_engine/MuteAwareNoiseCancellationExperiment.tsx");

export const getMuteAwareNoiseCancellationConfig = function getMuteAwareNoiseCancellationConfig(location) {
  return config.getConfig({ location: location.location });
};
