// Module ID: 9874
// Function ID: 76485
// Name: usePlaygroundAccessExperiment
// Dependencies: []
// Exports: getHasPlaygroundAccess, useHasPlaygroundAccess

// Module 9874 (usePlaygroundAccessExperiment)
function usePlaygroundAccessExperiment(design_systems_settings) {
  return apexExperiment.useConfig({ location: design_systems_settings }).enabled;
}
function getPlaygroundAccessExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
}
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[1]);
obj = { -1269606814: null, -1845285747: "6deb5144fd1fa39d4c62b384e76c1144", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = obj.createApexExperiment(obj);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/design/PlaygroundAccessExperiment.tsx");

export default apexExperiment;
export { usePlaygroundAccessExperiment };
export { getPlaygroundAccessExperiment };
export const useHasPlaygroundAccess = function useHasPlaygroundAccess(design_systems_settings) {
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => currentUser.getCurrentUser());
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
  const currentUser = currentUser.getCurrentUser();
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
