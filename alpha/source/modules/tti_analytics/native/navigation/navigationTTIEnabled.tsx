// Module ID: 16514
// Function ID: 16515
// Name: navigationTTIEnabled
// Dependencies: [14172, 16515, 2]
// Exports: isNavigationTTIEnabled

// Module 16514 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14172 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(16515);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
