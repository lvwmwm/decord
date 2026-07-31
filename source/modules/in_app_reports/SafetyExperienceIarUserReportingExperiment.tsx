// Module ID: 11978
// Function ID: 11979
// Name: experiment
// Dependencies: [4105, 2]
// Exports: isIarUserReportingEnabled, useIsIarUserReportingEnabled

// Module 11978 (experiment)
import createExperiment from "createExperiment";

const items = [{ id: 1, label: "Enabled", config: { enabled: true } }];
const experiment = createExperiment.createExperiment({ kind: "user", id: "2023-09_iar_user_reporting", label: "Safety Experience IAR User Reporting", defaultConfig: { enabled: false }, treatments: items });
const result = require("set").fileFinishedImporting("modules/in_app_reports/SafetyExperienceIarUserReportingExperiment.tsx");

export default experiment;
export const useIsIarUserReportingEnabled = function useIsIarUserReportingEnabled(location) {
  return experiment.useExperiment({ location }, { autoTrackExposure: true }).enabled;
};
export const isIarUserReportingEnabled = function isIarUserReportingEnabled(location) {
  return experiment.getCurrentConfig({ location }, { autoTrackExposure: true }).enabled;
};
