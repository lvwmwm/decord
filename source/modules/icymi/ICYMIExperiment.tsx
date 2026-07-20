// Module ID: 8310
// Function ID: 65880
// Name: apexExperiment
// Dependencies: []
// Exports: getICYMIEnabled, useICYMIEnabled

// Module 8310 (apexExperiment)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[1]);
const apexExperiment = obj.createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
obj = { -1269606814: -3247818, -1845285747: 1917147729, defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment1 = arg1(dependencyMap[1]).createApexExperiment(obj);
const obj2 = arg1(dependencyMap[1]);
const apexExperiment2 = arg1(dependencyMap[1]).createApexExperiment({ defaultConfig: { icymiDesktopEnabled: false }, variations: { [1]: { icymiDesktopEnabled: true } } });
const obj4 = arg1(dependencyMap[1]);
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
