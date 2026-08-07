// Module ID: 5170
// Function ID: 5171
// Name: apexExperiment
// Dependencies: [1452, 2]
// Exports: getIsEligibleForUserSettingsRedesign4DExperiment, useIsEligibleForUserSettingsRedesign4DExperiment

// Module 5170 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-05-user-settings-redesign-4d", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingsRedesignExperiment.tsx");

export const UserSettingsRedesign4DExperiment = apexExperiment;
export const useIsEligibleForUserSettingsRedesign4DExperiment = function useIsEligibleForUserSettingsRedesign4DExperiment(location) {
  return apexExperiment.useConfig({ location }).enabled;
};
export const getIsEligibleForUserSettingsRedesign4DExperiment = function getIsEligibleForUserSettingsRedesign4DExperiment(UserSection) {
  return apexExperiment.getConfig({ location: UserSection }).enabled;
};
