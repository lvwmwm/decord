// Module ID: 8366
// Function ID: 66182
// Name: apexExperiment
// Dependencies: [8367, 1428, 8369, 2]
// Exports: getICYMIEnabled, useICYMIEnabled

// Module 8366 (apexExperiment)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";
import ApexExperiment from "ApexExperiment";

ApexExperiment = { name: "2026-04-icymi-staff-only", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
ApexExperiment = { name: "2026-03-icymi-staff-debugging-utility", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const obj1 = { name: "2026-03-icymi-desktop", kind: "user", defaultConfig: { icymiDesktopEnabled: false }, variations: { [1]: { icymiDesktopEnabled: true } } };
const apexExperiment2 = ApexExperiment.createApexExperiment(obj1);
const result = require("useLabFeature").fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export const ICYMI_LAB_FEATURE = "hide_icymi_tab";
export const ICYMIStaffOnlyExperiment = ApexExperiment;
export const useICYMIEnabled = function useICYMIEnabled(TabsNavigator) {
  let obj = { location: TabsNavigator };
  obj = { location: TabsNavigator };
  const config = apexExperiment2.useConfig(obj);
  const tmp = importDefault(8369)("hide_icymi_tab");
  return !importDefault(8369)("hide_icymi_tab") && ApexExperiment.useConfig(obj).enabled;
};
export const getICYMIEnabled = function getICYMIEnabled(ICYMIManager) {
  const value = _isNativeReflectConstruct.get("hide_icymi_tab");
  return !value && ApexExperiment.getConfig({ location: ICYMIManager }).enabled;
};
export const ICYMIStaffDebuggingUtilityExperiment = ApexExperiment;
export const ICYMIDesktopExperiment = apexExperiment2;
