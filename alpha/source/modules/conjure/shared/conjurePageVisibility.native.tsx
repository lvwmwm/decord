// Module ID: 12252
// Function ID: 12253
// Name: conjurePageVisibility
// Dependencies: [1998, 1084, 2]
// Exports: isPageHidden, subscribePageVisibility

// Module 12252 (conjurePageVisibility)
import Constants from "Constants" /* 1084 */;
import AppStateStore_mod from "AppStateStore" /* 1998 */;
import size from "module_2" /* 2 */;

let AppStateStore = AppStateStore_mod;
const AppStates = Constants.AppStates;
const result = size.fileFinishedImporting("modules/conjure/shared/conjurePageVisibility.native.tsx");

export const isPageHidden = function isPageHidden() {
  return AppStateStore.getState() !== AppStates.ACTIVE;
};
export const subscribePageVisibility = function subscribePageVisibility(flushIfHidden) {
  AppStateStore = flushIfHidden;
  AppStateStore.addChangeListener(flushIfHidden);
  return () => AppStateStore.removeChangeListener(flushIfHidden);
};
