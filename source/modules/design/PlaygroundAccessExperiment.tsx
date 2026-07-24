// Module ID: 9919
// Function ID: 76760
// Name: usePlaygroundAccessExperiment
// Dependencies: [1849, 1428, 566, 2]
// Exports: getHasPlaygroundAccess, useHasPlaygroundAccess

// Module 9919 (usePlaygroundAccessExperiment)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ApexExperiment from "ApexExperiment";

const require = arg1;
function usePlaygroundAccessExperiment(design_systems_settings) {
  return ApexExperiment.useConfig({ location: design_systems_settings }).enabled;
}
function getPlaygroundAccessExperiment(location) {
  return ApexExperiment.getConfig({ location }).enabled;
}
ApexExperiment = { name: "2026-02-mana-playground-access", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const result = require("initialize").fileFinishedImporting("modules/design/PlaygroundAccessExperiment.tsx");

export default ApexExperiment;
export { usePlaygroundAccessExperiment };
export { getPlaygroundAccessExperiment };
export const useHasPlaygroundAccess = function useHasPlaygroundAccess(design_systems_settings) {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getCurrentUser());
  let isStaffResult;
  if (null != stateFromStores) {
    isStaffResult = stateFromStores.isStaff();
  }
  let tmp2 = true === isStaffResult;
  if (!tmp2) {
    let isStaffPersonalResult;
    if (null != stateFromStores) {
      isStaffPersonalResult = stateFromStores.isStaffPersonal();
    }
    tmp2 = true === isStaffPersonalResult;
  }
  if (!tmp2) {
    tmp2 = usePlaygroundAccessExperiment(design_systems_settings);
  }
  return tmp2;
};
export const getHasPlaygroundAccess = function getHasPlaygroundAccess(quickswitcher_action) {
  currentUser = currentUser.getCurrentUser();
  let isStaffResult;
  if (null != currentUser) {
    isStaffResult = currentUser.isStaff();
  }
  let tmp2 = true === isStaffResult;
  if (!tmp2) {
    let isStaffPersonalResult;
    if (null != currentUser) {
      isStaffPersonalResult = currentUser.isStaffPersonal();
    }
    tmp2 = true === isStaffPersonalResult;
  }
  if (!tmp2) {
    tmp2 = getPlaygroundAccessExperiment(quickswitcher_action);
  }
  return tmp2;
};
