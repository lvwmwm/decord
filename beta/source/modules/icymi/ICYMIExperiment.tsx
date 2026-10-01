// Module ID: 7800
// Function ID: 7801
// Name: ICYMIExperiment
// Dependencies: [7801, 1435, 7803, 2]
// Exports: getICYMIEnabled, useICYMIEnabled

// Module 7800 (ICYMIExperiment)
import useLabFeatureDefault from "useLabFeature" /* 7803 */;
import LabFeatureStore from "LabFeatureStore" /* 7801 */;
import ApexExperiment_mod from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj4;
let obj6;
const hide_icymi_tab = "hide_icymi_tab";
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-04-icymi-staff-only", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
const obj3 = { name: "2026-03-icymi-staff-debugging-utility", kind: "user", defaultConfig: { enabled: false }, variations: obj4 };
obj4 = { 1: null };
obj4[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
ApexExperiment = ApexExperiment_mod;
const obj5 = { name: "2026-03-icymi-desktop", kind: "user", defaultConfig: { icymiDesktopEnabled: false }, variations: obj6 };
obj6 = { 1: null };
obj6[1] = { icymiDesktopEnabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj5);
const result = size.fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export const ICYMI_LAB_FEATURE = "hide_icymi_tab";
export const ICYMIStaffOnlyExperiment = apexExperiment;
export const useICYMIEnabled = function useICYMIEnabled(TabsNavigator) {
  const obj = { location: TabsNavigator };
  const obj2 = { location: TabsNavigator };
  const tmp = useLabFeatureDefault(hide_icymi_tab);
  const enabled = apexExperiment.useConfig(obj).enabled;
  const config = apexExperiment2.useConfig(obj2);
  return !tmp && enabled;
};
export const getICYMIEnabled = function getICYMIEnabled(ICYMIManager) {
  const value = LabFeatureStore.get(hide_icymi_tab);
  const obj = { location: ICYMIManager };
  const tmp2 = !value && apexExperiment.getConfig(obj).enabled;
  return tmp2;
};
export const ICYMIStaffDebuggingUtilityExperiment = apexExperiment1;
export const ICYMIDesktopExperiment = apexExperiment2;
