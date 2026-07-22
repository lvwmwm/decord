// Module ID: 4983
// Function ID: 42960
// Name: apexExperiment
// Dependencies: []
// Exports: getIsEligibleForUserSettingsRedesign4DExperiment, useIsEligibleForUserSettingsRedesign4DExperiment

// Module 4983 (apexExperiment)
const _module = require(dependencyMap[0]);
const obj = { y: -1790464492, DateToSystemTimezoneSetter: 2061582441, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/user_settings/UserSettingsRedesignExperiment.tsx");

export const UserSettingsRedesign4DExperiment = apexExperiment;
export const useIsEligibleForUserSettingsRedesign4DExperiment = function useIsEligibleForUserSettingsRedesign4DExperiment(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsEligibleForUserSettingsRedesign4DExperiment = function getIsEligibleForUserSettingsRedesign4DExperiment(UserSection) {
  return apexExperiment.getConfig({ location: UserSection }).enabled;
};
