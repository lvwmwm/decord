// Module ID: 15922
// Function ID: 121971
// Name: useIsSearchResultsFeedbackExperimentEnabled
// Dependencies: []
// Exports: getIsSearchResultsFeedbackExperimentEnabled, useIsSearchResultsFeedbackExperimentEnabled

// Module 15922 (useIsSearchResultsFeedbackExperimentEnabled)
const _module = require(dependencyMap[0]);
let closure_0 = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/search/experiments/SearchResultsFeedbackExperiment.tsx");

export const useIsSearchResultsFeedbackExperimentEnabled = function useIsSearchResultsFeedbackExperimentEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
export const getIsSearchResultsFeedbackExperimentEnabled = function getIsSearchResultsFeedbackExperimentEnabled(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
