// Module ID: 15715
// Function ID: 15716
// Name: SafetyExperienceIarUserReportingExperiment
// Dependencies: [5524, 2]
// Exports: isIarUserReportingEnabled, useIsIarUserReportingEnabled

// Module 15715 (SafetyExperienceIarUserReportingExperiment)
import createExperiment from "module_5524" /* 5524 */;
import size from "module_2" /* 2 */;

let items;
let obj = { kind: "user", id: "2023-09_iar_user_reporting", label: "Safety Experience IAR User Reporting", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enabled", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/SafetyExperienceIarUserReportingExperiment.tsx");

export default experiment;
export function useIsIarUserReportingEnabled(location) {
  const obj = { location };
  return experiment.useExperiment(obj, { autoTrackExposure: true }).enabled;
}
export function isIarUserReportingEnabled(location) {
  const obj = { location };
  return experiment.getCurrentConfig(obj, { autoTrackExposure: true }).enabled;
}
