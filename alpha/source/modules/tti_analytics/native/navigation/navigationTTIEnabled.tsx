// Module ID: 17567
// Function ID: 17568
// Name: navigationTTIEnabled
// Dependencies: [15299, 17568, 2]
// Exports: isNavigationTTIEnabled

// Module 17567 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15299 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17568);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
