// Module ID: 11875
// Function ID: 91953
// Name: experiment
// Dependencies: []
// Exports: isIarUserReportingEnabled, useIsIarUserReportingEnabled

// Module 11875 (experiment)
const _module = require(dependencyMap[0]);
const items = [{ config: { enabled: true } }];
const experiment = _module.createExperiment({ defaultConfig: { enabled: false }, treatments: items });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/in_app_reports/SafetyExperienceIarUserReportingExperiment.tsx");

export default experiment;
export const useIsIarUserReportingEnabled = function useIsIarUserReportingEnabled(location) {
  return experiment.useExperiment({ location }, { autoTrackExposure: true }).enabled;
};
export const isIarUserReportingEnabled = function isIarUserReportingEnabled(location) {
  return experiment.getCurrentConfig({ location }, { autoTrackExposure: true }).enabled;
};
