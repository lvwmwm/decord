// Module ID: 10451
// Function ID: 10452
// Name: PlaygroundAccessExperiment
// Dependencies: [1372, 1435, 504, 2]
// Exports: getHasPlaygroundAccess, getPlaygroundAccessExperiment, useHasPlaygroundAccess, usePlaygroundAccessExperiment

// Module 10451 (PlaygroundAccessExperiment)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1372 */;
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-02-mana-playground-access", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/design/PlaygroundAccessExperiment.tsx");

export default apexExperiment;
export const usePlaygroundAccessExperiment = function usePlaygroundAccessExperiment(design_systems_settings) {
  const obj = { location: design_systems_settings };
  return apexExperiment.useConfig(obj).enabled;
};
export const getPlaygroundAccessExperiment = function getPlaygroundAccessExperiment(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj).enabled;
};
export const useHasPlaygroundAccess = function useHasPlaygroundAccess(location) {
  let currentUser;
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let isStaffResult;
  if (stateFromStores != null) {
    isStaffResult = stateFromStores.isStaff();
  }
  let enabled = true === isStaffResult;
  if (!enabled) {
    let isStaffPersonalResult;
    if (stateFromStores != null) {
      isStaffPersonalResult = stateFromStores.isStaffPersonal();
    }
    enabled = true === isStaffPersonalResult;
  }
  const obj2 = { location };
  if (!enabled) {
    enabled = apexExperiment.useConfig(obj2).enabled;
  }
  return enabled;
};
export const getHasPlaygroundAccess = function getHasPlaygroundAccess(quickswitcher_action) {
  const currentUser = UserStore.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let enabled = true === isStaffResult;
  if (!enabled) {
    let isStaffPersonalResult;
    if (currentUser != null) {
      isStaffPersonalResult = currentUser.isStaffPersonal();
    }
    enabled = true === isStaffPersonalResult;
  }
  if (!enabled) {
    const obj = { location: quickswitcher_action };
    enabled = apexExperiment.getConfig(obj).enabled;
  }
  return enabled;
};
