// Module ID: 17670
// Function ID: 17671
// Name: navigationTTIEnabled
// Dependencies: [15413, 17671, 2]
// Exports: isNavigationTTIEnabled

// Module 17670 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15413 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17671);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
