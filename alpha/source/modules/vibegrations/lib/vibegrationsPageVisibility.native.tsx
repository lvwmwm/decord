// Module ID: 16660
// Function ID: 16661
// Name: vibegrationsPageVisibility
// Dependencies: [1986, 1085, 2]
// Exports: isPageHidden, subscribePageVisibility

// Module 16660 (vibegrationsPageVisibility)
import Constants from "Constants" /* 1085 */;
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
