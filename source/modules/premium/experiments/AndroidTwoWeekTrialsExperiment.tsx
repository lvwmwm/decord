// Module ID: 7109
// Function ID: 57150
// Name: apexExperiment
// Dependencies: []
// Exports: isAndroidTwoWeekTrialsExperimentEnabled, isAndroidTwoWeekTrialsTrialCTAEnabled

// Module 7109 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { -1415513245: true, 1661345361: true }, variations: { [1]: { -1415513245: null, 1661345361: null }, [2]: { -1415513245: "<string:1040334421>", 1661345361: "<string:1040334338>" } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/premium/experiments/AndroidTwoWeekTrialsExperiment.tsx");

export const AndroidTwoWeekTrialsExperiment = apexExperiment;
export const isAndroidTwoWeekTrialsExperimentEnabled = function isAndroidTwoWeekTrialsExperimentEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
export const isAndroidTwoWeekTrialsTrialCTAEnabled = function isAndroidTwoWeekTrialsTrialCTAEnabled(location) {
  return apexExperiment.getConfig({ location: location.location }).trialCTAEnabled;
};
