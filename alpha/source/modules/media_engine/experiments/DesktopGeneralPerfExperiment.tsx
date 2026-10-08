// Module ID: 5225
// Function ID: 5226
// Name: DesktopGeneralPerfExperiment
// Dependencies: [1452, 2]
// Exports: getDesktopGeneralPerfExperimentConfig

// Module 5225 (DesktopGeneralPerfExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-desktop-general-perf", kind: "user", defaultConfig: { skipSilentDelayEstimatorFfts: false, basicProcessEnumeration: false }, variations: { 0: { skipSilentDelayEstimatorFfts: false, basicProcessEnumeration: false }, 1: { skipSilentDelayEstimatorFfts: true, basicProcessEnumeration: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/experiments/DesktopGeneralPerfExperiment.tsx");

export const getDesktopGeneralPerfExperimentConfig = function getDesktopGeneralPerfExperimentConfig(capture_processing_delay_estimator) {
  const obj = { location: capture_processing_delay_estimator };
  return config.getConfig(obj);
};
