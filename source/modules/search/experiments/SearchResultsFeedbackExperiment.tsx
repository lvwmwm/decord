// Module ID: 16496
// Function ID: 16497
// Name: useIsSearchResultsFeedbackExperimentEnabled
// Dependencies: [1471, 2]
// Exports: getIsSearchResultsFeedbackExperimentEnabled, useIsSearchResultsFeedbackExperimentEnabled

// Module 16496 (useIsSearchResultsFeedbackExperimentEnabled)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment({ name: "2025-05-search-results-feedback", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/search/experiments/SearchResultsFeedbackExperiment.tsx");

export const useIsSearchResultsFeedbackExperimentEnabled = function useIsSearchResultsFeedbackExperimentEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
};
export const getIsSearchResultsFeedbackExperimentEnabled = function getIsSearchResultsFeedbackExperimentEnabled(location) {
  return closure_0.getConfig({ location: location.location }).enabled;
};
