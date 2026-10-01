// Module ID: 16348
// Function ID: 16349
// Name: vibegrationsPageVisibility
// Dependencies: [1980, 1074, 2]
// Exports: isPageHidden, subscribePageVisibility

// Module 16348 (vibegrationsPageVisibility)
import Constants from "Constants" /* 1074 */;
import AppStateStore_mod from "AppStateStore" /* 1980 */;
import size from "module_2" /* 2 */;

let AppStateStore = AppStateStore_mod;
const AppStates = Constants.AppStates;
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPageVisibility.native.tsx");

export const isPageHidden = function isPageHidden() {
  return AppStateStore.getState() !== AppStates.ACTIVE;
};
export const subscribePageVisibility = function subscribePageVisibility(flushIfHidden) {
  AppStateStore = flushIfHidden;
  AppStateStore.addChangeListener(flushIfHidden);
  return () => AppStateStore.removeChangeListener(flushIfHidden);
};
