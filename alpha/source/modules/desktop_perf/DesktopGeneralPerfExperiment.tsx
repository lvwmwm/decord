// Module ID: 5883
// Function ID: 5884
// Name: DesktopGeneralPerfExperiment
// Dependencies: [1447, 1375, 2]
// Exports: getDesktopGeneralPerfExperimentConfig, getIsQuestRingVisibleStepsEnabled

// Module 5883 (DesktopGeneralPerfExperiment)
import PlatformUtils from "PlatformUtils" /* 1375 */;
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-desktop-general-perf", kind: "user", defaultConfig: { skipSilentDelayEstimatorFfts: false, processPollingPerf: false, keepRendererLogFileOpen: false, questRingVisibleSteps: false }, variations: { 0: { skipSilentDelayEstimatorFfts: false, processPollingPerf: false, keepRendererLogFileOpen: false, questRingVisibleSteps: false }, 1: { skipSilentDelayEstimatorFfts: true, processPollingPerf: true, keepRendererLogFileOpen: true, questRingVisibleSteps: true } } };
let closure_2 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/desktop_perf/DesktopGeneralPerfExperiment.tsx");

export function getDesktopGeneralPerfExperimentConfig(capture_processing_delay_estimator) {
  const obj = { location: capture_processing_delay_estimator };
  return closure_2.getConfig(obj);
}
export function getIsQuestRingVisibleStepsEnabled() {
  const obj = PlatformUtils;
  const questRingVisibleSteps = obj.isDesktop() && closure_2.getConfig({ location: "quest_bar_circular_progress" }).questRingVisibleSteps;
  return questRingVisibleSteps;
}
