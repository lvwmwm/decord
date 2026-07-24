// Module ID: 16086
// Function ID: 124466
// Name: useIsSearchResultsFeedbackExperimentEnabled
// Dependencies: [1428, 2]
// Exports: getIsSearchResultsFeedbackExperimentEnabled, useIsSearchResultsFeedbackExperimentEnabled

// Module 16086 (useIsSearchResultsFeedbackExperimentEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-05-search-results-feedback", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/search/experiments/SearchResultsFeedbackExperiment.tsx");

export const useIsSearchResultsFeedbackExperimentEnabled = function useIsSearchResultsFeedbackExperimentEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
export const getIsSearchResultsFeedbackExperimentEnabled = function getIsSearchResultsFeedbackExperimentEnabled(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
