// Module ID: 12099
// Function ID: 12100
// Name: conjurePageVisibility
// Dependencies: [1999, 1085, 2]
// Exports: isPageHidden, subscribePageVisibility

// Module 12099 (conjurePageVisibility)
import Constants from "Constants" /* 1085 */;
import AppStateStore_mod from "AppStateStore" /* 1999 */;
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
