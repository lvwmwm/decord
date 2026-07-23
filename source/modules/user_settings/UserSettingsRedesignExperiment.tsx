// Module ID: 4986
// Function ID: 42978
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: getIsEligibleForUserSettingsRedesign4DExperiment, useIsEligibleForUserSettingsRedesign4DExperiment

// Module 4986 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-05-user-settings-redesign-4d", kind: "user", defaultConfig: { enabled: false }, variations: { [0]: { enabled: false }, [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingsRedesignExperiment.tsx");

export const UserSettingsRedesign4DExperiment = apexExperiment;
export const useIsEligibleForUserSettingsRedesign4DExperiment = function useIsEligibleForUserSettingsRedesign4DExperiment(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsEligibleForUserSettingsRedesign4DExperiment = function getIsEligibleForUserSettingsRedesign4DExperiment(UserSection) {
  return apexExperiment.getConfig({ location: UserSection }).enabled;
};
