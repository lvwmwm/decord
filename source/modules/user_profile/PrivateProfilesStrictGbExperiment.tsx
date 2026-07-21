// Module ID: 11995
// Function ID: 92674
// Name: apexExperiment
// Dependencies: []
// Exports: getIsInPrivateProfilesStrictGbExperiment, useIsInPrivateProfilesStrictGbExperiment

// Module 11995 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { 9223372036854775807: "<string:2691872725>", 0: "<string:1778384896>", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true }, [2]: { enabled: true }, [3]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_profile/PrivateProfilesStrictGbExperiment.tsx");

export const PrivateProfilesStrictGbExperiment = apexExperiment;
export const useIsInPrivateProfilesStrictGbExperiment = function useIsInPrivateProfilesStrictGbExperiment(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsInPrivateProfilesStrictGbExperiment = function getIsInPrivateProfilesStrictGbExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
