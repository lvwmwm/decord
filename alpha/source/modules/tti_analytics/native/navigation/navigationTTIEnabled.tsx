// Module ID: 16990
// Function ID: 16991
// Name: navigationTTIEnabled
// Dependencies: [14644, 16991, 2]
// Exports: isNavigationTTIEnabled

// Module 16990 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14644 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(16991);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
