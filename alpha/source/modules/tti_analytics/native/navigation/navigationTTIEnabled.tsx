// Module ID: 16470
// Function ID: 16471
// Name: navigationTTIEnabled
// Dependencies: [14152, 16471, 2]
// Exports: isNavigationTTIEnabled

// Module 16470 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14152 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(16471);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
