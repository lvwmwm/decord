// Module ID: 5819
// Function ID: 5820
// Name: DesktopGeneralPerfExperiment
// Dependencies: [1455, 1384, 2]
// Exports: getDesktopGeneralPerfExperimentConfig, getIsQuestRingVisibleStepsEnabled

// Module 5819 (DesktopGeneralPerfExperiment)
import PlatformUtils from "PlatformUtils" /* 1384 */;
import ApexExperiment from "ApexExperiment" /* 1455 */;
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
