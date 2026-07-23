// Module ID: 12114
// Function ID: 94886
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getIsInPrivateProfilesStrictExperiment, useIsInPrivateProfilesStrictExperiment

// Module 12114 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-03-private-profiles-strict", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true }, [2]: { enabled: true }, [3]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/user_profile/PrivateProfilesStrictExperiment.tsx");

export const PrivateProfilesStrictExperiment = apexExperiment;
export const useIsInPrivateProfilesStrictExperiment = function useIsInPrivateProfilesStrictExperiment(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsInPrivateProfilesStrictExperiment = function getIsInPrivateProfilesStrictExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
