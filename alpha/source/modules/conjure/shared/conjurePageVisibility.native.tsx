// Module ID: 14521
// Function ID: 14522
// Name: conjurePageVisibility
// Dependencies: [2120, 1072, 2]
// Exports: isPageHidden, subscribePageVisibility

// Module 14521 (conjurePageVisibility)
import Constants from "Constants" /* 1072 */;
import AppStateStore_mod from "AppStateStore" /* 2120 */;
import size from "module_2" /* 2 */;

let AppStateStore = AppStateStore_mod;
const AppStates = Constants.AppStates;
const result = size.fileFinishedImporting("modules/conjure/shared/conjurePageVisibility.native.tsx");

export function isPageHidden() {
  return AppStateStore.getState() !== AppStates.ACTIVE;
}
export function subscribePageVisibility(flushIfHidden) {
  AppStateStore = flushIfHidden;
  AppStateStore.addChangeListener(flushIfHidden);
  return () => AppStateStore.removeChangeListener(flushIfHidden);
}
