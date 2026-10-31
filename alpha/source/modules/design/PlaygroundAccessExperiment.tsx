// Module ID: 13386
// Function ID: 13387
// Name: PlaygroundAccessExperiment
// Dependencies: [1383, 1447, 504, 2]
// Exports: getHasPlaygroundAccess, getPlaygroundAccessExperiment, useHasPlaygroundAccess, usePlaygroundAccessExperiment

// Module 13386 (PlaygroundAccessExperiment)
import get_initialized from "get initialized" /* 504 */;
import UserStore from "UserStore" /* 1383 */;
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-02-mana-playground-access", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/design/PlaygroundAccessExperiment.tsx");

export default apexExperiment;
export function usePlaygroundAccessExperiment(design_systems_settings) {
  const obj = { location: design_systems_settings };
  return apexExperiment.useConfig(obj).enabled;
}
export function getPlaygroundAccessExperiment(location) {
  const obj = { location };
  return apexExperiment.getConfig(obj).enabled;
}
export function useHasPlaygroundAccess(location) {
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
}
export function getHasPlaygroundAccess(quickswitcher_action) {
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
}
