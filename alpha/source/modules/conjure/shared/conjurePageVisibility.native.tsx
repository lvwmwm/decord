// Module ID: 12345
// Function ID: 12346
// Name: conjurePageVisibility
// Dependencies: [1999, 1084, 2]
// Exports: isPageHidden, subscribePageVisibility

// Module 12345 (conjurePageVisibility)
import Constants from "Constants" /* 1084 */;
import AppStateStore_mod from "AppStateStore" /* 1999 */;
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
