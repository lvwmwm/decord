// Module ID: 8504
// Function ID: 67863
// Name: apexExperiment
// Dependencies: []
// Exports: useIsDisplayNameStylesFlywheelSettersEnabled, useIsDisplayNameStylesFlywheelViewersEnabled

// Module 8504 (apexExperiment)
const _module = require(dependencyMap[0]);
let obj = { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000017383389523691, "Null": 284759166547689630000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = _module.createApexExperiment(obj);
const _module1 = require(dependencyMap[0]);
obj = { "Null": false, "Null": false, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment1 = _module1.createApexExperiment(obj);
const _module2 = require(dependencyMap[1]);
const result = _module2.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFlywheelExperiment.tsx");

export const DisplayNameStylesFlywheelSettersExperiment = apexExperiment;
export const DisplayNameStylesFlywheelViewersExperiment = apexExperiment1;
export const useIsDisplayNameStylesFlywheelViewersEnabled = function useIsDisplayNameStylesFlywheelViewersEnabled(UsernameWithEffects) {
  return apexExperiment1.useConfig({ location: UsernameWithEffects }).enabled;
};
export const useIsDisplayNameStylesFlywheelSettersEnabled = function useIsDisplayNameStylesFlywheelSettersEnabled(DisplayNameStylesEditScreen) {
  return apexExperiment.useConfig({ location: DisplayNameStylesEditScreen }).enabled;
};
