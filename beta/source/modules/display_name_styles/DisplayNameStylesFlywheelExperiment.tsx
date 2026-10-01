// Module ID: 9189
// Function ID: 9190
// Name: DisplayNameStylesFlywheelExperiment
// Dependencies: [1435, 2]
// Exports: useIsDisplayNameStylesFlywheelSettersEnabled, useIsDisplayNameStylesFlywheelViewersEnabled

// Module 9189 (DisplayNameStylesFlywheelExperiment)
import ApexExperiment_mod from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj4;
let ApexExperiment = ApexExperiment_mod;
let obj = { kind: "user", name: "2026-06-gummy-bears", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj3 = { kind: "user", name: "2026-06-gummy-viewers", defaultConfig: { enabled: false }, variations: obj4 };
obj4 = { 1: null };
obj4[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesFlywheelExperiment.tsx");

export const DisplayNameStylesFlywheelSettersExperiment = apexExperiment;
export const DisplayNameStylesFlywheelViewersExperiment = apexExperiment1;
export const useIsDisplayNameStylesFlywheelViewersEnabled = function useIsDisplayNameStylesFlywheelViewersEnabled(UsernameWithEffects) {
  const obj = { location: UsernameWithEffects };
  return apexExperiment1.useConfig(obj).enabled;
};
export const useIsDisplayNameStylesFlywheelSettersEnabled = function useIsDisplayNameStylesFlywheelSettersEnabled(DisplayNameStylesEditScreen) {
  const obj = { location: DisplayNameStylesEditScreen };
  return apexExperiment.useConfig(obj).enabled;
};
