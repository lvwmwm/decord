// Module ID: 16350
// Function ID: 16351
// Name: vibegrationsPageVisibility
// Dependencies: [1986, 1086, 2]
// Exports: isPageHidden, subscribePageVisibility

// Module 16350 (vibegrationsPageVisibility)
import Constants from "Constants" /* 1086 */;
import AppStateStore_mod from "AppStateStore" /* 1986 */;
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
