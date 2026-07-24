// Module ID: 8560
// Function ID: 68165
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: useIsDisplayNameStylesFlywheelSettersEnabled, useIsDisplayNameStylesFlywheelViewersEnabled

// Module 8560 (apexExperiment)
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";

let obj = { kind: "user", name: "2026-06-gummy-bears", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
obj = { kind: "user", name: "2026-06-gummy-viewers", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFlywheelExperiment.tsx");

export const DisplayNameStylesFlywheelSettersExperiment = apexExperiment;
export const DisplayNameStylesFlywheelViewersExperiment = apexExperiment1;
export const useIsDisplayNameStylesFlywheelViewersEnabled = function useIsDisplayNameStylesFlywheelViewersEnabled(UsernameWithEffects) {
  return apexExperiment1.useConfig({ location: UsernameWithEffects }).enabled;
};
export const useIsDisplayNameStylesFlywheelSettersEnabled = function useIsDisplayNameStylesFlywheelSettersEnabled(DisplayNameStylesEditScreen) {
  return apexExperiment.useConfig({ location: DisplayNameStylesEditScreen }).enabled;
};
