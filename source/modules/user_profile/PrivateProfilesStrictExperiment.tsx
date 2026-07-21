// Module ID: 11994
// Function ID: 92671
// Name: apexExperiment
// Dependencies: []
// Exports: getIsInPrivateProfilesStrictExperiment, useIsInPrivateProfilesStrictExperiment

// Module 11994 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "3d5f9f8f212b24a0f18f5afb706f5f80", 0: "UserClockIcon", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true }, [2]: { enabled: true }, [3]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_profile/PrivateProfilesStrictExperiment.tsx");

export const PrivateProfilesStrictExperiment = apexExperiment;
export const useIsInPrivateProfilesStrictExperiment = function useIsInPrivateProfilesStrictExperiment(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsInPrivateProfilesStrictExperiment = function getIsInPrivateProfilesStrictExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
