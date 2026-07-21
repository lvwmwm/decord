// Module ID: 8315
// Function ID: 65905
// Name: apexExperiment
// Dependencies: []
// Exports: getICYMIEnabled, useICYMIEnabled

// Module 8315 (apexExperiment)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[1]);
obj = { 844175713: true, 1387159956: true, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = obj.createApexExperiment(obj);
obj = { 844175713: null, 1387159956: null, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment1 = arg1(dependencyMap[1]).createApexExperiment(obj);
const obj3 = arg1(dependencyMap[1]);
const apexExperiment2 = arg1(dependencyMap[1]).createApexExperiment({ defaultConfig: { icymiDesktopEnabled: false }, variations: { [1]: { icymiDesktopEnabled: true } } });
const obj5 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/icymi/ICYMIExperiment.tsx");

export const ICYMI_LAB_FEATURE = "hide_icymi_tab";
export const ICYMIStaffOnlyExperiment = apexExperiment;
export const useICYMIEnabled = function useICYMIEnabled(TabsNavigator) {
  let obj = { location: TabsNavigator };
  obj = { location: TabsNavigator };
  const config = apexExperiment2.useConfig(obj);
  const tmp = importDefault(dependencyMap[2])("hide_icymi_tab");
  return !importDefault(dependencyMap[2])("hide_icymi_tab") && apexExperiment.useConfig(obj).enabled;
};
export const getICYMIEnabled = function getICYMIEnabled(ICYMIManager) {
  const value = closure_2.get("hide_icymi_tab");
  return !value && apexExperiment.getConfig({ location: ICYMIManager }).enabled;
};
export const ICYMIStaffDebuggingUtilityExperiment = apexExperiment1;
export const ICYMIDesktopExperiment = apexExperiment2;
