// Module ID: 11988
// Function ID: 92651
// Name: apexExperiment
// Dependencies: []
// Exports: getIsInPrivateProfilesStrictGbExperiment, useIsInPrivateProfilesStrictGbExperiment

// Module 11988 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { -1269606814: "3d5f9f8f212b24a0f18f5afb706f5f80", -1845285747: "UserClockIcon", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true }, [2]: { enabled: true }, [3]: { enabled: true } } };
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
