// Module ID: 17674
// Function ID: 17675
// Name: navigationTTIEnabled
// Dependencies: [15417, 17675, 2]
// Exports: isNavigationTTIEnabled

// Module 17674 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15417 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(17675);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
