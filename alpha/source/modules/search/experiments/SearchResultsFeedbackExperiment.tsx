// Module ID: 19452
// Function ID: 19453
// Name: SearchResultsFeedbackExperiment
// Dependencies: [1447, 2]
// Exports: getIsSearchResultsFeedbackExperimentEnabled, useIsSearchResultsFeedbackExperimentEnabled

// Module 19452 (SearchResultsFeedbackExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2025-05-search-results-feedback", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/search/experiments/SearchResultsFeedbackExperiment.tsx");

export function useIsSearchResultsFeedbackExperimentEnabled(location) {
  const obj = { location: location.location };
  return closure_0.useConfig(obj).enabled;
}
export function getIsSearchResultsFeedbackExperimentEnabled(location) {
  const obj = { location: location.location };
  return closure_0.getConfig(obj).enabled;
}
