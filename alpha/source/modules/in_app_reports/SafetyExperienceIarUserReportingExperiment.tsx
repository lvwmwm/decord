// Module ID: 15080
// Function ID: 15081
// Name: SafetyExperienceIarUserReportingExperiment
// Dependencies: [5354, 2]
// Exports: isIarUserReportingEnabled, useIsIarUserReportingEnabled

// Module 15080 (SafetyExperienceIarUserReportingExperiment)
import createExperiment from "module_5354" /* 5354 */;
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
