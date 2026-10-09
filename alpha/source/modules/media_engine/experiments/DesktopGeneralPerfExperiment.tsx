// Module ID: 5226
// Function ID: 5227
// Name: DesktopGeneralPerfExperiment
// Dependencies: [1453, 2]
// Exports: getDesktopGeneralPerfExperimentConfig

// Module 5226 (DesktopGeneralPerfExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-desktop-general-perf", kind: "user", defaultConfig: { skipSilentDelayEstimatorFfts: false, basicProcessEnumeration: false }, variations: { 0: { skipSilentDelayEstimatorFfts: false, basicProcessEnumeration: false }, 1: { skipSilentDelayEstimatorFfts: true, basicProcessEnumeration: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/experiments/DesktopGeneralPerfExperiment.tsx");

export const getDesktopGeneralPerfExperimentConfig = function getDesktopGeneralPerfExperimentConfig(capture_processing_delay_estimator) {
  const obj = { location: capture_processing_delay_estimator };
  return config.getConfig(obj);
};
