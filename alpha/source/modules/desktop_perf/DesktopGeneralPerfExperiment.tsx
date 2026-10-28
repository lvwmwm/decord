// Module ID: 5869
// Function ID: 5870
// Name: DesktopGeneralPerfExperiment
// Dependencies: [1452, 1381, 2]
// Exports: getDesktopGeneralPerfExperimentConfig, getIsQuestRingVisibleStepsEnabled

// Module 5869 (DesktopGeneralPerfExperiment)
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-desktop-general-perf", kind: "user", defaultConfig: { skipSilentDelayEstimatorFfts: false, processPollingPerf: false, keepRendererLogFileOpen: false, questRingVisibleSteps: false }, variations: { 0: { skipSilentDelayEstimatorFfts: false, processPollingPerf: false, keepRendererLogFileOpen: false, questRingVisibleSteps: false }, 1: { skipSilentDelayEstimatorFfts: true, processPollingPerf: true, keepRendererLogFileOpen: true, questRingVisibleSteps: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/desktop_perf/DesktopGeneralPerfExperiment.tsx");

export const getDesktopGeneralPerfExperimentConfig = function getDesktopGeneralPerfExperimentConfig(capture_processing_delay_estimator) {
  const obj = { location: capture_processing_delay_estimator };
  return closure_2.getConfig(obj);
};
export const getIsQuestRingVisibleStepsEnabled = function getIsQuestRingVisibleStepsEnabled() {
  const obj = PlatformUtils;
  const questRingVisibleSteps = obj.isDesktop() && closure_2.getConfig({ location: "quest_bar_circular_progress" }).questRingVisibleSteps;
  return questRingVisibleSteps;
};
