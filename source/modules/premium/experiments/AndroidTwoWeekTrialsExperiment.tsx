// Module ID: 7108
// Function ID: 57127
// Name: apexExperiment
// Dependencies: []
// Exports: isAndroidTwoWeekTrialsExperimentEnabled, isAndroidTwoWeekTrialsTrialCTAEnabled

// Module 7108 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { -1432290461: null, 1661343313: null }, variations: { [1]: { -1432290461: null, 1661343313: null }, [2]: { -1432290461: true, 1661343313: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/experiments/AndroidTwoWeekTrialsExperiment.tsx");

export const AndroidTwoWeekTrialsExperiment = apexExperiment;
export const isAndroidTwoWeekTrialsExperimentEnabled = function isAndroidTwoWeekTrialsExperimentEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
export const isAndroidTwoWeekTrialsTrialCTAEnabled = function isAndroidTwoWeekTrialsTrialCTAEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).trialCTAEnabled;
};
