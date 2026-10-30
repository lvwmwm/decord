// Module ID: 14777
// Function ID: 14778
// Name: SafetyExperienceIarUserReportingExperiment
// Dependencies: [5231, 2]
// Exports: isIarUserReportingEnabled, useIsIarUserReportingEnabled

// Module 14777 (SafetyExperienceIarUserReportingExperiment)
import createExperiment from "module_5231" /* 5231 */;
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
