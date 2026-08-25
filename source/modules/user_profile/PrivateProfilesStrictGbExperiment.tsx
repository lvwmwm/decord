// Module ID: 12678
// Function ID: 12679
// Name: apexExperiment
// Dependencies: [1472, 2]
// Exports: getIsInPrivateProfilesStrictGbExperiment, useIsInPrivateProfilesStrictGbExperiment

// Module 12678 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-private-profiles-strict-gb", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true }, 2: { enabled: true }, 3: { enabled: true } } });
const result = set.fileFinishedImporting("modules/user_profile/PrivateProfilesStrictGbExperiment.tsx");

export const PrivateProfilesStrictGbExperiment = apexExperiment;
export const useIsInPrivateProfilesStrictGbExperiment = function useIsInPrivateProfilesStrictGbExperiment(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsInPrivateProfilesStrictGbExperiment = function getIsInPrivateProfilesStrictGbExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
