// Module ID: 12552
// Function ID: 12553
// Name: SafetyExperienceIarUserReportingExperiment
// Dependencies: [4748, 2]
// Exports: isIarUserReportingEnabled, useIsIarUserReportingEnabled

// Module 12552 (SafetyExperienceIarUserReportingExperiment)
import createExperiment from "module_4748" /* 4748 */;
import size from "module_2" /* 2 */;

let items;
let obj = { kind: "user", id: "2023-09_iar_user_reporting", label: "Safety Experience IAR User Reporting", defaultConfig: { enabled: false }, treatments: items };
items = [{ id: 1, label: "Enabled", config: { enabled: true } }];
const experiment = createExperiment.createExperiment(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/SafetyExperienceIarUserReportingExperiment.tsx");

export default experiment;
export const useIsIarUserReportingEnabled = function useIsIarUserReportingEnabled(location) {
  const obj = { location };
  return experiment.useExperiment(obj, { autoTrackExposure: true }).enabled;
};
export const isIarUserReportingEnabled = function isIarUserReportingEnabled(location) {
  const obj = { location };
  return experiment.getCurrentConfig(obj, { autoTrackExposure: true }).enabled;
};
