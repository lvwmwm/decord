// Module ID: 11998
// Function ID: 92709
// Name: apexExperiment
// Dependencies: []
// Exports: getIsInPrivateProfilesStrictExperiment, useIsInPrivateProfilesStrictExperiment

// Module 11998 (apexExperiment)
const _module = require(dependencyMap[0]);
const apexExperiment = _module.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true }, [2]: { enabled: true }, [3]: { enabled: true } } });
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_profile/PrivateProfilesStrictExperiment.tsx");

export const PrivateProfilesStrictExperiment = apexExperiment;
export const useIsInPrivateProfilesStrictExperiment = function useIsInPrivateProfilesStrictExperiment(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsInPrivateProfilesStrictExperiment = function getIsInPrivateProfilesStrictExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
