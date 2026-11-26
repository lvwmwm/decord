// Module ID: 14867
// Function ID: 14868
// Name: SafetyExperienceIarUserReportingExperiment
// Dependencies: [6044, 2]
// Exports: isIarUserReportingEnabled, useIsIarUserReportingEnabled

// Module 14867 (SafetyExperienceIarUserReportingExperiment)
import createExperiment from "module_6044" /* 6044 */;
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
