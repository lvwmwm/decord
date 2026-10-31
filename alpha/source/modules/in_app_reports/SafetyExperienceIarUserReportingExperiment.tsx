// Module ID: 14815
// Function ID: 14816
// Name: SafetyExperienceIarUserReportingExperiment
// Dependencies: [5236, 2]
// Exports: isIarUserReportingEnabled, useIsIarUserReportingEnabled

// Module 14815 (SafetyExperienceIarUserReportingExperiment)
import createExperiment from "module_5236" /* 5236 */;
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
