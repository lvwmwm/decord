// Module ID: 17293
// Function ID: 17294
// Name: navigationTTIEnabled
// Dependencies: [14965, 17294, 2]
// Exports: isNavigationTTIEnabled

// Module 17293 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 14965 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17294);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
