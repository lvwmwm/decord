// Module ID: 15910
// Function ID: 121884
// Name: useIsSearchResultsFeedbackExperimentEnabled
// Dependencies: []
// Exports: getIsSearchResultsFeedbackExperimentEnabled, useIsSearchResultsFeedbackExperimentEnabled

// Module 15910 (useIsSearchResultsFeedbackExperimentEnabled)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "/assets/modules/holidays/assets", 0: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/search/experiments/SearchResultsFeedbackExperiment.tsx");

export const useIsSearchResultsFeedbackExperimentEnabled = function useIsSearchResultsFeedbackExperimentEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
export const getIsSearchResultsFeedbackExperimentEnabled = function getIsSearchResultsFeedbackExperimentEnabled(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
