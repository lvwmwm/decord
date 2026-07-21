// Module ID: 5257
// Function ID: 44541
// Name: apexExperiment
// Dependencies: []
// Exports: getIsEligibleForUserSettingsRedesign4CExperiment, getIsEligibleForUserSettingsRedesign4DExperiment, useIsEligibleForUserSettingsRedesign4CExperiment, useIsEligibleForUserSettingsRedesign4DExperiment

// Module 5257 (apexExperiment)
const _module = require(dependencyMap[0]);
let obj = { 9223372036854775807: null, 0: null, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[0]);
obj = { 9223372036854775807: true, 0: true, defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment1 = _module1.createApexExperiment(obj);
const _module2 = require(dependencyMap[1]);
const result = _module2.fileFinishedImporting("modules/user_settings/UserSettingsRedesignExperiment.tsx");

export const UserSettingsRedesign4CExperiment = apexExperiment;
export const useIsEligibleForUserSettingsRedesign4CExperiment = function useIsEligibleForUserSettingsRedesign4CExperiment(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsEligibleForUserSettingsRedesign4CExperiment = function getIsEligibleForUserSettingsRedesign4CExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
};
export const UserSettingsRedesign4DExperiment = apexExperiment1;
export const useIsEligibleForUserSettingsRedesign4DExperiment = function useIsEligibleForUserSettingsRedesign4DExperiment(location) {
  return apexExperiment1.useConfig({ location }).enabled;
};
export const getIsEligibleForUserSettingsRedesign4DExperiment = function getIsEligibleForUserSettingsRedesign4DExperiment(UserSection) {
  return apexExperiment1.getConfig({ location: UserSection }).enabled;
};
