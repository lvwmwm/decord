// Module ID: 12179
// Function ID: 12180
// Name: apexExperiment
// Dependencies: [1452, 2]
// Exports: getIsInPrivateProfilesStrictGbExperiment, useIsInPrivateProfilesStrictGbExperiment

// Module 12179 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-private-profiles-strict-gb", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true }, 2: { enabled: true }, 3: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/user_profile/PrivateProfilesStrictGbExperiment.tsx");

export const PrivateProfilesStrictGbExperiment = apexExperiment;
export const useIsInPrivateProfilesStrictGbExperiment = function useIsInPrivateProfilesStrictGbExperiment(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsInPrivateProfilesStrictGbExperiment = function getIsInPrivateProfilesStrictGbExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
