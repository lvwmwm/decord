// Module ID: 7804
// Function ID: 7805
// Name: ICYMIExperiment
// Dependencies: [7805, 1441, 558, 576, 7807, 2]
// Exports: getICYMIEnabled

// Module 7804 (ICYMIExperiment)
import react from "react" /* 576 */;
import useLabFeatureDefault from "useLabFeature" /* 7807 */;
import LabFeatureStore from "LabFeatureStore" /* 7805 */;
import ApexExperiment_mod from "ApexExperiment" /* 1441 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp3;
  let tmp4;
  const obj = react;
  const cResult = obj.c(4);
  const tmp2 = useLabFeatureDefault(hide_icymi_tab);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  const enabled = apexExperiment.useConfig(tmp3).enabled;
  if (cResult[2] !== location) {
    const obj3 = { location };
    cResult[2] = location;
    cResult[3] = obj3;
    tmp4 = obj3;
  } else {
    tmp4 = cResult[3];
  }
  const config = apexExperiment2.useConfig(tmp4);
  return !tmp2 && enabled;
}) : ((location) => {
  const obj = { location };
  const obj2 = { location };
  const tmp = useLabFeatureDefault(hide_icymi_tab);
  const enabled = apexExperiment.useConfig(obj).enabled;
  const config = apexExperiment2.useConfig(obj2);
  return !tmp && enabled;
});
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

export const ICYMI_LAB_FEATURE = "hide_icymi_tab";
export const ICYMIStaffOnlyExperiment = apexExperiment;
export const useICYMIEnabled = tmp3;
export const getICYMIEnabled = function getICYMIEnabled(ICYMIManager) {
  const value = LabFeatureStore.get(hide_icymi_tab);
  const obj = { location: ICYMIManager };
  const tmp2 = !value && apexExperiment.getConfig(obj).enabled;
  return tmp2;
};
export const ICYMIStaffDebuggingUtilityExperiment = apexExperiment1;
export const ICYMIDesktopExperiment = apexExperiment2;
