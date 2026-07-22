// Module ID: 11883
// Function ID: 92002
// Name: items
// Dependencies: []
// Exports: isIarUserReportingEnabled, useIsIarUserReportingEnabled

// Module 11883 (items)
const _module = require(dependencyMap[0]);
let obj = { shapes: true, flex: true, sk: true, defaultConfig: { enabled: false } };
obj = { displayNameStylesEnabled: 203706476729884200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, submitButtonEnabled: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015890667570573938, config: { enabled: true } };
const items = [obj];
obj.treatments = items;
const experiment = _module.createExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/in_app_reports/SafetyExperienceIarUserReportingExperiment.tsx");

export default experiment;
export const useIsIarUserReportingEnabled = function useIsIarUserReportingEnabled(location) {
  return experiment.useExperiment({ location }, { autoTrackExposure: true }).enabled;
};
export const isIarUserReportingEnabled = function isIarUserReportingEnabled(location) {
  return experiment.getCurrentConfig({ location }, { autoTrackExposure: true }).enabled;
};
