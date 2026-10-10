// Module ID: 16966
// Function ID: 16967
// Name: navigationTTIEnabled
// Dependencies: [14621, 16967, 2]
// Exports: isNavigationTTIEnabled

// Module 16966 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14621 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(16967);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
