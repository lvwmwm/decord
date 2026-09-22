// Module ID: 17037
// Function ID: 17038
// Name: vibegrationsPageVisibility
// Dependencies: [1983, 1078, 2]
// Exports: isPageHidden, subscribePageVisibility

// Module 17037 (vibegrationsPageVisibility)
import AppStateStore from "AppStateStore" /* 1983 */;

const AppStates = fn(1078).AppStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsPageVisibility.native.tsx");

export const isPageHidden = function isPageHidden() {
  return AppStateStore.getState() !== AppStates.ACTIVE;
};
export const subscribePageVisibility = function subscribePageVisibility(flushIfHidden) {
  AppStateStore = flushIfHidden;
  AppStateStore.addChangeListener(flushIfHidden);
  return () => AppStateStore.removeChangeListener(closure_0);
};
