// Module ID: 12373
// Function ID: 12374
// Name: conjurePageVisibility
// Dependencies: [2117, 1072, 2]
// Exports: isPageHidden, subscribePageVisibility

// Module 12373 (conjurePageVisibility)
import Constants from "Constants" /* 1072 */;
import AppStateStore_mod from "AppStateStore" /* 2117 */;
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
