// Module ID: 12123
// Function ID: 12124
// Name: conjurePageVisibility
// Dependencies: [2001, 1087, 2]
// Exports: isPageHidden, subscribePageVisibility

// Module 12123 (conjurePageVisibility)
import Constants from "Constants" /* 1087 */;
import AppStateStore_mod from "AppStateStore" /* 2001 */;
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
