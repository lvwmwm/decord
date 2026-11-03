// Module ID: 9049
// Function ID: 9050
// Name: ICYMIExperiment
// Dependencies: [8686, 1449, 8688, 9050, 9051, 2]
// Exports: getICYMIEnabled, icymiEnabled, useICYMIEnabled

// Module 9049 (ICYMIExperiment)
import useLabFeatureDefault from "useLabFeature" /* 8688 */;
import ICYMILabFeature from "ICYMILabFeature" /* 9050 */;
import LabFeatureStore from "LabFeatureStore" /* 8686 */;
import ApexExperiment_mod from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
let obj4;
let obj6;
let tmp;
const WaterwheelsDiscoverExperiment = tmp(9051);
let ApexExperiment = ApexExperiment_mod;
let obj = { name: "2026-04-icymi-staff-only", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
ApexExperiment = ApexExperiment_mod;
let obj3 = { name: "2026-03-icymi-staff-debugging-utility", kind: "user", defaultConfig: { enabled: false }, variations: obj4 };
obj4 = { 1: null };
obj4[1] = { enabled: true };
const apexExperiment1 = ApexExperiment.createApexExperiment(obj3);
ApexExperiment = ApexExperiment_mod;
const obj5 = { name: "2026-03-icymi-desktop", kind: "user", defaultConfig: { icymiDesktopEnabled: false }, variations: obj6 };
obj6 = { 1: null };
obj6[1] = { icymiDesktopEnabled: true };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj5);
const result = size.fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export const ICYMI_LAB_FEATURE = ICYMILabFeature.ICYMI_LAB_FEATURE;
export const ICYMIStaffOnlyExperiment = apexExperiment;
export function useICYMIEnabled(TabsNavigator) {
  const obj = { location: TabsNavigator };
  const tmp = useLabFeatureDefault;
  const tmpResult = tmp(ICYMILabFeature.ICYMI_LAB_FEATURE);
  let enabled = apexExperiment.useConfig(obj).enabled;
  const obj2 = { location: TabsNavigator };
  const config = apexExperiment2.useConfig(obj2);
  let tmp4 = !tmpResult;
  const obj3 = WaterwheelsDiscoverExperiment;
  if (tmp4) {
    if (!enabled) {
      enabled = obj3.useWaterwheelsDiscoverEnabled(TabsNavigator);
    }
    tmp4 = enabled;
  }
  return tmp4;
}
export function getICYMIEnabled(ICYMIManager) {
  const value = LabFeatureStore.get(ICYMILabFeature.ICYMI_LAB_FEATURE);
  const obj = { location: ICYMIManager };
  let enabled = apexExperiment.getConfig(obj).enabled;
  let tmp4 = !value;
  if (tmp4) {
    if (!enabled) {
      const tmpResult = WaterwheelsDiscoverExperiment;
      enabled = tmpResult.getWaterwheelsDiscoverEnabled(ICYMIManager);
    }
    tmp4 = enabled;
  }
  return tmp4;
}
export function icymiEnabled(customScores) {
  const value = LabFeatureStore.get(ICYMILabFeature.ICYMI_LAB_FEATURE);
  const obj = { location: customScores };
  let enabled = apexExperiment.getConfig(obj).enabled;
  let tmp4 = !value;
  if (tmp4) {
    if (!enabled) {
      const tmpResult = WaterwheelsDiscoverExperiment;
      enabled = tmpResult.getWaterwheelsDiscoverEnabled(customScores);
    }
    tmp4 = enabled;
  }
  return tmp4;
}
export const ICYMIStaffDebuggingUtilityExperiment = apexExperiment1;
export const ICYMIDesktopExperiment = apexExperiment2;
