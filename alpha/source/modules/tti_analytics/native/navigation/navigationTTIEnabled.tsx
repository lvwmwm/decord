// Module ID: 18018
// Function ID: 18019
// Name: navigationTTIEnabled
// Dependencies: [15674, 18019, 2]
// Exports: isNavigationTTIEnabled

// Module 18018 (navigationTTIEnabled)
import isTTITest from "isTTITest" /* 15674 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIExperiment2 = tmp(18019);
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/navigationTTIEnabled.tsx");

export const isNavigationTTIEnabled = function isNavigationTTIEnabled() {
  let enabled = isTTITest.isTTITest;
  if (!enabled) {
    const NavigationTTIExperiment = NavigationTTIExperiment2.NavigationTTIExperiment;
    enabled = NavigationTTIExperiment.getConfig({ location: "channel_navigation" }).enabled;
  }
  return enabled;
};
