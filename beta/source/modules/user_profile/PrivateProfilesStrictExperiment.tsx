// Module ID: 12668
// Function ID: 12669
// Name: PrivateProfilesStrictExperiment
// Dependencies: [1435, 2]
// Exports: getIsInPrivateProfilesStrictExperiment, useIsInPrivateProfilesStrictExperiment

// Module 12668 (PrivateProfilesStrictExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-03-private-profiles-strict", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true }, 2: { enabled: true }, 3: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/PrivateProfilesStrictExperiment.tsx");

export const PrivateProfilesStrictExperiment = apexExperiment;
export const useIsInPrivateProfilesStrictExperiment = function useIsInPrivateProfilesStrictExperiment(location) {
  const obj = { location };
  return apexExperiment.useConfig(obj).enabled;
};
export const getIsInPrivateProfilesStrictExperiment = function getIsInPrivateProfilesStrictExperiment(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj).enabled;
};
