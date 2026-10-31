// Module ID: 15886
// Function ID: 15887
// Name: MuteAwareNoiseCancellationExperiment
// Dependencies: [1447, 2]
// Exports: getMuteAwareNoiseCancellationConfig

// Module 15886 (MuteAwareNoiseCancellationExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-08-mute-aware-noise-cancellation", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/MuteAwareNoiseCancellationExperiment.tsx");

export function getMuteAwareNoiseCancellationConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
}
