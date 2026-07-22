// Module ID: 8316
// Function ID: 65917
// Name: apexExperiment
// Dependencies: []
// Exports: getICYMIEnabled, useICYMIEnabled

// Module 8316 (apexExperiment)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[1]);
obj = { y: true, DateToSystemTimezoneSetter: "/assets/images/native", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = obj.createApexExperiment(obj);
const apexExperiment1 = arg1(dependencyMap[1]).createApexExperiment({ defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } });
const obj3 = arg1(dependencyMap[1]);
obj = { y: true, DateToSystemTimezoneSetter: "/assets/images/native/icons", defaultConfig: { icymiDesktopEnabled: false }, variations: { [1]: { icymiDesktopEnabled: true } } };
const apexExperiment2 = arg1(dependencyMap[1]).createApexExperiment(obj);
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
