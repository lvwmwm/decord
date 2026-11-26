// Module ID: 18592
// Function ID: 18593
// Name: conjurePageVisibility
// Dependencies: [2119, 1071, 2]
// Exports: isPageHidden, subscribePageVisibility

// Module 18592 (conjurePageVisibility)
import Constants from "Constants" /* 1071 */;
import AppStateStore_mod from "AppStateStore" /* 2119 */;
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
