// Module ID: 18376
// Function ID: 18377
// Name: conjurePageVisibility
// Dependencies: [2118, 1071, 2]
// Exports: isPageHidden, subscribePageVisibility

// Module 18376 (conjurePageVisibility)
import Constants from "Constants" /* 1071 */;
import AppStateStore_mod from "AppStateStore" /* 2118 */;
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
