// Module ID: 17975
// Function ID: 17976
// Name: navigationTTIEnabled
// Dependencies: [15637, 17976, 2]
// Exports: isNavigationTTIEnabled

// Module 17975 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15637 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17976);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
