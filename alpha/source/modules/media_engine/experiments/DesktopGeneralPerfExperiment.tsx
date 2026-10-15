// Module ID: 5286
// Function ID: 5287
// Name: DesktopGeneralPerfExperiment
// Dependencies: [1453, 2]
// Exports: getDesktopGeneralPerfExperimentConfig

// Module 5286 (DesktopGeneralPerfExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-desktop-general-perf", kind: "user", defaultConfig: { skipSilentDelayEstimatorFfts: false, processPollingPerf: false, keepRendererLogFileOpen: false }, variations: { 0: { skipSilentDelayEstimatorFfts: false, processPollingPerf: false, keepRendererLogFileOpen: false }, 1: { skipSilentDelayEstimatorFfts: true, processPollingPerf: true, keepRendererLogFileOpen: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/experiments/DesktopGeneralPerfExperiment.tsx");

export const getDesktopGeneralPerfExperimentConfig = function getDesktopGeneralPerfExperimentConfig(capture_processing_delay_estimator) {
  const obj = { location: capture_processing_delay_estimator };
  return config.getConfig(obj);
};
