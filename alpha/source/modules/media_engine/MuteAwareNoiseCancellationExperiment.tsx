// Module ID: 13548
// Function ID: 13549
// Name: MuteAwareNoiseCancellationExperiment
// Dependencies: [1435, 2]
// Exports: getMuteAwareNoiseCancellationConfig

// Module 13548 (MuteAwareNoiseCancellationExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

const config = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-08-mute-aware-noise-cancellation", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/media_engine/MuteAwareNoiseCancellationExperiment.tsx");

export const getMuteAwareNoiseCancellationConfig = function getMuteAwareNoiseCancellationConfig(location) {
  return config.getConfig({ location: location.location });
};
