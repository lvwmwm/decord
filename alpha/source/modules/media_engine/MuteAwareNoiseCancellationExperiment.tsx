// Module ID: 16386
// Function ID: 16387
// Name: MuteAwareNoiseCancellationExperiment
// Dependencies: [1449, 2]
// Exports: getMuteAwareNoiseCancellationConfig

// Module 16386 (MuteAwareNoiseCancellationExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj = { kind: "user", name: "2026-08-mute-aware-noise-cancellation", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/MuteAwareNoiseCancellationExperiment.tsx");

export function getMuteAwareNoiseCancellationConfig(location) {
  const obj = { location: location.location };
  return config.getConfig(obj);
}
